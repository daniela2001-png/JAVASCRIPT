/*

Secuencias de comandos de algoritmo intermedio: caso de punción lumbar

Convierte una cuerda en caja espinal. El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.

*/

/*

CASOS:

spinalCase("This Is Spinal Tap")debería volver "this-is-spinal-tap".

Aprobado
spinalCase("thisIsSpinalTap")debería volver "this-is-spinal-tap".

Aprobado
spinalCase("The_Andy_Griffith_Show")debería volver "the-andy-griffith-show".

Aprobado
spinalCase("Teletubbies say Eh-oh")debería volver "teletubbies-say-eh-oh".

Aprobado
spinalCase("AllThe-small Things")debería volver "all-the-small-things".

*/

// nota: el look a head positive me tomara epsaicos y _ antes de el rango de caracteres de a-z o A-Z en este caso con eso soluciono cuando me mandan palabras pegadas :p
function spinalCase(str) {
    return str.trim().split(/\s|_|(?=[A-Z])/gm).join("-").toLowerCase()
}

console.log(spinalCase('TheAndy_Griffith_Show')); // the-andy-griffith-show
