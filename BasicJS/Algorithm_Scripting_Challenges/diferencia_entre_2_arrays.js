/*

Secuencias de comandos de algoritmo intermedio: diferencia de dos matrices
Compare dos matrices y devuelva una nueva matriz con los elementos
que solo se encuentran en una de las dos matrices dadas,
pero no en ambas. En otras palabras, devuelve la diferencia simétrica de las dos matrices.

Nota
Puede devolver la matriz con sus elementos en cualquier orden.

*/
function diffArray(arr1, arr2) {
    return arr1 // arr1 + arr2
        .concat(arr2)
        // esto me retorna los elementos unicos nego los elementos repetidos
        .filter(item => !arr1.includes(item) || !arr2.includes(item)).sort();
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

