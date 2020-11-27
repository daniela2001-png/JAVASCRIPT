/*
Expresiones regulares: extraer coincidencias
Hasta ahora, solo ha estado verificando si existe un patrón o no dentro de una cadena. También puede extraer las coincidencias reales que encontró con el .match()método.

Para usar el .match()método, aplique el método en una cadena y pase la expresión regular entre paréntesis.

He aquí un ejemplo:

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
Tenga en cuenta que la .matchsintaxis es "opuesta" al .testmétodo que ha estado utilizando hasta ahora:

'string'.match(/regex/);
/regex/.test('string');

Aplica el .match()método para extraer la palabra coding.

*/

// ejemplo
let string = "HOLA SOY DANIELA MORALES QUE SE DICE"
let expresion = /HOLA/;
let match = string.match(expresion);
console.log(match); // retorna un arreglo con los matchs hechos