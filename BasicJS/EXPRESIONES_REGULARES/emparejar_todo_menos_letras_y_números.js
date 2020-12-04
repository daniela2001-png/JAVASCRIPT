/*

Expresiones regulares: emparejar todo menos letras y números

Ha aprendido que puede usar un atajo para hacer coincidir los caracteres alfanuméricos [A-Za-z0-9_] usando \w.
Un patrón natural que quizás desee buscar es lo opuesto a los alfanuméricos.

Puede buscar lo contrario de \w con \W. Tenga en cuenta que el patrón opuesto usa una letra mayúscula.
Este atajo es el mismo que [^A-Za-z0-9_].

*/

// ejemplo:
let shortHand = /\W/; // la W toma todo menos el caracter "_" y letras y numeros
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand)); // Returns ["%"]
console.log(sentence.match(shortHand)); // Returns ["!"]


// Utilice la clase de caracteres abreviados \Wpara contar el número de caracteres no alfanuméricos en varias comillas y cadenas.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);