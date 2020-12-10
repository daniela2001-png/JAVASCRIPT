/*
Estructuras de datos básicas: eliminar elementos mediante splice()
Bien, hemos aprendido cómo eliminar elementos del principio y el final de las matrices usando shift() y pop()
pero ¿qué pasa si queremos eliminar un elemento de algún lugar en el medio?
¿O eliminar más de un elemento a la vez? Bueno, ahí es donde splice() entra en splice() juego
Nos permite hacer precisamente eso: eliminar cualquier número de elementos consecutivos
de cualquier parte de una matriz.

splice() puede tomar hasta 3 parámetros, pero por ahora, nos enfocaremos solo en los primeros 2.
Los primeros dos parámetros de splice() son números enteros que representan índices, o posiciones,
de la matriz que splice()se está llamando. Y recuerde, las matrices tienen un índice cero
por lo que para indicar el primer elemento de una matriz, usaríamos 0. splice()
El primer parámetro representa el índice de la matriz desde el cual comenzar a eliminar elementos,
mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo:

*/

// Por ejemplo:
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

// splice() no solo modifica la matriz a la que se llama, sino que también devuelve una nueva matriz que contiene el valor de los elementos eliminados:
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

// Hemos inicializado una matriz arr. Úselo splice()para eliminar elementos de arr, de modo que solo contenga elementos que sumen el valor de 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 2);
arr.splice(1, 2);
arr.splice(2, 2);
// Only change code above this line
console.log(arr); // print [5, 5]
