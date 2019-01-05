// Inyectando codigo con JS Modificando el DOM

// var nombre = prompt('Cual es tu nombre');
// document.getElementById('mensaje').innerHTML = `Bienvenido ${nombre} `;

// VARIABLES
var nnombreCliente;
// variables con let
let miNombre = "josue";
// variables const
const pi = 3.1416;
// END VARIABLES

// FUNCIONES PARA STRINGS
let banda = 'Metallika',
  cancion = 'Enter Sadman';
let albun;
albun = banda + ":" + cancion;
// length nos dice cuantas letras tiene una variable
console.log(banda.length);
// concat
albun = albun.concat(" ", "y es genial");
// todas mayusculas
albun = albun.toUpperCase();
// split
albun = albun.split(" ");
// reemplazar
albun = banda + ":" + cancion;
albun = albun.replace('GENIAL', 'split');
// includes verifica que exista un elemento
let email = 'algo@algo.com';
albun = email.includes('@');
console.log(albun);
// END FUNCIONES PARA STRING

// NUMEROS
const numero1 = 30,
  numero2 = "20",
  numero3 = 15,
  numero4 = -3,
  numero5 = 20;

let resultado;
resultado = numero1 + numero3;
// clase match
resultado = Math.round(2.5);
resultado = Math.floor(2.99);
resultado = Math.ceil(2.99);
// raiz cuadrada
resultado = Math.sqrt(144);
// potencia
resultado = Math.pow(8, 3);
// minimo y maximo
resultado = Math.min(5, 1, 2, 8);
resultado = Math.max(5, 1, 2, 8);

console.log(resultado);

let num1 = 10;
let num2 = "20";
let num3 = 30;
let num4 = 15.55;

console.log(num1 + num2);
console.log(Number(num2) + num3);
console.log(parseInt(num2) + num4);

// Tipos de Datos
let algo;
console.log(typeof(algo));

// Arrays
const nums = [12, 23, 32, 45, 56];
console.table(nums);

const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio');
// verificar si es un arreglo
console.log(Array.isArray(meses));
// Push lo agrega al final
meses.push('gelido');
// Agregar un valor al inicio
meses.unshift('trampolin')

// Eliminar del final
meses.pop();
// Elimina del principio
meses.shift();
// Eliminar de un rango del arreglo empieza del cero y elimina unos
meses.splice(0, 1)
// Voltear el array
meses.reverse();
// Ordenar un arreglo
let frutas = ['platanos', 'manzanas', 'fresas', 'aManzana', 'naranjas'];
frutas.sort();
console.log(frutas);
console.log(meses);

// OBJETOS

// Object literal DEspues veremos object constructor
const josue = {
  nombre: 'Josue',
  apellido: 'Sandoval',
  edad: 23,
  trabajo: true,
  musica: ['pop', 'rap', 'clasica'],
  hogar: {
    ciudad: 'CDMX',
    pais: 'Mexico'
  }
}

// Accediendo a mi objeto

console.log(josue.hogar.ciudad);
console.log(josue['hogar']['ciudad']);

console.log(josue);

// STRINGS template strings template literals

const nombre = 'Josue Sandoval',
  trabajo = 'Precidente TPD';

console.log(nombre + 'trabaja en ' + trabajo);
// Consoloe log con TEMPLATE STRING
console.log(`Nombre: ${nombre}, Trabaja como ${trabajo}`);

const contenedorApp = document.querySelector('#mensaje');

let html = '<ul>' +
  '<li> Nombre: ' + nombre + '</li>' +
  '<li> Trabajo: ' + trabajo + '</li>' +
  '</ul>';

// Forma con el Template String

