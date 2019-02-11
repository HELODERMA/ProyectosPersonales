eventListeners();

const listaProyectos = document.querySelector('ul#proyectos');

function eventListeners() {
    // Document Ready
    document.addEventListener('DOMContentLoaded', function () {
       actualizarProgreso() ;
    });

    // Boton para crear proyecto
    document.querySelector('.crear-proyecto a').addEventListener('click', nuevoProyecto);

    // Boton para una nueva tarea
    document.querySelector('.nueva-tarea').addEventListener('click', agregarTarea);

    // Botones para las acciones de las tareas  (TEcnica DELEGATIONS)
    document.querySelector('.listado-pendientes').addEventListener('click', accionesTareas);
}

function nuevoProyecto(e) {
    e.preventDefault();
    // Crear input nuvo proyecto
    let nuevoProyecto = document.createElement('li');
    nuevoProyecto.innerHTML = '<input type="text" id="nuevo-proyecto">';
    listaProyectos.appendChild(nuevoProyecto);

    // Seleccionar el id del nuevo proyecto
    let inputNuevoProyecto = document.querySelector('#nuevo-proyecto');

    // Al presionar enter crear el proyecto
    inputNuevoProyecto.addEventListener('keypress', function(e) {
        let tecla = e.which || e.code;

        if (tecla === 13) {
            guardarProyectoDB(inputNuevoProyecto.value);
            listaProyectos.removeChild(nuevoProyecto);
        }
    });

}

function guardarProyectoDB(proyecto) {
    // Crear el llamado
    var xhr = new XMLHttpRequest();
    // enviar datos por form data
    var datos = new FormData();
    datos.append('proyecto', proyecto);
    datos.append('accion', 'crear');
    // Abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-proyecto.php', true);
    // Carga
    xhr.onload = function() {
            if (this.status === 200) {
                let respuesta = JSON.parse(xhr.responseText);
                let proyecto = respuesta.nombre_proyecto,
                    id_proyecto = respuesta.id_insertado,
                    tipo = respuesta.tipo,
                    resultado = respuesta.respuesta;
                // Comprobar la insercion
                if (resultado === 'correcto') {
                    // Exitoso
                    if (tipo === 'crear') {
                        // Inyectar en el HTML
                        let nuevoProyecto = document.createElement('li');
                        nuevoProyecto.innerHTML = `
                            <a href="index.php?id_proyecto=${id_proyecto}" id="proyecto:${id_proyecto}">
                            ${proyecto}
                        `;
                        // Agregar al HTML
                        listaProyectos.appendChild(nuevoProyecto);
                        // eviar alerta
                        swal("PRoyecto creado", "El proyecto" + proyecto + "se creoexitosamente", "success")
                            .then(resultado => {
                                if (resultado.value) {
                                    // redireccionar a la nueva url
                                    window.location.href = 'index.php?id_proyecto=' + id_proyecto;
                                }
                            });
                    } else {

                    }
                } else {
                    // error
                    swal("Error", "Hubo un error", "error");
                }

            }
        }
        // enviar request
    xhr.send(datos);
}

// Agregar tarea

function agregarTarea(e) {
    e.preventDefault();
    var nombreTarea = document.querySelector('.nombre-tarea').value;
    // validar que no este vacio
    if (nombreTarea === "") {
        swal({
            title: 'Error',
            text: 'Una tarea no puede ir vacia',
            type: 'error'
        });
    } else {
        // insertar tarea, AJAX

        // 1.Crear la conexion
        var xhr = new XMLHttpRequest();

        // 1.5Crear formdata
        let datos = new FormData();
        datos.append('tarea', nombreTarea);
        datos.append('accion', 'crear');
        datos.append('id_proyecto', document.querySelector('#id_proyecto').value);

        // 2.Abrir la conexion
        xhr.open('POST', 'inc/modelos/modelo-tarea.php', true);

        // 3.Ejecutarlo
        xhr.onload = function() {
            if (this.status === 200) {
                let respuesta = JSON.parse(xhr.responseText);
                let resultado = respuesta.respuesta,
                    tarea = respuesta.tarea,
                    id_insertado = respuesta.id_insertado,
                    tipo = respuesta.tipo;

                if (resultado === 'correcto') {
                    if (tipo === 'crear') {
                        // lanzar alerta
                        swal({
                            title: 'Tarea Creada',
                            text: `Tarea ${tarea} creada exitosamente`,
                            type: 'success'
                        });

                        // Seleccionar el parrafo "No hay tareas en este proyecto"
                        let parrafo = document.querySelectorAll('.sinTareas');
                        if (parrafo.length > 0 ) {
                            document.querySelector('.sinTareas').remove();
                        };

                        // Construir el template
                        let nuevaTarea = document.createElement('li');
                        // Agregar id
                        nuevaTarea.id = 'tarea: ' + id_insertado;
                        // agregar la clase tarea
                        nuevaTarea.classList.add('tarea');
                        // construir el html
                        nuevaTarea.innerHTML = `
                            <p>${tarea}</p>
                            <div class="acciones">
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-trash"></i>
                            </div>
                        `;
                        // Agregarlo al html
                        let listado = document.querySelector('.listado-pendientes ul');
                        listado.appendChild(nuevaTarea);

                        //Limpiar formulario
                        document.querySelector('.agregar-tarea').reset();

                        // Barra progreso
                        actualizarProgreso();

                    }
                } else {
                    swal({
                        title: 'Error',
                        text: 'Hubo un error',
                        type: 'error'
                    });
                }
            }
        }

        // 4.Enviar consulta
        xhr.send(datos);

    }
}

