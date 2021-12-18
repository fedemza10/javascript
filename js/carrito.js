export class Carrito {
  constructor() {
    this.lista = JSON.parse(localStorage.getItem("Carrito")) || [];
  }
  findAllItems() {
    // me muestra todos los itmes a traves de this.lista
    return this.lista;
  }

  createItem(item) {
    // agrega item al carrito mediante this.lista
    this.lista.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.lista))
  }
  findOneByItemId(ItemId) {
    //muestra el item. Es para que encuentre el item en this.lista y lo devuelva.
    const item = this.lista.find((element) => element.id === ItemId);
    if (!item) {
      throw new Error("No existe el item", id);
    }
    return item;
  }
  updateItem(itemId, cantidad) {
    // Encontrar y Actualizar item en this.lista
    const item = this.findOneByItemId(itemId);
    const index = this.lista.indexOf(item);
    this.lista[index].cantidad = cantidad;
    if (cantidad <= 0) {
      this.lista[index].stock = false;
    }
    localStorage.setItem('carrito', JSON.stringify(this.lista))
  }
  deleteItem(itemId) {
    // Borrar item de this.lista
    const item = this.findOneByItemId(itemId);
    const index = this.lista.indexOf(item);
    this.lista.splice(index);
    localStorage.setItem('carrito', JSON.stringify(this.lista));
  }
}
