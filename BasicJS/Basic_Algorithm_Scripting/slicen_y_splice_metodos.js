/*
Scripting de algoritmo básico: corte y empalme

Se le dan dos matrices y un índice.

Copie cada elemento de la primera matriz en la segunda matriz, en orden.

Empiece a insertar elementos en el índice nde la segunda matriz.

Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.
*/
function frankenSplice(arr1, arr2, n) {
    // The slice() method returns a shallow copy of array
    let arr = arr2.slice() // arr = [4, 5, 6]
    // insertamos con splice modificando la copia del arreglo2 desde la posicion n que nos dan
    arr.splice(n, 0, ...arr1)
    return arr
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
