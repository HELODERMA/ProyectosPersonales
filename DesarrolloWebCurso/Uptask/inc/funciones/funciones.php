<?php

function obtenerPaginaActual()
{
    $archivo = basename($_SERVER['PHP_SELF']);
    $pagina = str_replace('.php', "", $archivo);
    return $pagina;
}

// Consultas

// Obtener todos los proyectos
function obtenerProyectos()
{
    include 'conexion.php';
    try {
        return $conn->query('SELECT id, nombre FROM proyectos');
    } catch (\Throwable $th) {
        echo "Error! : " . $th->getMessage();
        return false;
    }
}

// Obtiene el nombre del proyecto
function obtenerNombreProyecto($id = null)
{
    include 'conexion.php';
    try {
        return $conn->query("SELECT nombre FROM proyectos WHERE id = {$id} ");
    } catch (Exception $th) {
        echo "Error " . $th->getMessage();
        return false;
    }
}

// Obtener tareas del proyecto
function obtenerTareasProyecto($id = null)
{
    include 'conexion.php';
    try {
        return $conn->query("SELECT * FROM tareas WHERE id_proyecto = {$id} ");
    } catch (Exception $th) {
        echo "Error " . $th->getMessage();
        return false;
    }
}