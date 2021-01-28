/*

Scripting de algoritmo intermedio: sumar todos los números de Fibonacci impares

Dado un entero positivo num, devuelve la suma de todos los números de Fibonacci impares que son menores o iguales a num.

Los dos primeros números de la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros seis números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debería regresar 10porque todos los números de Fibonacci impares menores o iguales que 10son 1, 1, 3 y 5.

*/

function sumFibs(num) {
    /*
    Bueno tenemos que sumar todos los numeros impares que
    este en la sucesion de fibonacci ejemplo:
    1, 1, 2, 3, 5, 8, 13 ...
    sería una suma sucesiva entre 2 números:
    1 + 1 = 2
    2 + 3 = 5
    5 + 8 = 13
    pero nada mas sumaremos los impares (la condición para sumar es que el número fuése impar)
    
    - crearemos 3 vars : 
        start + next = total
     */
    // start sera igual a uno pa no sumarle al final el 0 que cuenta como 1
    let start = 1;
    let next = 0;
    let total;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        total = start + next;
        start = next;
        next = total;
        // condicionamos para que el total no se pase del numero que nos pasan
        if (total % 2 !== 0 && total <= num) {
            sum += total
        }
    }
    return sum;
}

console.log(sumFibs(1000));
