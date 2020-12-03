/*

Expresiones regulares: hacer coincidir patrones de cadenas iniciales
Los desafíos anteriores mostraron que las expresiones regulares se pueden usar para buscar una serie de coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas.

En un desafío anterior, usó el carácter de intercalación ( ^) dentro de un juego de caracteres para crear un juego de caracteres negado en el formulario [^thingsThatWillNotBeMatched]. Fuera de un conjunto de caracteres, el símbolo de intercalación se utiliza para buscar patrones al principio de cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

*/


let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
// Returns true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));
// Returns false



// Utilice el carácter de intercalación en una expresión regular para buscar "Cal"solo al principio de la cadena rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result); // true