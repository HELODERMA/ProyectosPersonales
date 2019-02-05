<script src="js/sweetalert2.all.min.js"></script>

<?php
// Cargar script JS en dos paginas
$actual = obtenerPaginaActual();
if ($actual === 'crear-cuenta' || $actual === 'login') {
    echo '<script src="js/formulario.js"></script>';
} else {
    echo '<script src="js/scripts.js"></script>';
};
?>

</body>

</html>