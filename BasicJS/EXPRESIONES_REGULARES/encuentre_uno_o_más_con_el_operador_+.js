/*
Expresiones regulares: encuentre uno o más criminales en una cacería

Es hora de hacer una pausa y probar sus nuevas habilidades de escritura de expresiones regulares.
Un grupo de delincuentes se escapó de la cárcel y se escapó, pero no se sabe cuántos.
Sin embargo, sabes que permanecen juntos cuando están cerca de otras personas.
Eres responsable de encontrar a todos los criminales a la vez.

Aquí hay un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/coincide con la letra z cuando aparece una o más veces seguidas.
Encontraría coincidencias en todas las siguientes cadenas:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

Pero no encuentra coincidencias en las siguientes cadenas ya que no hay letras z:

""
"ABC"
"abcabc"

Escribe una expresión regular codiciosa que encuentre uno o más criminales
dentro de un grupo de otras personas. Un criminal está representado por la letra mayúscula C.

*/

let string = "abcabc CC CCC  CCCCCCCC3CC3C3C3C3C";
let reCriminals = /C+/g;
let result = string.match(reCriminals);
console.log(result); // output === ['CC', 'CCC', 'CCCCCCCC', 'CC', 'C', 'C', 'C', 'C']


let string = "Daniela mami Daniela Daniela \
Daniela"
let regex = /^Daniela/g; // acuerdate que este regex es != [^Daniela] este hara match todo menos con Daniela
let result = string.match(regex);
console.log(result);