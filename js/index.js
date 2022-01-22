import { AlimentoPerroData } from "./data.js";
import {
  AlimentoPerro,
  alimentoPerro1,
  alimentoPerro2,
  alimentoPerro3,
} from "./alimentoperro.js";
import { Carrito } from "./carrito.js";
import { renderList } from "./utils.js";

/*const carrito1 = new Carrito();
carrito1.createItem(alimentoPerro2);
const alimentoPerro5 = new AlimentoPerro(20, "proplan", 50, 5000, true);
carrito1.createItem(alimentoPerro5);


// Captura evento "mouseover y mouseleave"
let mouse = document.getElementById("productos-lista");
mouse.onmouseover = () => {
  mouse.style.backgroundColor = "yellow";
};
mouse.onmouseleave = () => {
  mouse.style.backgroundColor = "white";
};

// Captura Evento sobre botón "Iniciar carga de datos, emite alert y console.log"
let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  alert(
    " Al completar este formulario, el producto será ingresado al storage."
  );
  console.log(' Esto es una prueba del evento "onclick"');
};

// Esto viene del storage

const productos = carrito1.findAllItems();

//Formulario para obtener datos

const formProducto = document.getElementById("form-producto");
const inputIdProducto = document.getElementById("input-id-producto");
const inputNombreProducto = document.getElementById("input-nombre-producto");

// Captura Evento sobre input "Iniciar carga de datos, emite alert y console.log"
inputNombreProducto.onchange = () => {
  console.log();
};

const inputCantidadProducto = document.getElementById(
  "input-cantidad-producto"
);
const inputPrecioProducto = document.getElementById("input-precio-producto");

// Captura evento Submit y ejecuta función
formProducto.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = +inputIdProducto.value;
  const nombre = inputNombreProducto.value;
  const cantidad = +inputCantidadProducto.value;
  const precio = +inputPrecioProducto.value;

  const alimentoN = new AlimentoPerro(id, nombre, cantidad, precio, true);

  carrito1.createItem(alimentoN);
  formProducto.reset();
  console.log(carrito1);
  
});


// JQuery

for (const item of AlimentoPerroData) {
  $("#productos-lista").append(`<div id= ${item.id}> ${item.nombre}  </div>  `);

  $(`#${item.id}`).click(function () {
    alert(`El alimento seleccionado es  ${item.nombre} y su precio es $ ${item.precio}`);
  });
}


//JQuery - Trigger

$("body").prepend('<button id="btn1">BOTON DE PRUEBA</button>');
$("body").prepend('<input  id="input1" type="text">');

$("#input1").change((event) => {
  event.preventDefault()
  console.log ( 'Prueba de  Trigger')
  alert("Texto de prueba Trigger es " + event.target.value);
});

$("#btn1").click(() => {
  $("#input1").trigger("change");
});

*/

//AJAX con JQuery
const  URL_JSON = "db/data.json"

$('body').prepend (`<button id= "btn7"> Boton Ajax </button>`);

$('#btn7').click ( (event) => {  
  event.preventDefault()
  $.getJSON (URL_JSON, ( response, status) => {
      if ( status === 'success') {
        
      for (const user of response) 
        $('#usuarios').append 
             (`<div> <p> ${user.name}  </p>
                     <p>${user.lastName} </p> </div>`)
      }
    }
  ) 
}
)


