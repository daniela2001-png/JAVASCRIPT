/*

Programación orientada a objetos: establezca el prototipo del hijo en una instancia del padre

En el desafío anterior, vio el primer paso para heredar el comportamiento del supertipo (o padre)
Animal: hacer una nueva instancia de Animal.

Este desafío cubre el siguiente paso:
establecer el prototype del subtipo (o hijo), en este caso, Birdpara que sea una instancia de Animal.

*/

// creamos nuestro padre o super tipo de el que heredaremos la prop eat()
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// este sera nuestro subtipo o hijo que heredara de nuestro super tipo o padre (Animal)
function Bird(name) {
    this.name = name;
}
Bird.prototype = Object.create(Animal.prototype) // aqui hacemos la "herencia" entre estos dos constructores!
let mybird = new Bird("lola");
console.log(mybird.eat()) // aqui verificamos que efectivamnete Bird tiene la eat() prop

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let prop in mybird) {
    if (mybird.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
    else {
        prototypeProps.push(prop)
    }
}
console.log(prototypeProps); // ["constructor", "eat"]
console.log(ownProps); // ["name"]
