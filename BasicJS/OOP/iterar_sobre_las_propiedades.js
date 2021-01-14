/*
Programación orientada a objetos: iterar sobre todas las propiedades

Ahora ha visto dos tipos de propiedades: own propiedades y prototype propiedades.
Own las propiedades se definen directamente en la propia instancia del objeto.
Y las prototype propiedades se definen en el prototype.

*/

function Bird(name) {
    this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

//Así es como agrega ducklas own propiedades a la matriz ownProps y las prototypepropiedades a la matriz prototypeProps:

let ownProps = []
let prototypeProps = []
for (let prop in duck) {
    // get own props of the object
    if (duck.hasOwnProperty(prop)) {
        ownProps.push(prop)
    }
    else {
        prototypeProps.push(prop)
    }
}
console.log(prototypeProps); // prints ["numLegs"]
console.log(ownProps); // prints ["name"]

// Agregue todas las ownpropiedades de beagle a la matriz ownProps. Agregue todas las prototype propiedades de Doga la matriz prototypeProps
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
    else {
        prototypeProps.push(prop)
    }
}
console.log(prototypeProps); // ["numLegs"]
console.log(ownProps); // ["name"]