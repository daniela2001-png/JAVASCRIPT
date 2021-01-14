/*
Programación orientada a objetos: recuerde establecer la propiedad del constructor al cambiar el prototipo

Existe un efecto secundario crucial de configurar manualmente el prototipo en un nuevo objeto.
¡Borra la constructorpropiedad! Esta propiedad se puede usar para verificar qué función constructora
creó la instancia, pero dado que la propiedad se ha sobrescrito, ahora da resultados falsos:
*/

// En el paso anterior confoguramos manuelnmente el prototype del constructor Bird el porblema aqui es que hacer esto nos pisara el valor de la porpiedad constructor!!
function Bird(name) {
    this.name = name;
}
// antes habiamos deifnido el protoype de nuestro Bird manualmente sin pensar en el aproipeda constructor!
// aqui no tenemos un constructor definido
Bird.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function () {
        console.log("ñami ñami")
    },
    describe: function () {
        console.log("hola mi nombre es" + this.name);
    }
};
// si intentamos confirmar que mybird es instancia o objeto del constructor Bird miremos que pasa ...

//let mybird = new Bird("lola");
//console.log(mybird) // {name:"lola"}
//console.log(mybird.constructor === Bird); // false ... despues de haber definido el protorype de manera manual nuestra instancia mybird ya no pertenece a Bird esto nas da false como arreglar esto ?
// es sencillo podemos agregar una nueva propiedad a nuestro objeto prototype como sigue:

Bird.prototype = {
    constructor: Bird, // definimos la propiedad constructor
    numLegs: 2,
    eat: function () {
        console.log("ñami ñami")
    },
    describe: function () {
        console.log("hola mi nombre es" + this.name);
    }
};
let mybird = new Bird("lola");
console.log(mybird) // Bird {name:"lola"}
console.log(mybird.constructor === Bird); // nos da true! porque ya hemos deifnido nuestro constructor en esta caso Bird

// Defina la constructor propiedad en el Dog prototype.
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};
