class Cola {
  constructor() {
    this.elementos = [];
  }

  agregar(numero) {
    this.elementos.push(numero);
    console.log("Numero agregado a la cola:", numero);
    console.log("Cola actual:", this.elementos);
  }

  eliminar() {
    if (this.elementos.length === 0) {
      console.log("La cola esta vacia. No se puede eliminar.");
      return null;
    }
    const eliminado = this.elementos.shift();
    console.log("Numero eliminado de la cola:", eliminado);
    console.log("Cola actual:", this.elementos);
    return eliminado;
  }

  mostrarCola() {
    console.log("Cola completa:", this.elementos);
  }
}

const cola = new Cola();

cola.agregar(10);
cola.agregar(20);
cola.agregar(30);
cola.agregar(40);

cola.eliminar();
cola.eliminar();

cola.mostrarCola();