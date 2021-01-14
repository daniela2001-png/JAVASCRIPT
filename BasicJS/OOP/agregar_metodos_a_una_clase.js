/*

Programación orientada a objetos: agregar métodos después de la herencia

Una función constructora que hereda su prototype objeto de una función constructora de supertipo
puede tener sus propios métodos además de los métodos heredados.

Por ejemplo, Bird es un constructor que hereda su prototype de Animal:
*/

function Animal() { }
// definimos el metodo eat() de la clase padre Animal
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Bird() { } // aqui Bird no tinen nigun metodo propio

// Bird hereda los metodos o props que tenga su clase padre ne este caso Animal
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; // setemaos de nuevo el constructor para que de Bird y no de Animal

/*
Además de lo que se hereda Animal, desea agregar un comportamiento que sea exclusivo de los Bird objetos.
Aquí, Bird obtendrá una fly() función.
Las funciones se agregan de Bird's prototype la misma manera que cualquier función constructora:
*/

Bird.prototype.fly = function () {
    console.log("I can fly!");
};

let mybird = new Bird()
console.log(mybird.eat()) // hereda el metood eat() del padre (Animal)
console.log(mybird.fly()) // usamo nuestro propio metodo de la clase Bird()

/*

Agregue todo el código necesario para que el Dog objeto herede Animal y el Dog's prototype constructor
se establezca en Dog. Luego agregue un bark() método al Dog objeto para que beagl eambos eat() y bark().
El bark() método debería imprimir "¡Guau!" a la consola.

*/

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = () => console.log("Woof!");
let beagle = new Dog();
beagle.constructor = Dog;
console.log(beagle.eat()) // prints "nom nom nom"
console.log(beagle.bark()); // prints "Woof!"
