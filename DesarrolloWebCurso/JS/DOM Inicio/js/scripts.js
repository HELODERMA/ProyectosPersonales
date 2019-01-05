(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        // Obtener ekemento por ID
        var logo = document.getElementById('logo');
        // Obtener elementos por clase
        var navegacion = document.getElementsByClassName('navegacion');
        console.log(navegacion);
        // Obtener elementos por tag name
        var enlaces = document.getElementsByTagName('a');
        console.log(enlaces.length);
        // agregando tarjet blanc
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].setAttribute('taget', '_blanck');
        }

        // Query selector
        var logo = document.querySelector('#logo');
        console.log(logo);

        // Query selector all
        var hdos = document.querySelectorAll('h2');
        console.log(hdos);

        // Creando elementos

        var sidebar = document.querySelector('#sidebar');

        var nuevoElemento = document.createElement("h1");

        var nuevoTexto = document.createTextNode("Hola Creador");

        nuevoElemento.appendChild(nuevoTexto);

        sidebar.appendChild(nuevoElemento);

        // Agregando entrada 6

        var enlacesSidebar = document.querySelectorAll('#sidebar ul');
        // Creando el enlace
        var nuevoEnlace = document.createElement('A');
        var testoEnlace = document.createTextNode("Entrada 6");

        nuevoEnlace.appendChild(testoEnlace);

        // Creando la Lista
        var nuevaLista = document.createElement('LI');
        nuevaLista.appendChild(nuevoEnlace);

        // Lo agregamos al menu
        enlacesSidebar[0].appendChild(nuevaLista);

        // CLONAR UN NODO

        // var contenido = document.querySelectorAll('main');
        // console.log(contenido);
        // var nuevoContenido = contenido[0].cloneNode(true);

        // var side = document.querySelector('aside');
        // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);

    });

    // ELIMINAR NODES
    var eliminarPos = document.querySelector('main article');
    eliminarPos.parentNode.removeChild(eliminarPos);

    // REMPLAZAR NODES
    var viejoNodo = document.querySelector('main h2');
    var nuevoNodo = document.querySelector('footer h2');

    // viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
})();