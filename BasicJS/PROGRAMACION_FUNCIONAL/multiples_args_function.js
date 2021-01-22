/*
Programación funcional: introducción al currying y aplicación parcial
La aridad de una función es el número de argumentos que requiere. Currizar una función significa convertir una función de N aridad en N funciones de aridad 1.

En otras palabras, reestructura una función para que tome un argumento, luego devuelva otra función que tome el siguiente argumento, y así sucesivamente.

*/

// ejemplo:
//Un-curried function
function unCurried(x, y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

/*
Esto es útil en su programa si no puede proporcionar todos los argumentos
a una función al mismo tiempo.
Puede guardar cada llamada de función en una variable,
que contendrá la referencia de función devuelta que toma el siguiente argumento cuando está disponible.
Aquí hay un ejemplo que usa la función curry en el ejemplo anterior:
*/
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

/*
De manera similar, la aplicación parcial se puede describir como la aplicación
de algunos argumentos a una función a la vez y devolver otra función
que se aplica a más argumentos. He aquí un ejemplo:
*/

//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// Rellenar el cuerpo de la addfunción por lo que utiliza currying añadir parámetros x, yy z.

function add(x) {
    // Only change code below this line
    return (y) => {
        return (z) => {
            return x + z + y
        }
    }

    // Only change code above this line
}
console.log(add(10)(20)(30)); // 60