// Cambia el estado de las tareas o las elimina

function accionesTareas(e) {
    e.preventDefault();

    // Esto es lo que se conoce como el DELEGATION

    if (e.target.classList.contains('fa-check-circle')) {
        if (e.target.classList.contains('completo')) {
            e.target.classList.remove('completo');
            cambiarEstadoTarea(e.target,0);
        }else{
            e.target.classList.add('completo');
            cambiarEstadoTarea(e.target,1);
        }
    }
      
    if (e.target.classList.contains('fa-trash')) {

        Swal.fire({
            title: "Seguro que deseas eliminar esta tarea?",
            text: "No podras revertir esta accion",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.value) {
                let tareaEliminada = e.target.parentElement.parentElement;
                // Borrar de la BD
                eliminarTareaBD(tareaEliminada);
                // Borrar del DOM
                tareaEliminada.remove();
              Swal.fire(
                'Eliminado!',
                'Eliminaste la Tarea.',
                'success'
              )
            }
          })
    }
        
}

// Completa o descompleta una tarea
function cambiarEstadoTarea(elemento,estado) {
    // nos da el icono pero debemos llegar al listaProyectos, eso es traversing del DOM
    let idTarea = elemento.parentElement.parentElement.id.split(':');
    
    // Llamado a AJAX
    let xhr = new XMLHttpRequest();

    // informacion
    let datos = new FormData();
    datos.append('id', idTarea[1]);
    datos.append('accion', 'actualizar');
    datos.append('estado',estado);

    // abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-tarea.php', true);

    // on load
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            actualizarProgreso();
        }
    }

    // Enviar la peticion
    xhr.send(datos);

}

// Elimia las taread de la DB

function eliminarTareaBD(tarea) {
    let idTarea = tarea.id.split(':');

    // Creando llamado a AJAX
    let xhr = new XMLHttpRequest();

    // informacion
    let datos = new FormData();
    datos.append('id',idTarea[1]);
    datos.append('accion','eliminar');

    // abrir la conexion
     xhr.open('POST', 'inc/modelos/modelo-tarea.php', true);

    // Xhr onload
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(xhr.responseText));

            // Comprobar que queden tareas restantes
            let listaTareas = document.querySelectorAll('li.tarea');
            if (listaTareas.length === 0) {
                document.querySelector('.listado-pendientes ul').innerHTML = "<p class='sinTareas'>No hay tareas en este proyecto</p>";
            }
            // Actualizar progreso
            actualizarProgreso();
        }
    }

    // Enviar peticion
    xhr.send(datos);

}

// Funncion de la barra de avance del proyecto
function actualizarProgreso() {
    const tareas = document.querySelectorAll('li.tarea');

    // Obtener tareas completadas
    const tareasCompletadas = document.querySelectorAll('i.completo');

    // Determinar el avance
    const avance = Math.round((tareasCompletadas.length / tareas.length) * 100);

    // Asignar avance a la barra
    const porcentaje = document.querySelector('#porcentaje');
    porcentaje.style.width = avance+'%';

    const textporcentaje = document.querySelector('.textoPorcentaje');
    textporcentaje.innerHTML =  porcentaje.style.width = avance+'% Competado';

    if (avance === 100) {
        Swal.fire(
            'Proyecto Terminado!',
            'YFelicidades!!!',
            'success'
          )
    };

    if (!avance) {
        textporcentaje.innerHTML =  porcentaje.style.width = '0% Competado';
    }

}