eventListeners();

const listaProyectos = document.querySelector('ul#proyectos');

function eventListeners() {
    // Boton para crear proyecto
    document.querySelector('.crear-proyecto a').addEventListener('click', nuevoProyecto);

    // Boton para una nueva tarea
    document.querySelector('.nueva-tarea').addEventListener('click', agregarTarea);
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
                            <a href="index.php?id_proyecto=${id_proyecto}" id="${id_proyecto}">
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