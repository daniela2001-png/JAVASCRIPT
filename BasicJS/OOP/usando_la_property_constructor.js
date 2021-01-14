/*
Programación orientada a objetos: comprender la propiedad del constructor

Hay una constructor propiedad especial ubicada en las instancias de objetos ducky beagle que se crearon
en los desafíos anteriores:

*/

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

/*
Tenga en cuenta que la constructor propiedad es una referencia a la función constructora que creó la instancia.
La ventaja de la constructor propiedad es que es posible verificar esta propiedad para averiguar
qué tipo de objeto es. A continuación, se muestra un ejemplo de cómo se podría utilizar:
*/
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}
/*
Nota
Dado que la constructorpropiedad se puede sobrescribir (que se tratará en los siguientes dos desafíos),
generalmente es mejor usar el instanceofmétodo para verificar el tipo de un objeto. */

/*
Escriba una joinDogFraternity función que tome un candidate parámetro y, usando la constructor propiedad,
devuelva true si el candidato es a Dog, de lo contrario, devuelva false.
*/

// Only change code below this line
function Dog(name) {
    this.name = name;
}

let myDog = new Dog("lola")
let lola = [];
// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}
console.log(joinDogFraternity(lola)); // false
console.log(lola.constructor === Array) // true