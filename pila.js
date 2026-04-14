class Pila {
  constructor() {
    this.elementos = [];
  }

  // Agregar elemento al tope de la pila (push)
  agregar(objeto) {
    this.elementos.push(objeto);
    console.log("Elemento agregado a la pila:" , objeto);
    console.log("Pila actual:", this.elementos);
    console.log("-----------------------------------");
  }

  // Eliminar elemento del tope de la pila (pop)
  eliminar() {
    if (this.estaVacia()) {
      console.log("La pila está vacía. No se puede eliminar.");
      return null;
    }
    const eliminado = this.elementos.pop();
    console.log("Elemento eliminado del tope:", eliminado);
    console.log("Pila actual:", this.elementos);
    console.log("-----------------------------------");
    return eliminado;
  }

  tope() {
    if (this.estaVacia()) {
      console.log("La pila está vacía.");
      return null;
    }
    console.log("Tope de la pila:", this.elementos[this.elementos.length - 1]);
    return this.elementos[this.elementos.length - 1];
  }

  estaVacia() {
    return this.elementos.length === 0;
  }

  tamano() {
    console.log("Tamaño de la pila: ${this.elementos.length}");
    return this.elementos.length;
  }
}

const pila = new Pila();

pila.agregar({ Nombre: "Daniel", Edad: 30 });
pila.agregar({ Nombre: "Vanessa",   Edad: 25 });
pila.agregar({ Nombre: "David",  Edad: 22 });

pila.tope();
pila.tamano();

pila.eliminar();
pila.eliminar();

pila.tamano();