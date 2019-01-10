<?php include_once 'includes/templates/header.php'; ?>

<section class="seccion contenedor">
    <h2>La mejor conferencia de diseño web en español</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam pariatur similique consequatur corporis
        dolorem quas natus repellat provident molestias, explicabo praesentium veniam eius voluptas deserunt. Quod
        excepturi aperiam nulla.</p>
</section>

<section class="programa">
    <div class="contenedor-video">
        <video autoplay loop muted poster="img/bg-talleres.jpg">
            <source src="video/video.mp4" type="video/mp4">
            <source src="video/video.webm" type="video/webm">
            <source src="video/video.ogv" type="video/ogg">
        </video>
    </div>
    <!-- Contenedor video -->

    <div class="contenido-programa">
        <div class="contenedor">

            <div class="programa-evento">
                <h2>Programa del evento</h2>
                <?php
                    try {
                        require_once('includes/funciones/bd.php');
                        $sql = "SELECT *  from categoria_evento";

                        $resultado = $conn->query($sql);

                    } catch (\Exception $th) {
                        echo $th->getMessage();
                    }
        ?>
                <nav class="menu-programa">
                    <?php
                        while ($cat = $resultado->fetch_array(MYSQLI_ASSOC) ) { ?>
                    <?php $categoria = $cat['cat_evento']; ?>
                    <?php $icono = $cat['icono']; ?>
                    <a href="#<?php  echo strtolower($categoria) ?>"><i class="fas <?php echo $icono ?>"></i>
                        <?php echo $categoria ?></a>

                    <?php
                        }
                    ?>
                </nav>

                <?php
                    try {
                        require_once('includes/funciones/bd.php');
                        $sql = " SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento,icono, nombre_invitado, apellido_invitado ";
                        $sql .= " From eventos ";
                        $sql .= " INNER JOIN categoria_evento ";
                        $sql .= " ON eventos.id_categoria_evento = categoria_evento.id_categoria ";
                        $sql .= " INNER JOIN invitados ";
                        $sql .= " ON eventos.id_inv = invitados.invitado_id ";
                        $sql .= " AND eventos.id_categoria_evento = 1";
                        $sql .= " order by evento_id LIMIT 2";
                        // $sql .= " SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento,icono, nombre_invitado, apellido_invitado ";
                        // $sql .= " From eventos ";
                        // $sql .= " INNER JOIN categoria_evento ";
                        // $sql .= " ON eventos.id_categoria_evento = categoria_evento.id_categoria ";
                        // $sql .= " INNER JOIN invitados ";
                        // $sql .= " ON eventos.id_inv = invitados.invitado_id ";
                        // $sql .= " AND eventos.id_categoria_evento = 2";
                        // $sql .= " order by evento_id LIMIT 2";
                        // $sql .= " SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento,icono, nombre_invitado, apellido_invitado ";
                        // $sql .= " From eventos ";
                        // $sql .= " INNER JOIN categoria_evento ";
                        // $sql .= " ON eventos.id_categoria_evento = categoria_evento.id_categoria ";
                        // $sql .= " INNER JOIN invitados ";
                        // $sql .= " ON eventos.id_inv = invitados.invitado_id ";
                        // $sql .= " AND eventos.id_categoria_evento = 3";
                        // $sql .= " order by evento_id LIMIT 2";

                    } catch (\Exception $th) {
                        echo $th->getMessage();
                    }
        ?>

                <?php

                    if(!$conn->multi_query($sql)) {

                     echo "Falló la multiconsulta: ";
                       }
                ?>

                <?php
                    do {
                        $resultado = $conn->store_result();
                        $row = $resultado->fetch_all(MYSQLI_ASSOC);
                        ?>

                <?php $i = 0; ?>
                <?php foreach($row as $evento): ?>
                <?php if($i % 2 == 0) { ?>

                <div id="<?php echo strtolower($evento['cat_evento']) ?>" class="info-curso ocultar clearfix">
                    <?php } ?>
                    <div class="detalle-evento">
                        <h3>HTML5, CSS3 y JavaScript</h3>
                        <p><i class="fas fa-clock"></i>16:00 hrs</p>
                        <p><i class="fas fa-calendar"></i>10 de Dic</p>
                        <p><i class="fas fa-user"></i>Josue Sandoval</p>
                    </div>

                    <div class="detalle-evento">
                        <h3>HTML5, CSS3 y JavaScript</h3>
                        <p><i class="fas fa-clock"></i>20:00 hrs</p>
                        <p><i class="fas fa-calendar"></i>10 de Dic</p>
                        <p><i class="fas fa-user"></i>Josue Sandoval</p>
                    </div>

                    <a href="" class="button float-right">Ver todos</a>
                </div>
                <?php $i++; ?>
                <?php endforeach; ?>

                <?php
                    } while ($conn->more_results() && $conn->next_results() );
                ?>



            </div>
        </div>
    </div>
