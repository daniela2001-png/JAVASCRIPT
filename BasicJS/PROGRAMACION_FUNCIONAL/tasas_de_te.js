/*

Programación funcional: aprenda sobre la programación funcional
La programación funcional es un estilo de programación en el que las soluciones son funciones simples y aisladas, sin efectos secundarios fuera del alcance de la función.

INPUT -> PROCESS -> OUTPUT

La programación funcional se trata de:

Funciones aisladas: no hay dependencia del estado del programa, que incluye variables globales que están sujetas a cambios.

Funciones puras: la misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente

*/

/*

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTeay getTeaya están definidas.
Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable.

*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
console.log(tea4TeamFCC) // ["greenTea" * 40 ]


