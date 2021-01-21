/*

Programación funcional: combine dos matrices usando el método concat()

La concatenación significa unir elementos de un extremo a otro.
JavaScript ofrece el concat método para cadenas y matrices que funcionan de la misma manera.
Para las matrices, el método se llama en una, luego se proporciona otra matriz como argumento concat,
que se agrega al final de la primera matriz.
Devuelve una nueva matriz y no muta ninguna de las matrices originales.



He aquí un ejemplo:

*/

[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]


/*
Utilice el concat método de la nonMutatingConcat función para concatenar attach al final de original.
La función debería devolver la matriz concatenada.
*/

function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach)

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second)); // [1, 2, 3, 4, 5]
