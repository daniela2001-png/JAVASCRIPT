/*

Programación funcional: utilice el método some para comprobar que todos los elementos de una matriz cumplen los criterios
El some método funciona con matrices para verificar si algún elemento pasa una prueba en particular. Devuelve un valor booleano, truesi alguno de los valores cumple con los criterios, falsesi no.

*/

// Por ejemplo, el siguiente código verificaría si algún elemento de la numbers matriz es menor que 10:
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function (currentValue) {
    return currentValue < 10;
});
// Returns true

/*
Use el some método dentro de la checkPositive función para verificar si algún elemento arres positivo. La función debe devolver un valor booleano.
*/
function checkPositive(arr) {
    // Only change code below this line
    return arr.some((value) => {
        return value > 0
    })

    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5])); // true porque hay 4 valores mayores a 0
