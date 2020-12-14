/*

Estructuras de datos básicas: compruebe la presencia de un elemento con indexOf ()

Dado que las matrices se pueden cambiar, o mutar , en cualquier momento, no hay garantía
de dónde estará un dato en particular en una matriz determinada, o si ese elemento aún existe.
Afortunadamente, JavaScript nos proporciona otro método integrado indexOf(),
que nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz.
indexOf()toma un elemento como parámetro y, cuando se llama, devuelve la posición, o índice, de ese elemento,
o -1 si el elemento no existe en la matriz.

*/

// por ejemplo:
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists


/*
indexOf() puede ser increíblemente útil para comprobar rápidamente la presencia de un elemento en una matriz.
Hemos definido una función, quickCheckque toma una matriz y un elemento como argumentos.
Modifique la función usando indexOf() para que devuelva truesi el elemento pasado existe en la matriz y falsesi no.
*/
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) != -1) // si existe el elemento retornamos true
        return true
    return false // sino existe false
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // return false
