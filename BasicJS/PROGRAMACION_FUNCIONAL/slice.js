/*

Programación funcional: devolver parte de una matriz mediante el método de cslice:

El slice método devuelve una copia de ciertos elementos de una matriz.
Puede tomar dos argumentos, el primero da el índice de dónde comenzar el segmento,
el segundo es el índice de dónde terminar el segmento (y no es inclusivo).
Si no se proporcionan los argumentos,
el valor predeterminado es comenzar desde el principio de la matriz hasta el final,
que es una forma fácil de hacer una copia de toda la matriz.
El slice método no muta la matriz original, pero devuelve una nueva.

*/

// ejemplo1 
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

// ejemplo2

var arr2 = [true, false, 1, 2, 3, 4, "Cat", "Dog", "Tiger", "Zebra"]
var copy = arr2.slice()
console.log(copy) // hacemos una copia de arr2

// PROBLEMA
/*
Utilice el slice método de la sliceArray función para devolver parte de la anim matriz dados
los índices beginSlice y proporcionados endSlice. La función debería devolver una matriz.
*/

function sliceArray(anim, beginSlice, endSlice) {
    // slice retorna el ultimo elemento pasado menos 1
    // arr.slice(start, end -1)
    return anim.slice(beginSlice, endSlice)
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3)); // retorna ["Dog", "Tiger"]


