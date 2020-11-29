/*
Expresiones regulares: emparejar números y letras del alfabeto
El uso del guión ( -) para hacer coincidir un rango de caracteres no se limita a letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/coincide con cualquier número entre 0y 5, incluido 0y 5.

Además, es posible combinar un rango de letras y números en un solo juego de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

*/

/*

Cree una única expresión regular que coincida con un rango de letras
entre h y s, y un rango de números entre 2 y 6.

*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s-2-6]/gi;
let result = quoteSample.match(myRegex);
console.log(result);