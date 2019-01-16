<?php
    define('DB_USUARIO','root');
    define('DB_PASSWORD','');
    define('DB_HOST','127.0.0.1');
    define('DB_NAME','agendaphp');
    // Dos parametros mas
    // PUERTO
    // SOCKET

    $conn = new mysqli(DB_HOST,DB_USUARIO,DB_PASSWORD,DB_NAME);

    // Ping te dice que hace la conexion a la base de datos si te pone !
    // echo $conn->ping();

?>