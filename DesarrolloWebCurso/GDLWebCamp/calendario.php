<?php include_once 'includes/templates/header.php'; ?>

<section class="section contenedor">
    <h2>Calendario de eventos</h2>

    <?php
            try {
                require_once('includes/funciones/bd.php');
                $sql = " SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento,icono, nombre_invitado, apellido_invitado ";
                $sql .= " From eventos ";
                $sql .= " INNER JOIN categoria_evento ";
                $sql .= " ON eventos.id_categoria_evento = categoria_evento.id_categoria ";
                $sql .= " INNER JOIN invitados ";
                $sql .= " ON eventos.id_inv = invitados.invitado_id ";
                $sql .= " order by evento_id";

                $resultado = $conn->query($sql);

            } catch (\Exception $th) {
                echo $th->getMessage();
            }
        ?>

    <div class="calendario">
        <?php
                $calendario = array();
                while ( $eventos = $resultado->fetch_assoc()) {

                    // Obtiene la fecha del evento
                    $fecha = $eventos['fecha_evento'];
                    $categoria = $eventos['cat_evento'];

                        $evento = array(
                            'titulo' => $eventos['nombre_evento'],
                            'fecha' => $eventos['fecha_evento'],
                            'hora' => $eventos['hora_evento'],
                            'categoria' => $eventos['cat_evento'],
                            'icono' => 'fas' . " " . $eventos['icono'],
                            'invitado' => $eventos['nombre_invitado'] . " " . $eventos['apellido_invitado']
                        );

                    $calendario [$fecha][] = $evento;

                    ?>

        <?php } //Fin del while ?>

        <!-- Imprime todos los eventos -->
        <?php
                    foreach ($calendario as $dia => $lista_eventos) { ?>
        <h3>
            <i class="fas fa-calendar"></i>
            <?php
                            // Unix
                            setlocale(LC_TIME, 'es_ES.UTF-8');
                            // Windows
                            setlocale(LC_TIME, 'spanish');

                            // Arreglando mis acentos UTF8_ENCODE()
                            echo utf8_encode(strftime("%A, %d de %B del %Y", strtotime($dia))); ?>
        </h3>
        <?php foreach ($lista_eventos as $evento) { ?>

        <div class="dia">
            <p class="titulo">
                <?php echo $evento['titulo'] ?>
            </p>
            <p class="hora"><i class="fas fa-clock"></i>
                <?php echo $evento['fecha']. " " . $evento['hora'] ?>
            </p>
            <p class="categoria">
                <i class="<?php echo $evento['icono'] ?>"></i>
                <?php echo $evento['categoria'] ?>
            </p>
            <p class="invitado">
                <i class="fas fa-user"></i>
                <?php echo $evento['invitado'] ?>
            </p>
        </div>

        <?php } //Fin foreach eventos ?>
        <?php } //Fin foreach dias?>

    </div>
    <pre>
        <?php var_dump($calendario); ?>
    </pre>

    <?php $conn->close();?>

</section>

<?php include_once 'includes/templates/footer.php'; ?>