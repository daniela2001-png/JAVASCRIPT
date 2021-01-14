/*

Programación orientada a objetos: comprender las propiedades propias
En el siguiente ejemplo, el Birdconstructor define dos propiedades: namey numLegs:

*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

/*namey numLegsse denominan ownpropiedades porque se definen directamente en el objeto de instancia.
Eso significa que ducky canarycada uno tiene su propia copia separada de estas propiedades.
De hecho, cada instancia de Birdtendrá su propia copia de estas propiedades.
El siguiente código agrega todas las ownpropiedades de ducka la matriz ownProps: */

let ownProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

// Agregue las ownpropiedades de canarya la matriz ownProps.
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop)
    }
}
console.log(ownProps) // ["name", "numLegs"]