/*

Expresiones regulares: coincidir con todas las letras y números

Con las clases de caracteres, pudo buscar todas las letras del alfabeto con [a-z].
Este tipo de clase de personaje es lo suficientemente común como para que tenga un atajo
aunque también incluye algunos caracteres adicionales.
La clase de carácter más cercana en JavaScript para coincidir con el alfabeto es \w.
Este atajo es igual a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números
Tenga en cuenta que esta clase de caracteres también incluye el carácter de subrayado ( _).

*/

// ejemplo
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(numbers.match(longHand)); // Returns ['42']
console.log(numbers.match(shortHand)); // Returns ['42']
console.log(varNames.match(longHand)); // Returns ['important_var']
console.log(varNames.match(shortHand)); // Returns ['important_var']

// Utilice la clase de caracteres abreviados \wpara contar la cantidad de caracteres alfanuméricos en varias comillas y cadenas.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // solo el operador w me toma caracter por carcater si fuese con w+ me toma por palabra
let result = quoteSample.match(alphabetRegexV2).length; // 31 en este caso
console.log(result);
