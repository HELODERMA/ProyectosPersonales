<?php
session_start();
include 'inc/funciones/funciones.php';
include 'inc/templates/header.php';

if (isset($_GET['cerrar-sesion'])) {
    if ($_GET['cerrar-sesion'] == true) {
        $_SESSION = array();
    }
}

// echo "<pre>";
// var_dump($_SESSION);
// echo "<hr>";
// var_dump($_GET);
// echo "</pre>";

?>
<div class="contenedor-formulario">
    <h1>UpTask</h1>
    <form id="formulario" class="caja-login" method="post">
        <div class="campo">
            <label for="usuario">Usuario: </label>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario">
        </div>
        <div class="campo">
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password">
        </div>
        <div class="campo enviar">
            <input type="hidden" id="tipo" value="login">
            <input type="submit" class="boton" value="Iniciar Sesión">
        </div>

        <div class="campo">
            <a href="crear-cuenta.php">Crea una cuenta nueva</a>
        </div>
    </form>
</div>

<?php
include 'inc/templates/footer.php';
?>