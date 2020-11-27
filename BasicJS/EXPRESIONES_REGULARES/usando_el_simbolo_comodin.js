/*
Expresiones regulares: haga coincidir cualquier cosa con un período comodín
A veces no (o no es necesario) conocer los caracteres exactos en sus patrones. Pensando en todas las palabras que coinciden, digamos, una falta de ortografía llevaría mucho tiempo. Afortunadamente, puede ahorrar tiempo utilizando el carácter comodín:.

El carácter comodín .coincidirá con cualquier carácter. El comodín también se llama doty period. Puede utilizar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir "hug", "huh", "hut", y "hum", se puede utilizar la expresión regular /hu./para que coincida con las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

*/

// Completar la expresión regular unRegexpara que coincida con las cuerdas "run", "sun", "fun", "pun", "nun", y "bun". Su expresión regular debe usar el carácter comodín
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // hara match con jun o kun o lun o mun ...
let result = unRegex.test(exampleStr);
//console.log(result);

// o tambien podemos extraer los matchs
let match = exampleStr.match(unRegex);
console.log(match);