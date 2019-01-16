<?php

    function obtenerContactos()
    {
        include 'db.php';
        try {
            return $conn->query("select * from contactos");
        } catch (Exception $e) {
            echo "Error " . $e->getMessage() . "</br>";
            return false;
        }
    }

?>