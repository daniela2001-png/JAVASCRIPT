/*

Programación orientada a objetos: restablecer una propiedad de constructor heredada

Cuando un objeto hereda su prototype de otro objeto, también hereda la propiedad del "constructor" del supertipo!

He aquí un ejemplo:
*/
function Animal() { }
Animal.prototype = {
    constructor: Animal, // constructor del padre
    eat: function () {
        console.log("ñami, ñanmi");
    }
};

function Bird() { }
Bird.prototype = Object.create(Animal.prototype); // aqui BI
let duck = new Bird();
duck.constructor // function Animal(){...}

/*Pero ducky todas las instancias de Bird deberían mostrar que fueron construidas por Birdy no Animal.
Para hacerlo, puede establecer manualmente la Bird propiedad del constructor en el Bird objeto:
*/
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}

// Corrija el código duck.constructory beagle.constructordevuelva sus respectivos constructores.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype); // hacemos que Bird(hijo) tenga las misma propertys que Animal(su padre)
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
let duck = new Bird();
duck.constructor = Bird // seteamos la propiedad constructor para que ya no se la del padre sino la del hijo!
let beagle = new Dog();
beagle.constructor = Dog // aqui too

