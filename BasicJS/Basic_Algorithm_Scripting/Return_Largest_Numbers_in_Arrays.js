/*
Devuelve una matriz que consta del número más grande de cada submatriz proporcionada.
Para simplificar, la matriz proporcionada contendrá exactamente 4 submatrices.

Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro
con la sintaxis de la matriz arr[i].

*/

function largestOfFour(arr) {
    let new_arr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        // por alguna razon que desconozco MAth.max retorna NaN si le mandamos el array de una asi que solo los desglosamos(sacar solo los numeritos sin corchetes) y wala!
        new_arr.push(Math.max(...arr[i]))
        //console.log(arr[i])

    }
    return new_arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // returns [ 5, 27, 39, 1001 ]