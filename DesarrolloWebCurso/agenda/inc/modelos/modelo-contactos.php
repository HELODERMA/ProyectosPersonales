<?php require_once('../funciones/db.php'); ?>
<?php

    if(isset($_POST['accion'])){
        if ($_POST['accion'] == 'crear') {
            // Crear un usuario

            // Validar entradas
            $nombre = filter_var($_POST['nombre'],FILTER_SANITIZE_STRING);
            $empresa = filter_var($_POST['empresa'],FILTER_SANITIZE_STRING);
            $telefono = filter_var($_POST['telefono'],FILTER_SANITIZE_STRING);

            try {
                $stmt = $conn->prepare("INSERT INTO contactos (nombre,empresa,telefono) VALUES (?,?,?)");
                $stmt->bind_param("sss",$nombre, $empresa,$telefono);
                $stmt->execute();
                if ($stmt->affected_rows == 1) {
                    $respuesta = array (
                    'respuesta'=>'correcto',
                    'datos' => array (
                        'nombre'=>$nombre,
                        'empresa'=>$empresa,
                        'telefono'=>$telefono,
                        'id_insertado'=> $stmt->insert_id
                    )
                    );
                };
                $stmt->close();
                $conn->close();
            } catch (Exception $e) {
                $respuesta = array (
                    'error' => $e->getMessage()
                );
            }
            echo json_encode($respuesta);
        }
    }

    if(isset($_GET['accion'])){
        if ($_GET['accion'] == 'borrar') {
            // Validar entradas
            $id = filter_var($_GET['id'],FILTER_SANITIZE_NUMBER_INT);

            try {
                $stmt = $conn->prepare("DELETE FROM contactos where id = ?");
                $stmt->bind_param("i",$id);
                $stmt->execute();

                if ($stmt->affected_rows == 1) {
                    $respuesta = array (
                        'respuesta'=>'correcto'
                    );
                };

                $stmt->close();
                $conn->close();

            } catch (Exception $th) {
                $respuesta = array(
                    'error' => $th->getMessage()
                );
            }

            echo json_encode($respuesta);

        }
    }

    if(isset($_POST['accion'])){
        if ($_POST['accion'] == 'editar') {

            // Validar entradas
            $nombre = filter_var($_POST['nombre'],FILTER_SANITIZE_STRING);
            $empresa = filter_var($_POST['empresa'],FILTER_SANITIZE_STRING);
            $telefono = filter_var($_POST['telefono'],FILTER_SANITIZE_STRING);
            $id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);

            try {
                $stmt = $conn->prepare("UPDATE contactos set nombre = ? , empresa = ? , telefono = ? where id = ? ");
                $stmt->bind_param("sssi",$nombre, $empresa,$telefono,$id);
                $stmt->execute();
                if ($stmt->affected_rows == 1) {
                    $respuesta = array (
                    'respuesta'=>'correcto',
                    );
                };
                $stmt->close();
                $conn->close();
            } catch (Exception $e) {
                $respuesta = array (
                    'error' => $e->getMessage()
                );
            }

            echo json_encode($respuesta);
        }
    }


?>