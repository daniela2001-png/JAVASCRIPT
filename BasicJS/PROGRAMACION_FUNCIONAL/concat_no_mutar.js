/*

Programación funcional: agregue elementos al final de una matriz usando concat en lugar de push
La programación funcional se trata de crear y usar funciones no mutantes.

El último desafío introdujo el concat método como una forma de combinar matrices
en una nueva sin mutar las matrices originales.
Compare concat con el push método.
Push agrega un elemento al final de la misma matriz en la que se llama, lo que muta esa matriz.


He aquí un ejemplo:

*/

var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way

// Concat ofrece una forma de agregar nuevos elementos al final de una matriz sin efectos secundarios mutantes.


// funcion que no muta la matriz al momentoa agregar un elemento al final de la misma!
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second)); // [1, 2, 3, 4, 5]