</section>
<!-- end programa -->

<?php include_once 'includes/templates/invitados.php'; ?>

<!-- End section Invitados -->

<div class="contador parallax">
    <div class="contenedor">
        <ul class="resumen-evento clearfix">
            <li>
                <p class="numero"></p>Invitados
            </li>
            <li>
                <p class="numero"></p>Talleres
            </li>
            <li>
                <p class="numero"></p>Dias
            </li>
            <li>
                <p class="numero"></p>Conferencias
            </li>
        </ul>
    </div>
</div>
<!-- End Contador -->

<section class="precios seccion">
    <h2>Precios</h2>
    <div class="contenedor">
        <ul class="lista-precios clearfix">
            <li>
                <div class="tabla-precio">
                    <h3>Pase por Dia</h3>
                    <p class="numero">$30</p>
                    <ul>
                        <li>Bocadillos Gratis</li>
                        <li>Todas las Conferencias</li>
                        <li>Todos los talleres</li>
                    </ul>
                    <a href="#" class="button hollow">Comprar</a>
                </div>
            </li>

            <li>
                <div class="tabla-precio">
                    <h3>Tosos los dias</h3>
                    <p class="numero">$50</p>
                    <ul>
                        <li>Bocadillos Gratis</li>
                        <li>Todas las Conferencias</li>
                        <li>Todos los talleres</li>
                    </ul>
                    <a href="#" class="button">Comprar</a>
                </div>
            </li>

            <li>
                <div class="tabla-precio">
                    <h3>Pase por dos dias</h3>
                    <p class="numero">$45</p>
                    <ul>
                        <li>Bocadillos Gratis</li>
                        <li>Todas las Conferencias</li>
                        <li>Todos los talleres</li>
                    </ul>
                    <a href="#" class="button hollow">Comprar</a>
                </div>
            </li>

        </ul>
    </div>
</section>
<!-- End section Precios -->

<div id="mapa" class="mapa">

</div>
<!-- end Mapa -->

<section class="seccion">
    <h2>Testimoniales</h2>
    <div class="testimoniales contenedor clearfix">
        <div class="testimonial">
            <blockquote>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci
                    doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur
                    asperiores alias quisquam.</p>
                <footer class="info-testimonial clearfix">
                    <img src="img/testimonial.jpg" alt="testimonial">
                    <cite>Owwaldo Aponte Escobedo <span>Disenador en @prisma</span></cite>
                </footer>
            </blockquote>
        </div>
        <!-- End testimonial -->

        <div class="testimonial">
            <blockquote>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci
                    doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur
                    asperiores alias quisquam.</p>
                <footer class="info-testimonial clearfix">
                    <img src="img/testimonial.jpg" alt="testimonial">
                    <cite>Owwaldo Aponte Escobedo <span>Disenador en @prisma</span></cite>
                </footer>
            </blockquote>
        </div>
        <!-- End testimonial -->

        <div class="testimonial">
            <blockquote>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci
                    doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur
                    asperiores alias quisquam.</p>
                <footer class="info-testimonial clearfix">
                    <img src="img/testimonial.jpg" alt="testimonial">
                    <cite>Owwaldo Aponte Escobedo <span>Disenador en @prisma</span></cite>
                </footer>
            </blockquote>
        </div>
        <!-- End testimonial -->
    </div>
</section>
<!-- End testimoniales -->

<div class="newsletter parallax">
    <div class="contenido contenedor">
        <p>Registrate al newsletter</p>
        <h3>gdlwebcamp</h3>
        <a href="#" class="button transparent">Registro</a>
    </div>
</div>
<!-- End newsletter -->

<section class="seccion">
    <h2>Faltan</h2>
    <div class="cuenta-regresiva contenedor">
        <ul class="clearfix">
            <li>
                <p id="dias" class="numero"></p>
                dias
            </li>
            <li>
                <p id="horas" class="numero"></p>
                horas
            </li>
            <li>
                <p id="minutos" class="numero"></p>
                minutos
            </li>
            <li>
                <p id="segundos" class="numero"></p>
                segundos
            </li>
        </ul>
    </div>
</section>
<!-- End Cuenta Regresiva -->

<!-- footer externo php templates -->
<?php include_once 'includes/templates/footer.php'; ?>