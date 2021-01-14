/*

Programación orientada a objetos: comprender de dónde proviene el prototipo de un objeto

Al igual que las personas heredan genes de sus padres,
un objeto lo hereda prototype directamente de la función constructora que lo creó.
Por ejemplo, aquí el Bird constructor crea el duck objeto:
*/

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");
console.log(duck instanceof Bird); // true
//duck hereda prototype de la Bird función constructora. Puede mostrar esta relación con el isPrototypeOf método:
console.log(Bird.prototype.isPrototypeOf(duck)) // true

// Úselo isPrototypeOf para verificar el prototype de beagle.
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle)) // true!
