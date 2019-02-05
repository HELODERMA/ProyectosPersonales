const formularioContactos = document.querySelector('#contacto'),
    listadoContactos = document.querySelector('#listado-contactos tbody'),
    inputBuscador = document.querySelector('#buscar');

eventListener();

function eventListener(params) {
    //Cuando el formulario se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);

    // Listener para eliminar
    if (listadoContactos) {
        listadoContactos.addEventListener('click', eliminarContacto);
    }

    // Input buscador
    inputBuscador.addEventListener('input', buscarContactor);

    // LLamado a la funcion que muestra numero de contactos
    numeroContactos();

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
            // Leer ID
            const idRegistro = document.querySelector('#id').value;
            infoContacto.append('id', idRegistro);
            actualizarRegistro(infoContacto);
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

                // ACtualizar numero
                numeroContactos();

            }
        }
        // PASO1: ENVIAR LOS DATOS
    xhr.send(datos);
    // PASO1: LEER ERRORES
}

function actualizarRegistro(datos) {
    // console.log(...datos);
    // Crear el objeto
    const xhr = new XMLHttpRequest();

    // Abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-contactos.php', true);

    // Leer la respuesta
    xhr.onload = function() {
        if (this.status == 200) {
            const respuesta = JSON.parse(xhr.responseText);
            if (respuesta.respuesta == 'correcto') {
                mostrarNotificacion('Contacto Editado Correctamente', 'correcto');
            } else {
                mostrarNotificacion('Hubo en error', 'error');
            }
            // Redireccionar
            setTimeout(() => {
                window.location.href = 'index.php';
            }, 4000);
        }
    }

    // enviar la peticion
    xhr.send(datos);
}

// Eliminar contacto
function eliminarContacto(e) {
    if (e.target.parentElement.classList.contains('btn-borrar')) {
        const id = e.target.parentElement.getAttribute('data-id');
        // Preguntar al usuario
        const respuesta = confirm('¿Estas seguro(a)?');

        // llamado a ajax
        if (respuesta) {
            // Crear el objeto
            const xhr = new XMLHttpRequest();

            // Abrir la conexion
            xhr.open('GET', `inc/modelos/modelo-contactos.php?id=${id}&accion=borrar`, true);

            // Leer la respuesta
            xhr.onload = function() {
                    if (this.status == 200) {
                        const resultado = JSON.parse(xhr.responseText);
                        console.log(resultado);
                        if (resultado.respuesta == 'correcto') {

                            //Eliminar el registro del DOM
                            e.target.parentElement.parentElement.parentElement.remove();

                            // Mostrar notificacion
                            mostrarNotificacion('Contacto eliminado', 'correcto');

                            // ACtualizar numero
                            numeroContactos();

                        }
                    }
                }
                // Enviar la peticion
            xhr.send();
        } else {
            // Mostrar Notificacion
            mostrarNotificacion('Contacto no eliminado...', 'error');
        }
    }
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

// Buscador de Registros
function buscarContactor(e) {
    const expresion = new RegExp(e.target.value, "i"),
        registros = document.querySelectorAll('tbody tr');

    registros.forEach(registro => {
        registro.style.display = 'none';
        // console.log(registro.childNodes);
        if (registro.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
            registro.style.display = 'table-row';
        }
        numeroContactos();
    });
}

// Mostrar el numero de contactos
function numeroContactos() {
    const totalContactos = document.querySelectorAll('tbody tr'),
        contenedorNumero = document.querySelector('.total-contactos span');
    console.log(totalContactos.length);
    let total = 0;

    totalContactos.forEach(contacto => {
        if (contacto.style.display === '' | contacto.style.display === 'table-row') {
            total++;
        }
    });

    // console.log(total);
    contenedorNumero.textContent = total;
}