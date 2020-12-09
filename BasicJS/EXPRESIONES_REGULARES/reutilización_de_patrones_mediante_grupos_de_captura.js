/*
Expresiones regulares: reutilización de patrones mediante grupos de captura

Algunos patrones que busque aparecerán varias veces en una cadena.
Es un desperdicio repetir manualmente esa expresión regular.
Existe una mejor manera de especificar cuándo tiene varias subcadenas repetidas en su cadena.

Puede buscar subcadenas repetidas utilizando grupos de captura .
Los paréntesis, (y ), se utilizan para encontrar subcadenas repetidas.
Pones la expresión regular del patrón que se repetirá entre paréntesis.

Para especificar dónde aparecerá esa cadena repetida, use una barra invertida ( \) y luego un número
Este número comienza en 1 y aumenta con cada grupo de captura adicional que utilice.
Un ejemplo sería hacer \1coincidir el primer grupo.

*/
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
// El uso del .match()método en una cadena devolverá una matriz con la cadena que coincide, junto con su grupo de captura.

// ejemplo:Use grupos de captura reRegexpara hacer coincidir números que se repiten solo tres veces en una cadena, cada uno separado por un espacio.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // ["42, 42, 42", "42"]
let result = repeatNum.match(reRegex);
console.log(result);
