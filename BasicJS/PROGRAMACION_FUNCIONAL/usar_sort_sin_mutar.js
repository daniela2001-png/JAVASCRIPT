/*
Programación funcional: devolver una matriz ordenada sin cambiar la matriz original
Un efecto secundario del sortmétodo es que cambia el orden de los elementos en la matriz original. En otras palabras, muta la matriz en su lugar. Una forma de evitar esto es concatenar primero una matriz vacía con la que se está ordenando (recuérdelo slicey concatdevuelva una nueva matriz), luego ejecute el sortmétodo.

Utilice el sortmétodo de la nonMutatingSortfunción para ordenar los elementos de una matriz en orden ascendente. La función debe devolver una nueva matriz y no mutar la globalArrayvariable.

*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    arr = arr.slice()
    return arr.sort()
    // Only change code above this line
}
nonMutatingSort(globalArray);