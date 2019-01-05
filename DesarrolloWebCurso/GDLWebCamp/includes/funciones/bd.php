<?php
    // Forma orientada a objetos
    $conn = new mysqli('127.0.0.1','root','','gdlwebcamp');
    $conn->query("SET NAMES 'utf8' ");

    if ($conn->connect_error) {
        echo $error -> $conn->connect_error;
    }

?>