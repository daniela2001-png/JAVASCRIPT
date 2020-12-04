/*

Expresiones regulares: hacer coincidir patrones de cadenas finales
En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al comienzo de las cadenas.
También hay una forma de buscar patrones al final de las cadenas.

Puede buscar el final de las cadenas utilizando el carácter de signo de dólar $al final de la expresión regular.

*/

//ejemplo
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
// Returns true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));
// Returns false

// Utilice el carácter de anclaje ( $) para hacer coincidir la cadena "caboose"al final de la cadena caboose.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = caboose.match(lastRegex);
console.log(result);