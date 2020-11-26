/*
ES6: use la sintaxis de la clase para definir una función de constructor
ES6 proporciona una nueva sintaxis para crear objetos, utilizando la palabra clave class .

Cabe señalar que la classsintaxis es solo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, normalmente definimos una función constructora y usamos la newpalabra clave para crear una instancia de un objeto.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
La classsintaxis simplemente reemplaza la creación de la función constructora:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
Cabe señalar que la classpalabra clave declara una nueva función, a la que se le agrega un constructor. Este constructor se invoca cuando newse llama para crear un nuevo objeto.
Notas:

UpperCamelCase debe usarse por convención para los nombres de clase de ES6, como se SpaceShuttleusó anteriormente.
El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Aprenderá más sobre esto en la sección Programación orientada a objetos de la Certificación de estructuras de datos y algoritmos JavaScript.

*/

// Utilice la classpalabra clave y escriba un constructor para crear la Vegetableclase. La Vegetableclase te permite crear un objeto vegetal con una propiedad nameque se pasa al constructor.

// Only change code below this line
class Persona {
    constructor(name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }
}
// Only change code above this line

const persona_1 = new Persona('daniela', "morales");
console.log(persona_1); // si impirmo el objeto completo que asigna new a traves del constructor me retorna el objecto (array)
console.log(persona_1.apellido);