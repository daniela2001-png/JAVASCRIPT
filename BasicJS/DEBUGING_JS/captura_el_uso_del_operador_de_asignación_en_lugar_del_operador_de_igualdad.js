/*
Depuración: captura el uso del operador de asignación en lugar del operador de igualdad

Programas de ramificación, es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones,
se basan en if, else ify elselos datos contenidos en JavaScript.
La condición a veces toma la forma de probar si un resultado es igual a un valor.

Esta lógica se habla (en inglés, al menos) como "si x es igual a y, entonces ...",
que puede traducirse literalmente a código utilizando el =operador de asignación, o.
Esto conduce a un flujo de control inesperado en su programa.

Como se cubrió en desafíos anteriores, el operador de asignación (=) en JavaScript
asigna un valor a un nombre de variable. Y los operadores == y === verifican la igualdad
(las === pruebas triples para la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales).

El código siguiente se asigna xa 2, que se evalúa como true.
Casi todos los valores por sí solo en JavaScript evalúa true,
a excepción de lo que se conoce como los "valores" Falsy: false, 0, ""(una cadena vacía), NaN, undefined, y null.

*/

let x = 1;
let y = 2;
if (x = y) {
    // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
    // this code block is what should run (but won't) in this example
}

// Corrija la condición para que el programa ejecute la rama correcta y se le asigne el valor apropiado result.
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);
