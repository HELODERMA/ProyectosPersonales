<?php

if (isset($_POST['accion'])) {
    if ($_POST['accion'] == 'crear') {

        $usuario = filter_var($_POST['usuario'], FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
        $accion = filter_var($_POST['accion'], FILTER_SANITIZE_STRING);

        $opciones = array(
            'cost' => 12
        );

        $hash_password = password_hash($password, PASSWORD_BCRYPT, $opciones);

        include '../funciones/conexion.php';

        try {
            $stmt = $conn->prepare("INSERT INTO usuarios (usuario, password) VALUES (?,?)");
            $stmt->bind_param("ss", $usuario, $hash_password);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto',
                    'id_insertado' => $stmt->insert_id,
                    'tipo' => $accion
                );
            } else {
                $respuesta = array(
                    'respuesta' => 'error'
                );
            };

            $stmt->close();
            $conn->close();

        } catch (Exception $e) {
            $respuesta = array(
                'error' => $e->getMessage(),
            );
        }

        echo json_encode($respuesta);
    }
}

if (isset($_POST['accion'])) {
    if ($_POST['accion'] == 'login') {

        $usuario = filter_var($_POST['usuario'], FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
        $accion = filter_var($_POST['accion'], FILTER_SANITIZE_STRING);

        include '../funciones/conexion.php';

        try {
            // Seleccionar el usuario de la DB
            $stmt = $conn->prepare("SELECT * FROM usuarios where usuario = ?");
            $stmt->bind_param("s", $usuario);
            $stmt->execute();
            // Loguear al usuario
            $stmt->bind_result($id_usuario, $nombre_usuario, $password_usuario);
            $stmt->fetch();

            if ($nombre_usuario) {
                // El usuario _PAss check
                if (password_verify($password, $password_usuario)) {
                    // Iniciar la sesion
                    session_start();
                    $_SESSION['nombre'] = $usuario;
                    $_SESSION['id'] = $id_usuario;
                    $_SESSION['login'] = true;
                    // Login correcto
                    $respuesta = array(
                        'respuesta' => 'correcto',
                        'nombre' => $nombre_usuario,
                        'tipo' => $accion
                    );
                } else {
                    // Login incorrecto
                    $respuesta = array(
                        'error' => 'Comprobar Usuario/Contraseña'
                    );
                }

            } else {
                $respuesta = array(
                    'error' => 'Comprobar Usuario/Contraseña'
                );
            }

            $stmt->close();
            $conn->close();

        } catch (Exception $e) {
            $respuesta = array(
                'error' => $e->getMessage(),
            );
        }

        echo json_encode($respuesta);
    }
}





