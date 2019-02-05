<?php

function usuario_autentificado()
{
    if (!revisar_usuario()) {
        header('Location:login.php');
        exit();
    }
}

function revisar_usuario()
{
    return isset($_SESSION['nombre']);
}

session_start();
// echo "<pre>";
// var_dump($_SESSION);
// echo "<hr>";
// var_dump($_GET);
// echo "</pre>";

usuario_autentificado();