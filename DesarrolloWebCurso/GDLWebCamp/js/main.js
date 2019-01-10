// Funcion EXT_texture_filter_anisotropic, se ejecuta sin ser llamada

(function() {

    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        // Mapa
        if (document.getElementById('mapa')) {
            var map = L.map('mapa').setView([19.418969, -99.187214], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([19.418969, -99.187214]).addTo(map)
                .bindPopup('GDLWebCamp.')
                .openPopup()
                .bindTooltip('Un Toolip')
                .openTooltip();
        }

        // campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // botones
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        // extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        // boton Calcular

        if (document.getElementById('calcular')) {

            calcular.addEventListener('click', calcularMontos);

            pase_dia.addEventListener('blur', mostrarDias);
            pase_dosdias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === '') {
                    alert("Debes elegir un regalo");
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2dias = parseInt(pase_dosdias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar = (boletosDia * 30) + (boletos2dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                    var listadoProductos = [];

                    if (boletosDia >= 1) {
                        listadoProductos.push(`${boletosDia} Boletos por dia`);
                    }
                    if (boletos2dias >= 1) {
                        listadoProductos.push(`${boletos2dias} pases por 2 dias`);
                    }
                    if (boletoCompleto >= 1) {
                        listadoProductos.push(`${boletoCompleto} Pases completos`);
                    }
                    if (cantCamisas >= 1) {
                        listadoProductos.push(`${cantCamisas} Camisas`);
                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(`${cantEtiquetas} Etiquetas`);
                    }
                    lista_productos.style.display = "block";
                    lista_productos.innerHTML = '';
                    for (let i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '</br>'
                    }

                    suma.innerHTML = "$ " + totalPagar.toFixed(2);

                }
            }

            function mostrarDias() {

                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                let diasElegidos = [];

                if (boletosDia > 0) {
                    diasElegidos.push('viernes');
                } else {
                    document.getElementById('viernes').style.display = 'none';
                }
                if (boletos2dias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                } else {
                    document.getElementById('sabado').style.display = 'none';
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                } else {
                    document.getElementById('domingo').style.display = 'none';
                }

                for (let i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'flex';
                }
            }
        }




    });
    // end document Content Loaded
})();

$(function() {

    // LETTERING TITTLE
    $('.nombre-sitio').lettering();

    //Agregar clase ACTIVE al menu jquery and php

    $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
    $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
    $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');
    $('body.reservaciones .navegacion-principal a:contains("Reservaciones")').addClass('activo');


    // Menu fijo

    let windowHeight = $(window).height();
    let barraAltura = $('.barra').innerHeight();

    // Cuanto Scrollin hacemos

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({
                'margin-top': barraAltura + 'px'
            });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({
                'margin-top': '0px'
            });
        }
    })

    // MENU RESPONSIVE

    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
        $('.navegacion-principal').css({
            'display': 'inline-block'
        })
    });

    // Para la seccion de PROGRAMA CONFERENCIA
    $('.programa-evento .info-curso:first').show();
    $('.programa-evento a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {
        $('.ocultar').hide();
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        let enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
    });

    // ANIMACION NUMEROS
    $('.resumen-evento li:nth-child(1) p').animateNumber({
        number: 6
    }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({
        number: 15
    }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({
        number: 3
    }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({
        number: 9
    }, 1500);

    // ANIMACION CONTADOR REGRESIVO

    $('.cuenta-regresiva').countdown('2019/03/27 12:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })

    // Colorbox

    $('.invitado-info').colorbox({
        inline: true,
        width: "60%"
    });




});