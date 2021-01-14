/*

Programación orientada a objetos: anular métodos heredados

En lecciones anteriores, aprendió que un objeto puede heredar su comportamiento
(métodos) de otro objeto haciendo referencia a su prototypeobjeto:

*/

ChildObject.prototype = Object.create(ParentObject.prototype);

// Luego ChildObject recibió sus propios métodos al encadenarlos a su prototype:
ChildObject.prototype.methodName = function () {... };

/*
Es posible anular un método heredado. Se hace de la misma manera:
agregando un método para ChildObject.prototype usar el mismo nombre de método que el que se va a anular.
A continuación, se muestra un ejemplo de Bird cómo anular el eat() método heredado de Animal:
*/
function Animal() { }
Animal.prototype.eat = function () {
    return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function () {
    return "peck peck peck";
};
let mybird = new Bird();
console.log(mybird.eat()); // "peck peck peck" se sobreescribe el metodo eat!

/*

Si tiene una instancia let duck = new Bird(); y llama duck.eat(), así es como JavaScript busca el método en la duck’s prototypecadena:

pato => ¿Se define comer () aquí? No.
Bird => ¿Se define comer () aquí? => Sí. Ejecútelo y deje de buscar.
Animal => eat () también está definido, pero JavaScript dejó de buscar antes de alcanzar este nivel.
Object => JavaScript dejó de buscar antes de alcanzar este nivel.

*/

// Anule el fly() método para Penguinque devuelva "Ay, este es un pájaro no volador".
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = () => {return "Alas, this is a flightless bird."}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
