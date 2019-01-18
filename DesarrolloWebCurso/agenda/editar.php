<?php
    include "inc/layout/header.php";
    include "inc/funciones/funciones.php";

    $id = filter_var($_GET['id'],FILTER_SANITIZE_NUMBER_INT);

    $resultado = obtenerContacto($id);
    $contacto = $resultado->fetch_assoc();

?>

<div class="contenedor-barra">
    <div class="contenedor barra">
        <a class="btn volver" href="index.php">volver</a>
        <h1>Ediar Contactos</h1>
    </div>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>Edite el contacto</legend>
        <?php include "inc/layout/formulario.php";?>
    </form>
</div>



<?php include "inc/layout/footer.php";?>