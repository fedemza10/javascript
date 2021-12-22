import { AlimentoPerroData } from "./data.js";
import {
  AlimentoPerro,
  alimentoPerro1,
  alimentoPerro2,
  alimentoPerro3,
} from "./alimentoperro.js";
import { Carrito } from "./carrito.js";
import { renderList } from "./utils.js";

const carrito1 = new Carrito();
carrito1.createItem(alimentoPerro2);
const alimentoPerro5 = new AlimentoPerro(20, "proplan", 50, 5000, true);
carrito1.createItem(alimentoPerro5);
console.log(carrito1.findAllItems());

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

renderList("productos-lista", productos);
