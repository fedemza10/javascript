class AlimentoPerro {
  constructor(id, nombre, cantidad, precio, razas) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.cantidad = +cantidad;
    this.precio = parseInt(precio);
    this.razas = razas;
  }

  precioSinIva() {
    this.precio * 1;
    return " Precio sin Iva" + " $ " + this.precio;
  }
  agregarIva() {
    this.precio * 1.21;
    return " Precio final" + " $ " + this.precio * 1.21;
  }

  getRazas(item) {
    razas.map((item) => {
      let razasPerros =
        "Hay alimento para las siguientes razas: " +
        " * " +
        "Tipo:" +
        item.tipo +
        " - " +
        "Pelo:" +
        item.pelo;
      console.log(razasPerros);
    });
    return item;
  }
}

const alimentoPerro1 = new AlimentoPerro(1, " Royal Canin", 100, 8000);
const alimentoPerro2 = new AlimentoPerro(2, " Vital Can", 80, 6000);
const alimentoPerro3 = new AlimentoPerro(3, " Eukanuba", 600, 7000);
let razas = [
  { tipo: "golden retriever", pelo: "largo" },
  { tipo: "labrador retriever", pelo: "largo" },
  { tipo: "dachschund", pelo: "corto" },
];

console.log(alimentoPerro1.precioSinIva());

console.log(alimentoPerro1.agregarIva());
alimentoPerro1.getRazas();

class Carrito {
  constructor(lista) {
    this.lista = lista;
  }
  findAllItems() {
    return "Este es el listado de tu compra" + "" + this.lista;
  }

  createItem(item) {
    this.lista.push(item);
  }
}
const carroCompra = new Carrito([alimentoPerro1, alimentoPerro2]);
console.log(carroCompra);
carroCompra.createItem(alimentoPerro3);
console.log(carroCompra);
const alimentoPerro4 = new AlimentoPerro(4, "proplan", 50, 5000);
carroCompra.createItem(alimentoPerro4);
console.log(carroCompra);