let html2 = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Nombre: ${trabajo}</li>
            </ul>`

contenedorApp.innerHTML = html2;

// FUNCIONES

// ------------function declaration-------------------
// Aqui puedes usarla antes de declararla a diferencia de la otra

saludar(nombre, trabajo);

function saludar(nombre = 'visitante', trabajo = "no sabemos") {
  console.log(`hola ${nombre}  tu trabajo es como: ${trabajo}`);
}



// --------------- function expression-------------------

var suma = function(a = 0, b = 0) {
  console.log(a + b);
}

suma(170);

// IIFE
// funciones que se invocan automaticamente

(function() {
  console.log("AQUI ESTOY");
})();

(function(nombre) {
  console.log("sabes quien soy, yo soy " + nombre);
})('josue sandoval');

// METODOS DE PROPIEDAD

const novias = {
  suNombre: function(nombre) {
    console.log(`Su nombre es: ${nombre}`);
  },
  besar: function() {
    console.log("Besando");
  }
}

// Los metodos o las funciones pueden ir por fuera
novias.dejar = function name(razon) {
  console.log(`creo que debemos terminar por estas razones ${razon}`);
}


novias.suNombre('Daniela');
novias.dejar("no te interesa esto");

// Funciones que retornan algo

// const precioMoto = function(cost) {
//     cost = cost * .7;
//     return cost;
// }



// Arrow function, usando nuestra funcion precioMoto
const precioMoto = (cost) => {
  cost = cost * .7;
  return cost;
}

let newPrice = precioMoto(60000);
console.log(newPrice);

// Ejemplo de un function expression a arrow function

let viajando = function(destino) {
  return 'viajando a ' + destino;
}

// arrow function
let viajando1 = destino => 'viajando a ' + destino;

let viaje = viajando1('Francia');
console.log(viaje);

// MAS OBJETOS
//  Object literal

const mesa = {
  patas: "madera",
  canPAtas: 4
}

// object constructor ----> Crea nuevos objetos ---- Agregar la palabre new
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

// Nueva formaa en JS seria creando una clase

class Tarea1 {
  constructor(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
  }
}

// Crear nuevas tareas

const tarea1 = new Tarea('Aprender JS', 'Urgente');

console.log(tarea1);

// FECHAS EN JS

const diaHoy = new Date;

let valor = diaHoy;

console.log(valor);

// Estructuras de control
// ternario
let logueado = true;

console.log(logueado ? 'Si esta logueado' : 'no se logueo');

// Loops de JS

// arreglo
const pendientes = ['estudiar', 'Angula', 'PHP', 'Lider Proyecto', 'run', 'exarcise', 'sex', 'daniela'];

// un  arreglo con objetos
const carrito = [{
  id: 1,
  producto: 'libro'
}, {
  id: 2,
  producto: 'camisa'
}, {
  id: 3,
  producto: 'disco'
}]

// un objeto
let automovil = {
  modelo: 'camaro',
  motor: 6.0,
  ano: 2016
}

// for (let i = 0; i < pendientes.length; i++) {
//     console.log(pendientes[i]);
// }

// otra forma

for (pendiente of pendientes) {
  console.log(pendiente);
}
for (pendiente of carrito) {
  console.log(pendiente);
}
for (pendiente of Object.values(automovil)) {
  console.log(pendiente);
}

// forecah
console.clear();

pendientes.forEach(tarea => {
  console.log(tarea);
});
// Map, crea una copia de lo que iterea
pendientes.forEach(tarea => {
  console.log(tarea);
});

// SCOPE
// Visibilidad de una ariable, local y una global

var music = 'rock';

if (music) {
  music = 'banda';
  console.log(`Dentro del if ${music}`);
}

console.log(`Fuera del if ${music}`);

// ********** DESTRUCTURING **************
// forma de extraer valores de un objeto

const sasha = {
  raza: 'josue',
  tipo: 'oro',
  dato: {
    cuenta: {
      saldo: 40000
    }
  }
}


let {
  raza
} = sasha;

console.log(raza);

// Accediendo con DESTRUCTURING a mi cuenta

let {
  dato: {
    cuenta: {
      saldo
    }
  }
} = sasha;
console.log(saldo);


//*******     OBJECT lITERAL ENHACEMENT      ***** */
// Unir un objeto en uno muy grande con

const artist = "juanes",
  genero = "pop",
  canciones = ['Me enamora', 'gotas de agua', 'tu fotografia'];


// Vieja forma de pasarlo todo a un objeto
const juanes = {
  artist: artist,
  genereo: genero,
  canciones: canciones
}

console.log(juanes);

// Forma nueva
const juanes1 = {
  artist,
  genero,
  canciones
}
console.log(juanes1);

// NUEVOS METODOS DISPONIBLES EN ESTA VERSION

const people = [{
    nombre: 'daniela',
    edad: 23
  },
  {
    nombre: 'carmen',
    edad: 27
  },
  {
    nombre: 'monica',
    edad: 28
  },
  {
    nombre: 'julia',
    edad: 28
  },
  {
    nombre: 'casandra',
    edad: 32
  },
  {
    nombre: 'pamela',
    edad: 20
  }
];

console.table(people);

// obtener las personas menores de 25 anos en un arrow function

const grandes = people.filter(person => person.edad > 25);

console.log(grandes);

// extraer info de alguien en especifico

// const daniela = people.find(persona => {
//     return persona.nombre === "daniela"
// });

// convirtiendolo a un arrow function
const daniela = people.find(persona => persona.nombre === "daniela");

console.log(daniela);

// reduce, trae un acumulado de los registros
let total = people.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

console.log(total);

// ****************************************
// FETCH API VIENE A REMPLAZAR A AJAX
// *************************************

console.clear();

descargarUsuarios(5);

function descargarUsuarios(cantidad) {

  const api = `http://api.randomuser.me/?nat=US&results=${cantidad}`;

  fetch(api)
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos.result));
}