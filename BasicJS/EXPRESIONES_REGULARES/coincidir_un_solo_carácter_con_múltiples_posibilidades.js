/*

Expresiones regulares: haga coincidir un solo carácter con múltiples posibilidades

Aprendió a hacer coincidir patrones literales ( /literal/) y carácter comodín ( /./). Esos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide con todo. Hay opciones que son un equilibrio entre los dos extremos.

Puede buscar un patrón literal con cierta flexibilidad con las clases de caracteres . Las clases de caracteres le permiten definir un grupo de caracteres que desea hacer coincidir colocándolos entre corchetes ( [y ]).

Por ejemplo, desea hacer coincidir "bag", "big"y "bug"pero no "bog". Puede crear la expresión regular /b[aiu]g/para hacer esto. El [aiu]es la clase de caracteres que sólo coincidirá con los personajes "a", "i", o "u".

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

Utilice una clase de caracteres con vocales ( a, e, i, o, u) en su expresión regular vowelRegexpara encontrar todas las vocales en la cadena quoteSample.

*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // tomara todas las vocales incluyendo mayusculas
let result = quoteSample.match(vowelRegex); // generamos la lista de coincidencias 
console.log(result); // 25 vocales que extraimos del string