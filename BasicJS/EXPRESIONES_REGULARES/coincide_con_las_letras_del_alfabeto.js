/*

Expresiones regulares: coincide con las letras del alfabeto

Viste cómo puedes usar conjuntos de caracteres para especificar un grupo de caracteres para que coincidan, pero eso es mucho escribir cuando necesitas hacer coincidir una gran variedad de caracteres (por ejemplo, cada letra del alfabeto). Afortunadamente, hay una función incorporada que hace que esto sea breve y simple.

Dentro de un conjunto de caracteres, se puede definir un rango de caracteres para que coincida con el uso de un carácter de guión: -.

Por ejemplo, para que coincida con las letras minúsculas aa través eusaría [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
Coincidir con todas las letras de la cadena quoteSample.

Nota
Asegúrese de hacer coincidir las letras mayúsculas y minúsculas .

*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
