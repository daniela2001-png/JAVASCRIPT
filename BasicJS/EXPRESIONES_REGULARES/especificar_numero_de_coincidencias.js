/*
Expresiones regulares: especifique el número superior e inferior de coincidencias

Recuerde que usa el signo más + para buscar uno o más caracteres y el asterisco * para buscar cero o más caracteres.
Estos son convenientes, pero a veces desea hacer coincidir un cierto rango de patrones.

Puede especificar el número inferior y superior de patrones con especificadores de cantidad .
Los especificadores de cantidad se utilizan con llaves ( { }). Coloca dos números entre las llaves
para el número de patrones inferior y superior.

*/


// Por ejemplo, para hacer coincidir solo la letra que "a" aparece entre 3 y las 5 veces en la cadena "ah", su expresión regular sería /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returna true ya que "a" aparece 4 veces osea esta dentro del rango dado en el regex!
multipleA.test(A2); // Returns false

// otro ejemplo :) Cambiar la expresión regular ohRegexpara que coincida con la frase completa "Oh no"sólo cuando tiene 3a 6la carta h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line
let result = ohStr.match(ohRegex);
console.log(result);