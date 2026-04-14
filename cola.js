class Cola {
  constructor() {
    this.elementos = [];
  }

  // Agregar elemento al final de la cola (enqueue)
  agregar(numero) {
    if (typeof numero !== "number") {
      console.log("Solo se permiten datos numéricos.");
      return;
    }
    this.elementos.push(numero);
    console.log("Numero agregado a la cola: ${numero}");
    console.log("Cola actual: [${this.elementos}]");
    console.log("-----------------------------------");
  }

  // Eliminar elemento del frente de la cola (dequeue)
  eliminar() {
    if (this.estaVacia()) {
      console.log("La cola está vacía. No se puede eliminar.");
      return null;
    }
    const eliminado = this.elementos.shift();
    console.log("Número eliminado del frente: ${eliminado}");
    console.log("Cola actual: [${this.elementos}]");
    console.log("-----------------------------------");
    return eliminado;
  }

  // Ver el frente sin eliminar
  frente() {
    if (this.estaVacia()) {
      console.log("La cola está vacía.");
      return null;
    }
    console.log(`🔝 Frente de la cola: ${this.elementos[0]}`);
    return this.elementos[0];
  }

  estaVacia() {
    return this.elementos.length === 0;
  }

  tamano() {
    console.log("Tamaño de la cola: ${this.elementos.length}");
    return this.elementos.length;
  }
}

const cola = new Cola();

cola.agregar(20);
cola.agregar(30);
cola.agregar(40);
cola.agregar(50);

cola.frente();
cola.tamano();

cola.eliminar();
cola.eliminar();

cola.tamano();