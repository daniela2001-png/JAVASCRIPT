/*
Expresiones regulares: anticipación positiva y negativa

Lookaheads son patrones que le dicen a JavaScript
que busque hacia adelante en su cadena para buscar patrones más adelante.
Esto puede resultar útil cuando desee buscar varios patrones en la misma cadena.

Hay dos tipos de búsqueda anticipada: anticipación positiva y anticipación negativa .

Una búsqueda anticipada positiva buscará asegurarse de que el elemento en el patrón de búsqueda esté allí
pero en realidad no coincidirá con él. Se utiliza una anticipación positiva (?=...)cuando ... es la parte requerida
que no coincide.

Por otro lado, una búsqueda anticipada negativa buscará asegurarse de que el elemento en el patrón de búsqueda
no esté allí. Una mirada anticipada negativa se utiliza (?!...)cuando ...es el patrón que no desea que esté allí.
El resto del patrón se devuelve si la parte de anticipación negativa no está presente.

Las búsquedas anticipadas son un poco confusas, pero algunos ejemplos ayudarán.
*/

let quit = "quit";
let noquit = "qiurrutur";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
let match1 = quit.match(quRegex); // Returns ["q"]
let match2 = noquit.match(qRegex); // Returns ["q"]
console.log(match1);
console.log(match2);

// ejercicio: Utilice búsquedas anticipadas en pwRegexpara hacer coincidir contraseñas que tengan más de 5 caracteres, que no comiencen con números y que tengan dos dígitos consecutivos.
let sampleWord = "danie12";
// tomamos  5 o mas letras que no empieze por numeros y que tenga como minimo dos numeros!
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
let result2 = sampleWord.match(pwRegex)
console.log(result); // true
console.log(result2); // ["d"]