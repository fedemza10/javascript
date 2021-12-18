export class AlimentoPerro {
    constructor(id, nombre, cantidad, precio, stock) {
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.cantidad = +cantidad;
      this.precio = parseInt(precio);
      this.stock = stock;
    }
    getNombre() {
      return this.nombre;
    }
    getPrecio() {
      return this.precio;
    }
  
    precioSinIva() {
      this.precio * 1;
      return this.precio;
    }
    agregarIva() {
      this.precio * 1.21;
      return " Precio final" + " $ " + this.precio * 1.21;
    }
  
    agotado() {
      this.stock = false;
    }
  }

export const alimentoPerro1 = new AlimentoPerro(1, " Royal Canin", 100, 8000, true);
export const alimentoPerro2 = new AlimentoPerro(2, " Vital Can", 80, 6000, true);
export const alimentoPerro3 = new AlimentoPerro(3, " Eukanuba", 600, 3500, true);

