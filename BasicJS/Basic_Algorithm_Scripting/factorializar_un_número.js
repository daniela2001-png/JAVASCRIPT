/*
Scripting de algoritmo básico: factorializar un número
Devuelve el factorial del entero proporcionado.

Si el número entero se representa con la letra n, un factorial es el producto de todos
los números enteros positivos menores o iguales an.

Los factoriales a menudo se representan con la notación abreviada n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Solo se proporcionarán a la función enteros mayores o iguales a cero.

*/

function factorialize(num) {
    if (num === 0)
        return 1;
    resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(factorialize(5)) // returns 5! === 120
