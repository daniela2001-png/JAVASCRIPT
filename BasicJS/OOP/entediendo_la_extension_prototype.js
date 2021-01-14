/*

Programación orientada a objetos: comprender la cadena de prototipos

Todos los objetos en JavaScript (con algunas excepciones) tienen una extensión prototype
Además, el prototype propio objeto es un objeto.
*/

function Bird(name) {
    this.name = name;
}

console.log(typeof (Bird.prototype)); // yields 'object'

// ¡Como a prototype es un objeto, a prototype puede tener el suyo prototype! En este caso, el prototype de Bird.prototype es Object.prototype:
console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // true

// ¿Cómo es esto útil? Puede recordar el hasOwnPropertymétodo de un desafío anterior:
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
/*
El hasOwnProperty método se define en Object.prototype,
al que se puede acceder mediante Bird.prototype, al que luego se puede acceder mediante duck.
Este es un ejemplo de la prototype cadena. En esta prototype cadena, Bird es el supertype para duck,
mientras que duck es el subtype. Object es supertype para ambos Bird y duck.
Object es supertype para todos los objetos en JavaScript.
Por tanto, cualquier objeto puede utilizar el hasOwnProperty método.
*/

//Modifique el código para mostrar la cadena de prototipos correcta.
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
