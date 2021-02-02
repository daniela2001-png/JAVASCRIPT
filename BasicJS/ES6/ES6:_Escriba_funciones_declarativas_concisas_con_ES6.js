/*
ES6: Escriba funciones declarativas concisas con ES6
Al definir funciones dentro de objetos en ES5, tenemos que usar la palabra clave de la functionsiguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Con ES6, puede eliminar la functionpalabra clave y los dos puntos al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactorice la función setGeardentro del objeto bicyclepara usar la sintaxis abreviada descrita anteriormente.


*/
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3); // aqui cambio con << this >> el valor de gear de 2 a 3 :p
console.log(bicycle.gear);
