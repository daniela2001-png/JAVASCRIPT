/*
Expresiones regulares: coincide con caracteres que aparecen cero o más veces

El último desafío utilizó el +signo más para buscar caracteres que aparecen una o más veces.
También hay una opción que coincide con los caracteres que aparecen cero o más veces.

El carácter de hacerlo es el asterisco o estrella: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

/*
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

*/

/*
Para este desafío, chewieQuotese ha inicializado como "¡Aaaaaaaaaaaaaaaarrrgh!" entre bastidores.
Cree una expresión regular chewieRegexque use el *carácter para que coincida con un "A"
carácter en mayúscula seguido inmediatamente por cero o más "a"
caracteres en minúscula en chewieQuote. Su expresión regular no necesita banderas ni clases de caracteres
y no debe coincidir con ninguna de las otras comillas.
*/

let string = "¡Aaaaaaaaaaaaaaaarrrgh!";
let regex = /Aa*/; 
let result = string.match(regex);
console.log(result);