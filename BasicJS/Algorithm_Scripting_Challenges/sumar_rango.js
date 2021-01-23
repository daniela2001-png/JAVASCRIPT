/*

Scripting de algoritmo intermedio: sumar todos los números en un rango
Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre aparecerá primero.

Por ejemplo, sumAll([4,1])debería devolver 10porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.

*/

// solucion
const sumAll = (arr) => {
    // obtenemos el maximo valor del arreglo
    let max = Math.max(arr[0], arr[1])
    // obtenemos el minimo valor del arreglo
    let min = Math.min(arr[0], arr[1])

    // recorremos el arreglo desde el min hasta el max y sumamos
    let sum = 0
    for (let i = min; i <= max; i++){
        sum += i
    }
    return sum;
}

console.log(sumAll([4, 1])) // yield 10 === 1+2+3+4
