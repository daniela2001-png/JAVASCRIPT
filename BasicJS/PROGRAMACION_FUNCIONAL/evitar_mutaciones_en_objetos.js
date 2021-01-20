/*

Programación funcional: evite mutaciones y efectos secundarios mediante la programación funcional

Si aún no lo ha descubierto, el problema en el desafío anterior fue con la splicellamada en la tabClose()función. Desafortunadamente, splicecambia la matriz original en la que se llama, por lo que la segunda llamada usó una matriz modificada y dio resultados inesperados.

Este es un pequeño ejemplo de un patrón mucho más grande: llama a una función en una variable, matriz o un objeto, y la función cambia la variable o algo en el objeto.

Uno de los principios básicos de la programación funcional es no cambiar las cosas. Los cambios provocan errores. Es más fácil prevenir errores sabiendo que sus funciones no cambian nada, incluidos los argumentos de la función o cualquier variable global.

El ejemplo anterior no tenía operaciones complicadas, pero el splicemétodo cambió la matriz original y dio como resultado un error.

Recuerde que en la programación funcional, cambiar o alterar cosas se llama mutación , y el resultado se llama efecto secundario . Una función, idealmente, debería ser una función pura , lo que significa que no causa ningún efecto secundario.

Intentemos dominar esta disciplina y no alterar ninguna variable u objeto en nuestro código.

Complete el código de la función incrementer para que devuelva el valor de la variable global fixedValue aumentado en uno.

*/

// vamos aumnetar el valor de la var global sin modificar su valor original para que no courran efectos secundarios y tengamos una función pura en js

let varGlobal = 4;
function incrementer() {
    let moreOne = varGlobal;
    return (moreOne += 1);
}

console.log(incrementer()); // yields 5
console.log(varGlobal) // yields 4
