/*

Programación funcional: utilice todos los métodos para comprobar que todos los elementos de una matriz cumplen un criterio

El every método funciona con matrices para verificar si cada elemento pasa una prueba en particular.
Devuelve un valor booleano, truesi todos los valores cumplen los criterios, falsesi no.

*/

// Por ejemplo, el siguiente código verificaría si cada elemento de la numbersmatriz es menor que 10:
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function (currentValue) {
    return currentValue < 10;
});
// Returns false cuz numbers[4] === 10

/*
Use el every método dentro de la checkPositive función para verificar si cada elemento arr es positivo.
La función debe devolver un valor booleano.
*/
function checkPositive(arr) {
    // Only change code below this line
    let hola = arr.every((value) => {
        return value > 0;
    })
    return hola
    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5])); // false
