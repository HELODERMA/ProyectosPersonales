$(document).ready(function() {

    new WOW().init();

    // All animations will take exactly 500ms
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 87,
        speedAsDuration: true
    });

    // OCultar flecha
    $(function() {
        $(window).scroll(function() {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= 50) {
                $(".arriba").fadeIn();
            } else {
                $(".arriba").fadeOut();
            }
        });
    });

    // menu animado
    $(window).scroll(function() {
        var nav = $('.encabezado');
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            nav.addClass("fondo-menu");
        } else {
            nav.removeClass("fondo-menu");
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsiveClass: true,
        autoWidth: false,
        navText: ['<i class="fas fa-arrow-circle-left" title="Anterior"></i>', '<i class="fas fa-arrow-circle-right" title="Siguiente"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 2,
                margin: 20,
            },
            800: {
                items: 3,
                margin: 20,
            },
            1000: {
                items: 4,
                margin: 20,
            }
        }
    });
});