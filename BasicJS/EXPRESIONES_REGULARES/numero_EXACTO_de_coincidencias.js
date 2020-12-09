/*
Expresiones regulares: especifique el número exacto de coincidencias

Puede especificar el número inferior y superior de patrones con especificadores de cantidad utilizando llaves.
A veces, solo desea una cantidad específica de coincidencias.

Para especificar un cierto número de patrones, solo tenga ese número entre las llaves.

*/

// Por ejemplo, para hacer coincidir solo la palabra "hah"con los a 3 tiempos de las letras , su expresión regular sería /ha{3}h/
let string1 = "hah";
let string2 = "haah";
let string3 = "haaah";
let regex = /ha{3}h/g;
let match1 = string1.match(regex);
let match2 = string2.match(regex);
let match3 = string3.match(regex);
console.log(match1); // print null
console.log(match2); // print null
console.log(match3); // print ['haaah']
