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

  getRazas() {
    let listaRazas = "Alimentos disponibles para las siguientes razas:\n\n";
    this.razas.map((item) => {
      listaRazas + " * " + item.tipo + " - " + item.pelo;
    });
    return listaRazas;
  }
  
}

const alimentoPerro1 = new AlimentoPerro(1, " Royal Canin", 100, 8000);
const alimentoPerro2 = new AlimentoPerro(2, " Vital Can", 80, 6000);
const alimentoPerro3 = new AlimentoPerro(3, " Eukanuba", 600, 7000);
let razas = [
  { tipo: "golden retriever", pelo: "largo" },
  { tipo: "labrador retriever", pelo: "largo" },
  { tipo: "datschund", pelo: "corto" },
];

console.log(alimentoPerro1.precioSinIva());

console.log(alimentoPerro1.agregarIva());
console.log(listaRazas);
