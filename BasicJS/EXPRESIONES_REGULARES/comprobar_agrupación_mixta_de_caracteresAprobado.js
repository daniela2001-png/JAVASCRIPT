/*

Expresiones regulares: comprobar agrupación mixta de caracteresAprobado

A veces queremos buscar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().

Si desea buscar Penguino Pumpkinen una cadena, puede usar la siguiente expresión regular:/P(engu|umpk)in/g

Luego, verifique si los grupos de cadenas deseados están en la cadena de prueba utilizando el test()método.

*/
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor.*|Franklin.*)(Roosevelt)/; // Change this line
let result = true; // Change this line
let result2 = myRegex.test(myString)
