/*

Programación funcional: dividir una cadena en una matriz utilizando el método split
El splitmétodo divide una cadena en una matriz de cadenas. Se necesita un argumento
para el delimitador, que puede ser un carácter que se utilizará para dividir la cadena
o una expresión regular. Por ejemplo, si el delimitador es un espacio, obtiene una matriz
de palabras, y si el delimitador es una cadena vacía, obtiene una matriz de cada carácter de la cadena.

*/

/*
Aquí hay dos ejemplos que dividen una cadena por espacios y luego otra por dígitos usando una expresión regular:
*/
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

// Dado que las cadenas son inmutables, el splitmétodo facilita el trabajo con ellas.

/*

Use el splitmétodo dentro de la splitify 
función para dividir stren una matriz de palabras.
La función debería devolver la matriz.
Tenga en cuenta que las palabras no siempre están separadas por espacios
y la matriz no debe contener signos de puntuación.

*/
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)

    // Only change code above this line
}
console.log(splitify("Hello World,I-am code")); // ["Hello", "World", "I", "am", "code"]
