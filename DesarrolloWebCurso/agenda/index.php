<?php include "inc/layout/header.php";?>

<div class="contenedor-barra">
    <h1>Agenda de Contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>Añadir contacto <span>Todos los campos son obligatorios</span></legend>
        <div class="campos">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="Nombre del contacto" id="nombre">
            </div>
            <div class="campo">
                <label for="empresa">Empresa:</label>
                <input type="text" placeholder="Nombre de la empresa" id="empresa">
            </div>
            <div class="campo">
                <label for="telefono">Teléfono:</label>
                <input type="tel" placeholder="Teléfono del contacto" id="telefono">
            </div>
        </div>
        <div class="campo enviar">
            <input type="submit" value="Añadir">
        </div>
    </form>
</div>

<div class="bg-blanco contenedor sombra contactos">
    <div class="contenedor-contactos">
        <h2>Contactos</h2>

        <input type="text" id="buscar" class="buscador sombra" placeholder="Buscar Contactos...">
        <p class="total-contactos"><span>2</span> Contactos</p>
        <div class="contenedor-tabla">
            <table id="listado-contactos">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Josue</td>
                        <td>TPD</td>
                        <td>5538905099</td>
                        <td>
                            <a class="btn-editar btn" href=""><i class="fas fa-pen"></i></a>
                            <button data-id="1" class="btn-borrar btn" type="button"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Josue</td>
                        <td>TPD</td>
                        <td>5538905099</td>
                        <td>
                            <a class="btn-editar btn" href=""><i class="fas fa-pen"></i></a>
                            <button data-id="1" class="btn-borrar btn" type="button"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Josue</td>
                        <td>TPD</td>
                        <td>5538905099</td>
                        <td>
                            <a class="btn-editar btn" href=""><i class="fas fa-pen"></i></a>
                            <button data-id="1" class="btn-borrar btn" type="button"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


<?php include "inc/layout/footer.php";?>