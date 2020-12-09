/*
Expresiones regulares: marque todas o ninguna

A veces, los patrones que desea buscar pueden tener partes que pueden existir o no.
Sin embargo, puede ser importante verificarlos.

Puede especificar la posible existencia de un elemento con un signo de interrogación, ?.
Esto busca cero o uno de los elementos anteriores.
Puede pensar que este símbolo dice que el elemento anterior es opcional.

*/

// Por ejemplo, existen ligeras diferencias en inglés americano y británico y puede usar el signo de interrogación para hacer coincidir ambas grafías.
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

// ejemplo: Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result); //true