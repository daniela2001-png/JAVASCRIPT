/*

Estructuras de datos básicas: agregar elementos mediante empalme ()

¿Recuerdas en el último desafío que mencionamos que splice() puede tomar hasta tres parámetros?
Bueno, puede usar el tercer parámetro, compuesto por uno o más elementos,
para agregarlo a la matriz. Esto puede ser increíblemente útil para cambiar rápidamente un elemento
o un conjunto de elementos, por otro.

*/

// Ejemplo:
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]

/*

Aquí comenzamos con una matriz de números. Luego pasamos lo siguiente a splice().
El índice en el que comenzar a eliminar elementos (3), el número de elementos que se eliminarán (1)
y los elementos (13, 14) que se insertarán en ese mismo índice.
Tenga en cuenta que puede haber cualquier número de elementos (separados por comas)
a continuación amountToDelete, cada uno de los cuales se inserta.

*/

/*
EJERCICIO:

Hemos definido una función, htmlColorNames que toma una matriz de colores HTML como argumento.
Modifique la función usando splice()para eliminar los dos primeros elementos de la matriz
y agregue 'DarkSalmon'y 'BlanchedAlmond'en sus respectivos lugares.

*/

// solucion:
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 1, 'DarkSalmon');
    arr.splice(1, 1, 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// prints [ 'DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']
