class Pila {
  constructor() {
    this.elementos = [];
  }

  agregar(objeto) {
    this.elementos.push(objeto);
    console.log("Elemento agregado:", objeto);
    console.log("Pila actual:", this.elementos);
  }

  eliminar() {
    if (this.elementos.length === 0) {
      console.log("La pila esta vacia. No se puede eliminar.");
      return null;
    }
    const eliminado = this.elementos.pop();
    console.log("Elemento eliminado:", eliminado);
    console.log("Pila actual:", this.elementos);
    return eliminado;
  }

  verTope() {
    if (this.elementos.length === 0) {
      console.log("La pila esta vacia.");
      return null;
    }
    console.log("Tope de la pila:", this.elementos[this.elementos.length - 1]);
  }

  mostrarPila() {
    console.log("Pila completa:", this.elementos);
  }
}

// Pruebas
const pila = new Pila();

pila.agregar({ Nombre: "Andres", Edad: 30 });
pila.agregar({ Nombre: "Maria", Edad: 25 });
pila.agregar({ Nombre: "Daniel", Edad: 22 });

pila.verTope();

pila.eliminar();
pila.eliminar();

pila.mostrarPila();