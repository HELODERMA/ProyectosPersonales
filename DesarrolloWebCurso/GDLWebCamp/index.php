<?php include_once 'includes/templates/header.php'; ?>

<section class="seccion contenedor">
        <h2>La mejor conferencia de diseño web en español</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam pariatur similique consequatur corporis dolorem quas natus repellat provident molestias, explicabo praesentium veniam eius voluptas deserunt. Quod excepturi aperiam nulla.</p>
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
                    <nav class="menu-programa">
                        <a href="#talleres"><i class="fas fa-code"></i>Talleres</a>
                        <a href="#conferencias"><i class="fas fa-comment"></i>Conferencias</a>
                        <a href="#seminarios"><i class="fas fa-university"></i>Seminarios</a>
                    </nav>

                    <div id="talleres" class="info-curso ocultar clearfix">
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
                    <div id="conferencias" class="info-curso ocultar clearfix">
                        <div class="detalle-evento">
                            <h3>Como ser frelancer</h3>
                            <p><i class="fas fa-clock"></i>10:00 hrs</p>
                            <p><i class="fas fa-calendar"></i>10 de Dic</p>
                            <p><i class="fas fa-user"></i>Eduardo Sanchez</p>
                        </div>

                        <div class="detalle-evento">
                            <h3>Tecnologias del futuro</h3>
                            <p><i class="fas fa-clock"></i>17:00 hrs</p>
                            <p><i class="fas fa-calendar"></i>10 de Dic</p>
                            <p><i class="fas fa-user"></i>Susan Sanchez</p>
                        </div>

                        <a href="" class="button float-right">Ver todos</a>

                    </div>
                    <div id="seminarios" class="info-curso ocultar clearfix">
                        <div class="detalle-evento">
                            <h3>Diseno UX/UI moviles</h3>
                            <p><i class="fas fa-clock"></i>17:00 hrs</p>
                            <p><i class="fas fa-calendar"></i>11 de Dic</p>
                            <p><i class="fas fa-user"></i>Jimenz Espinoza</p>
                        </div>

                        <div class="detalle-evento">
                            <h3>Aprende a programas en una manana</h3>
                            <p><i class="fas fa-clock"></i>10:00 hrs</p>
                            <p><i class="fas fa-calendar"></i>11 de Dic</p>
                            <p><i class="fas fa-user"></i>Susana Rivera</p>
                        </div>

                        <a href="" class="button float-right">Ver todos</a>

                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- end programa -->

    <section class="invitados contenedor seccion">
        <h2>Nuestros invitados</h2>
        <ul class="lista-invitados clearfix">
            <li>
                <div class="invitado">
                    <img src="img/invitado1.jpg" alt="invitado">
                    <p>Rafael Bautista</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado2.jpg" alt="invitado">
                    <p>Rafael Herrera</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado3.jpg" alt="invitado">
                    <p>Gregorio Sanchez</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado4.jpg" alt="invitado">
                    <p>Susana Rivera</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado5.jpg" alt="invitado">
                    <p>Harold Garcia</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado6.jpg" alt="invitado">
                    <p>Susan Sanchez</p>
                </div>
            </li>
        </ul>
    </section>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur asperiores alias quisquam.</p>
                    <footer class="info-testimonial clearfix">
                        <img src="img/testimonial.jpg" alt="testimonial">
                        <cite>Owwaldo Aponte Escobedo <span>Disenador en @prisma</span></cite>
                    </footer>
                </blockquote>
            </div>
            <!-- End testimonial -->

            <div class="testimonial">
                <blockquote>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur asperiores alias quisquam.</p>
                    <footer class="info-testimonial clearfix">
                        <img src="img/testimonial.jpg" alt="testimonial">
                        <cite>Owwaldo Aponte Escobedo <span>Disenador en @prisma</span></cite>
                    </footer>
                </blockquote>
            </div>
            <!-- End testimonial -->

            <div class="testimonial">
                <blockquote>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt ab vel esse adipisci doloremque officiis unde atque, placeat quae ad totam explicabo tenetur fuga recusandae consequatur asperiores alias quisquam.</p>
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


