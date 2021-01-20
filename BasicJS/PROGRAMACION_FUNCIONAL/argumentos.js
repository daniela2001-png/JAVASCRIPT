/*

Programación funcional: pasar argumentos para evitar la dependencia externa en una función

El último desafío fue un paso más hacia los principios de programación funcional, pero todavía falta algo.

No modificamos el valor de la variable global, pero la función incrementerno funcionaría sin la variable global fixedValue.

Otro principio de la programación funcional es declarar siempre sus dependencias explícitamente. Esto significa que si una función depende de la presencia de una variable u objeto, pase esa variable u objeto directamente a la función como argumento.

Hay varias buenas consecuencias de este principio. La función es más fácil de probar, usted sabe exactamente qué entrada necesita y no dependerá de nada más en su programa.

Esto puede brindarle más confianza al modificar, eliminar o agregar un código nuevo. Sabría lo que puede o no puede cambiar y podrá ver dónde están las trampas potenciales.

Finalmente, la función siempre produciría la misma salida para el mismo conjunto de entradas, sin importar qué parte del código la ejecute.

Actualicemos la incrementerfunción para declarar claramente sus dependencias.

Escriba la incrementerfunción de modo que tome un argumento y luego devuelva un resultado después de aumentar el valor en uno.

*/

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(value) {
    return value += 1;

    // Only change code above this line
}

console.log(incrementer(4)) // yields 5!