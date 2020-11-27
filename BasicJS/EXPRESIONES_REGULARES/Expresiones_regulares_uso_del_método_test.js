/*
Expresiones regulares: uso del método de prueba
Las expresiones regulares se utilizan en los lenguajes de programación para hacer coincidir partes de cadenas. Creas patrones para ayudarte a hacer esa combinación.

Si usted quiere encontrar la palabra "the"en la cadena "The dog chased the cat", se puede usar la siguiente expresión regular: /the/. Tenga en cuenta que las comillas no son necesarias dentro de la expresión regular.

JavaScript tiene varias formas de usar expresiones regulares. Una forma de probar una expresión regular es usar el .test()método. El .test()método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve trueo falsesi su patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

Aplique la expresión regular myRegexen la cadena myStringusando el .test()método.

*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result); // true