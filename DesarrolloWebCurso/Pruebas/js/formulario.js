eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);
}


function validarRegistro(e) {
    e.preventDefault();

    let usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        tipo = document.querySelector('#tipo').value;

    if (usuario == '' || password == '') {
        swal({
            type: "error",
            title: "Error!",
            text: "Ambos campos son obligatorios!",
        });
    } else {
        // Datos a enviar al servidor
        var datos = new FormData();
        datos.append('usuario', usuario);
        datos.append('password', password);
        datos.append('accion', tipo);

        // AJAX

        // Crear la conexion
        const xhr = new XMLHttpRequest();

        // Abrir la conexion
        xhr.open('POST', 'inc/modelos/modelo-admin.php', true);

        // Pasar los datos
        xhr.onload = function() {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                console.log(respuesta);
                if (respuesta.respuesta === "correcto") {
                    if (respuesta.tipo === 'crear') {
                        swal("Usuario Creado", "Usuario creado exitosamente", "success");
                    } else if (respuesta.tipo === 'login') {
                        swal("Login correcto", "Ir al dashboard", "success")
                            .then(result => {
                                if (result.value) {
                                    window.location.href = 'index.php';
                                }
                            });
                    }
                } else {
                    swal({
                        title: 'Error',
                        text: 'Hubo un error',
                        type: 'error'
                    })
                }
            }
        };

        // Enviar la peticion
        xhr.send(datos);

    }
}