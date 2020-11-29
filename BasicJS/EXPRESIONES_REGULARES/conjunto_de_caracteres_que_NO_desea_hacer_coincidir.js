/*

Expresiones regulares: Coincidencia de caracteres individuales no especificados

Hasta ahora, ha creado un conjunto de caracteres que desea hacer coincidir
pero también puede crear un conjunto de caracteres que no desea hacer coincidir.
Estos tipos de juegos de caracteres se denominan juegos de caracteres negados

Para crear un juego de caracteres negado, coloque un carácter de intercalación (^)
después del corchete de apertura y antes de los caracteres que no desea hacer coincidir.

Por ejemplo: 

/[^aeiou]/gi

coincide con todos los caracteres que no son vocales.
Tenga en cuenta que personajes como ., !, [, @, /y el espacio en blanco se emparejan
sólo el conjunto de caracteres negada vocal excluye los caracteres vocales.

*/

// Cree una única expresión regular que coincida con todos los caracteres que no sean un número o una vocal
let quoteSample = "3210  $%&/()0'?¿?    eaeaeaiouiaaiuaioaiaiuaie blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);
