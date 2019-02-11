<?php

if (isset($_POST['accion'])) {
    if ($_POST['accion'] == 'crear') {

        $proyecto = filter_var($_POST['proyecto'], FILTER_SANITIZE_STRING);
        $accion = filter_var($_POST['accion'], FILTER_SANITIZE_STRING);

        include '../funciones/conexion.php';

        try {
            $stmt = $conn->prepare("INSERT INTO proyectos (nombre) VALUES (?)");
            $stmt->bind_param("s", $proyecto);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto',
                    'id_insertado' => $stmt->insert_id,
                    'tipo' => $accion,
                    'nombre_proyecto' => $proyecto
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