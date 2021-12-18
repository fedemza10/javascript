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
console.log (carrito1.findAllItems());

// Esto viene del storage

const productos = carrito1.findAllItems();

 //Formulario para obtener datos

const formProducto = document.getElementById('form-producto')
const inputIdProducto = document.getElementById('input-id-producto')
const inputNombreProducto = document.getElementById('input-nombre-producto')
const inputCantidadProducto = document.getElementById('input-cantidad-producto')
const inputPrecioProducto = document.getElementById('input-precio-producto')

formProducto.addEventListener('submit', () => {

  const id = +inputIdProducto.value
  const nombre = inputNombreProducto.value  
  const cantidad = +inputCantidadProducto.value
  const precio = +inputPrecioProducto.value

  const alimentoPerro6 = new AlimentoPerro (id, nombre, cantidad, precio, true)

  carrito1.createItem(alimentoPerro6)
  console.log (carrito1)
})


renderList ('productos-lista', productos)


