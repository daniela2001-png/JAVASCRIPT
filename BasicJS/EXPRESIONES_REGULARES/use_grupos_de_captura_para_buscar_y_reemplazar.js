/*
Expresiones regulares: use grupos de captura para buscar y reemplazar:

La búsqueda es útil. Sin embargo, puede hacer que la búsqueda sea aún más poderosa
cuando también cambia (o reemplaza) el texto que coincide.

Puede buscar y reemplazar texto en una cadena usando .replace() en una cadena.
Las entradas para .replace()es primero el patrón de expresiones regulares que desea buscar.
El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.

*/
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

// También puede acceder a los grupos de captura en la cadena de reemplazo con signos de dólar ( $).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

/*
Escriba una expresión regular fixRegexusando tres grupos de captura que buscarán cada palabra
en la cadena "uno dos tres". Luego actualice la replaceTextvariable para reemplazar "uno dos tres" con la cadena
"tres dos uno" y asigne el resultado a la resultvariable. Asegúrese de que está utilizando grupos de captura
en la cadena de reemplazo usando la $ sintaxis del signo de dólar ( ).

*/

// solucion:
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result); // print three two one
