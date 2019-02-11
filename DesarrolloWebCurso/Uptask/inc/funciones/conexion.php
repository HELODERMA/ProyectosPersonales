<?php

$conn = new mysqli('127.0.0.1', 'root', '', 'uptask');

if ($conn->connect_error) {
    echo $conn->connect_error;
}

// Acentos
$conn->set_charset('utf8');