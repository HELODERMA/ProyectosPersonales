const formularioContactos = document.querySelector('#contacto'),
    listadoContactos = document.querySelector('#listado-contactos tbody');

eventListener();

function eventListener(params) {
    //Cuando el formulario se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e) {
    e.preventDefault();
    //Leer los datos de los inputs
    const nombre = document.querySelector('#nombre').value,
        empresa = document.querySelector('#empresa').value,
        telefono = document.querySelector('#telefono').value,
        accion = document.querySelector('#accion').value;

    if (nombre === '' || empresa === '' || telefono === '') {
        // Dos parametros texto y clase
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
    } else {
        // Pasa la validacion AJAX
        const infoContacto = new FormData;
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('accion', accion);

        // console.log(...infoContacto);
        if (accion === 'crear') {
            // Crear contacto
            insertarDB(infoContacto);
        } else {
            // Editar contacto
        }
    }
}

// llamado AJAX
function insertarDB(datos) {
    // PASO1: CREAR OBJETO
    const xhr = new XMLHttpRequest();

    // PASO1: ABRIR LA CONEXION
    xhr.open('POST', 'inc/modelos/modelo-contactos.php', true);
    // PASO1: PASAR LOS DATOS
    xhr.onload = function() {
            if (this.status === 200) {
                // console.log(JSON.parse(xhr.responseText));

                // Leemos la respuesta de PHP
                const respuesta = JSON.parse(xhr.responseText);

                //
                // MODIFICANDO EL DOM
                //


                // Insertar nuevo Elemento a la tabla
                const nuevoContacto = document.createElement('tr');
                nuevoContacto.innerHTML = `
                        <td>${respuesta.datos.nombre}</td>
                        <td>${respuesta.datos.empresa}</td>
                        <td>${respuesta.datos.telefono}</td>
                    `;

                //Crear un contenedor para los boletos
                const contenedorAcciones = document.createElement('td');

                // Crear icono editar
                const iconoEditar = document.createElement('i');
                iconoEditar.classList.add('fas', 'fa-pen');

                // Crear enlace para Editar
                const btnEditar = document.createElement('a');
                btnEditar.appendChild(iconoEditar);
                btnEditar.href = `editar.php?id=${respuesta.datos.id_insertado}`;
                btnEditar.classList.add('btn', 'btn-editar');

                // Agregandolo al padre
                contenedorAcciones.appendChild(btnEditar);

                // CREAR ICONO DE ELIMINAR
                const iconoEliminar = document.createElement('i');
                iconoEliminar.classList.add('fas', 'fa-trash-alt');

                // Boton de eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.appendChild(iconoEliminar);
                btnEliminar.setAttribute('data-id', respuesta.datos.id_insertado);
                btnEliminar.classList.add('btn', 'btn-borrar');

                // Agregarlo al padre
                contenedorAcciones.appendChild(btnEliminar);

                // AGREGARLO AL TR
                nuevoContacto.appendChild(contenedorAcciones);

                // Agregarlo a la tabla
                listadoContactos.appendChild(nuevoContacto);
                //
                // END MODIFICANDO EL DOM
                //



                // Resetear el formularioContactos
                document.querySelector('form').reset();

                // Mostrar la notificacion
                mostrarNotificacion('Contacto creado correctamente', 'correcto');

            }
        }
        // PASO1: ENVIAR LOS DATOS
    xhr.send(datos);
    // PASO1: LEER ERRORES
}

// Notificacion en pantalla

function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    // Formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    // Ocultar y mostrar la notificacion
    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                notificacion.remove();
            }, 500);
        }, 3000);
    }, 100);

}