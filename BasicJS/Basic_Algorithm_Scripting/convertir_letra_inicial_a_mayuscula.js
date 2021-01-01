/*

Scripting de algoritmo básico: caso de título una oración
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula
Asegúrate de que el resto de la palabra esté en minúsculas.

A los efectos de este ejercicio, también debe utilizar mayúsculas para conectar palabras como "el" y "de".
*/

function titleCase(str) {
    // sin grupo no jo stomara el 1er char del string que nos dan
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("hfheufhej hijkjr gurguen"))
