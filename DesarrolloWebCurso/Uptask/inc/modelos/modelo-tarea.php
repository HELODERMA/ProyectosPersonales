<?php
if (isset($_POST['accion'])) {

    if ($_POST['accion'] == 'crear') {

        $accion = filter_var($_POST['accion'], FILTER_SANITIZE_STRING);
        $id_proyecto = filter_var($_POST['id_proyecto'], FILTER_SANITIZE_NUMBER_INT);
        $tarea = filter_var($_POST['tarea'], FILTER_SANITIZE_STRING);

        include '../funciones/conexion.php';

        try {
            $stmt = $conn->prepare("INSERT INTO tareas (nombre,id_proyecto) VALUES (?,?)");
            $stmt->bind_param("si", $tarea, $id_proyecto);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto',
                    'id_insertado' => $stmt->insert_id,
                    'tipo' => $accion,
                    'tarea' => $tarea
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

    // ACTUALIZAR

    if ($_POST['accion'] == 'actualizar') {

        $accion = filter_var($_POST['accion'], FILTER_SANITIZE_STRING);
        $id_tarea = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
        $estado = filter_var($_POST['estado'], FILTER_SANITIZE_NUMBER_INT);

        include '../funciones/conexion.php';

        try {
            $stmt = $conn->prepare("UPDATE tareas set estado = ? WHERE id = ?");
            $stmt->bind_param("ii", $estado, $id_tarea);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto'
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

    // ELIMINAR

    if ($_POST['accion'] == 'eliminar') {

        $id_tarea = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

        include '../funciones/conexion.php';

        try {
            $stmt = $conn->prepare("DELETE FROM tareas WHERE id = ?");
            $stmt->bind_param("i",$id_tarea);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto'
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

        echo json_encode($_POST);
    }

}

