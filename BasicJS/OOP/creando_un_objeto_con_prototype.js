/*

Programación orientada a objetos: cambie el prototipo a un nuevo objeto

Hasta ahora ha estado agregando propiedades prototypeindividualmente:
*/
let Bird = function bird(name, dueño) {
    this.name = name;
    this.dueño = dueño;
}
Bird.prototype.numLegs = 2;
let newBird = new Bird("juky")
console.log(newBird.numLegs); // prints 2

// Esto se vuelve tedioso después de varias propiedades.
Bird.prototype.eat = function () {
    console.log("nom nom nom");
}

Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
}
let another_obj = new Bird("JULY")
console.log(another_obj.describe()); // my name is JULY

/*Una forma más eficaz es establecer el prototype en un nuevo objeto que ya contiene las propiedades.
De esta manera, las propiedades se agregan todas a la vez: */
Bird.prototype = {
    numLegs: 2,
    describe_bird: () => { console.log("HI MY NAME IS: " + this.name) },
    eat: () => { console.log("ñami ñami give me more food! "); }
};

// Agregue la propiedad numLegsy los dos métodos eat() y describe() al prototype de Dog estableciendo el prototype en un nuevo objeto.
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs:4,
    eat: function () {
        console.log("ñami ñami")
    },
    describe: function () {
        console.log("hola mi nombre es"+ this.name);
    }
};
