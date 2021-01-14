/*

Programación orientada a objetos: heredar comportamientos de un supertipo
En el desafío anterior, creaste un supertypellamado Animalque definió los
comportamientos compartidos por todos los animales:
*/
function Animal() { }
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

/*
Este y el próximo desafío cubrirá cómo reutilizar Animal's métodos dentro Bird y Dog sin definirlos nuevamente.
Utiliza una técnica llamada herencia.
Este desafío cubre el primer paso: crear una instancia del supertype(o padre).
Ya conoce una forma de crear una instancia de Animal uso del new operador:
*/

let animal = new Animal();

/*
Existen algunas desventajas al usar esta sintaxis para la herencia,
que son demasiado complejas para el alcance de este desafío.
En cambio, aquí hay un enfoque alternativo sin esas desventajas:
*/
let animal = Object.create(Animal.prototype);

/*
Object.create(obj) crea un nuevo objeto y se establece obj como el nuevo objeto prototype.
Recuerde que prototype es como la "receta" para crear un objeto.
Al configurar prototypeof animal to be Animal's prototype, le está dando a la animal instancia la misma "receta"
que cualquier otra instancia de Animal.
*/

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true

// Úselo Object.createpara hacer dos instancias de Animalnamed ducky beagle.

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
console.log(duck);
let beagle = Object.create(Animal.prototype);
console.log(beagle.eat()); // nom nom nom
