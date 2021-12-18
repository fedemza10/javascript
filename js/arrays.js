


console.log(alimentoPerro1.precioSinIva());

console.log(alimentoPerro1.agregarIva());
const alimentoPerro1 = new AlimentoPerro(1, " Royal Canin", 100, 8000, true);
const alimentoPerro2 = new AlimentoPerro(2, " Vital Can", 80, 6000, true);
const alimentoPerro3 = new AlimentoPerro(3, " Eukanuba", 600, 7000, true);


const carroCompra = new Carrito([alimentoPerro1, alimentoPerro2]);
console.log(carroCompra);
carroCompra.createItem(alimentoPerro3);
console.log(carroCompra);
const alimentoPerro4 = new AlimentoPerro(4, "proplan", 50, 5000, true);
carroCompra.createItem(alimentoPerro4);
console.log(carroCompra);

const carriFS = JSON.parse( localStorage.getItem ('carrito'))
console.log (carriFS [0].cantidad)