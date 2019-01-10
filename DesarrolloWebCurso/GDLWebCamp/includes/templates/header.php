<!doctype html>
<html class="no-js" lang="">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->

        <!-- NORMALIZE -->
        <link rel="stylesheet" href="css/normalize.css">
        <!-- FONT AWESOME -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous">

        <!-- Cargando Lightbox and colorbox dinamicamene dependiendo de la pagina -->

        <?php
            $archivo = basename($_SERVER['PHP_SELF']);
            $pagina = str_replace(".php", "", $archivo) ;
            if ($pagina == 'invitados' || $pagina == 'index') {
                echo '<link rel="stylesheet" href="css/colorbox.css">';
            } else if ($pagina == 'conferencia'){
                echo '<link rel="stylesheet" href="css/lightbox.css">';
            }
        ?>

        <!-- Mapa Leaflet -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
            crossorigin="" />
        <!-- Fuentes de Google -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald|PT+Sans" rel="stylesheet">

        <!-- MAIN -->
        <link rel="stylesheet" href="css/main.css">
    </head>

    <body class=" <?php echo $pagina ?> ">

        <header class="site-heade">
            <div class="hero">
                <div class="contenido-header">
                    <nav class="redes-sociales">
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-twitter-square"></i></a>
                        <a href=""><i class="fab fa-pinterest-square"></i></a>
                        <a href=""><i class="fab fa-youtube-square"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </nav>
                    <div class="informacion-evento">
                        <div class="clearfix">
                            <p class="fecha"><i class="fas fa-calendar-alt"></i>10-12-dic</p>
                            <p class="ciudad"><i class="fas fa-map-marker-alt"></i>GDL</p>
                        </div>
                        <h1 class="nombre-sitio">GDLWebCamp</h1>
                        <p class="slogan">La mejor conferencia de <span>diseño web</span></p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Barra de manu -->
        <div class="barra">
            <div class="contenedor clearfix">
                <div class="logo">
                    <a href="index.php">
                        <img src="img/logo.svg" alt="Logo">
                    </a>
                </div>
                <div class="menu-movil">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="navegacion-principal clearfix">
                    <a href="conferencia.php">Conferencia</a>
                    <a href="calendario.php">Calendario</a>
                    <a href="invitados.php">Invitados</a>
                    <a href="registro.php">Reservaciones</a>
                </nav>
            </div>
        </div>
        <!-- End Barra -->