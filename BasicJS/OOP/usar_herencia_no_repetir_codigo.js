/*


Programación orientada a objetos: use la herencia para que no se repita
Hay un principio en la programación llamado Don't Repeat Yourself (DRY) . La razón por la que el código repetido es un problema es porque cualquier cambio requiere corregir el código en varios lugares. Esto generalmente significa más trabajo para los programadores y más espacio para errores.

Observe en el siguiente ejemplo que el describemétodo es compartido por Birdy Dog:

*/
Bird.prototype = {
    constructor: Bird,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

/*
El describe método se repite en dos lugares.
El código se puede editar para seguir el principio DRY creando un supertype(o padre) llamado Animal:
*/
function Animal() { }; // este es el supertype para bird y dog

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

//Dado que Animalincluye el describemétodo, puede eliminarlo de Bird y Dog:
Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};

/*El eat método se repite tanto en Cat y Bear. Edite el código en el espíritu de DRY moviendo el eat método a Animal supertype. */
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }

};

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};
