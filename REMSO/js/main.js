$(document).ready(function() {

    new WOW().init();

    // All animations will take exactly 500ms
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 83.6,
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

// Barra Active josue

$(document).ready(function() {
    $(document).on("scroll", onScroll);
    //smoothscroll
    var menus = $("#menu-principal ul li a");

    $(menus).on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var barramedida = $('.encabezado').outerHeight();
    var scrollPos = $(document).scrollTop() + barramedida;
    $('#menu-principal ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top) <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-principal ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
            // $('#menu-principal ul li:last-child a').addClass('active');
        }
    });
}