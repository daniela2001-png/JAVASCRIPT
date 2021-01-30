/*
Scripting de algoritmo intermedio: mínimo común múltiplo
Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se pueda dividir uniformemente por ambos, así como por todos los números secuenciales en el rango entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si le dan 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que también sea divisible por todos los números entre 1 y 3. La respuesta aquí sería 6.

*/

function smallestCommons(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let result = [];

    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    let i = 1;
    let res;
    // si la condición del while llega a ser true item pasa a la siguiente iteración
    while (result.every(item => res % item === 0) === false) {
        i++;
        // console.log(res) 10, 15, 20, 25 seran los multiplos de 5
        res = max * i;
    }
    return res;
}

console.log(smallestCommons([1, 5])); // 60 seria el mcm de 1 a 5
