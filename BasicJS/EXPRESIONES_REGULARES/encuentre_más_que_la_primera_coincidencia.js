/*
Expresiones regulares: encuentre más que la primera coincidencia
Hasta ahora, solo ha podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
Para buscar o extraer un patrón más de una vez, puede usar la gbandera.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
Usando la expresión regular starRegex, busque y extraiga ambas "Twinkle"palabras de la cadena twinkleStar.

Nota
Puede tener varias banderas en su expresión regular como/search/gi

*/

// solcuion tenemos que encontra mas de 1 conicdencia y sin importar si e smayusucla o no una palabra

let string = "HolAS HOLAS holas que hacen?"
let expresión = /holas/gi; // usamo el operaodr "i" para las mayusculas o no y el operador "g" para que lo tome mas de 1 vez
let match = string.match(expresión);
console.log(match); // ["HolAS", "HOLAS", "holas"]