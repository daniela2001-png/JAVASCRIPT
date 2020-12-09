/*
Expresiones regulares: Coincidir con espacios en blanco
Los desafíos hasta ahora han cubierto las letras coincidentes del alfabeto y los números.
También puede hacer coincidir los espacios en blanco o los espacios entre letras.

Puede buscar espacios en blanco usando \s, que son minúsculas s.
Este patrón no solo coincide con los espacios en blanco,
sino también con los caracteres de retorno de carro, tabulación, avance de página y nueva línea.
Puedes pensar en él como similar a la clase de personaje [ \r\t\f\n\v].
*/

// ejemplo:
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let result = whiteSpace.match(spaceRegex);
console.log(result); // Returns [" ", " "]
