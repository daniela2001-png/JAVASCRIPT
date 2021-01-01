/*
Secuencias de comandos de algoritmo básico: truncar una cadena
Truncar una cadena (primer argumento)
si es más larga que la longitud máxima de cadena dada (segundo argumento).
Devuelve la cadena truncada con un ...final.

// TESTS DE LA FUNCION :3
Aprobado
truncateString("A-tisket a-tasket A green and yellow basket", 8) debe devolver "A-tisket ...".

Aprobado
truncateString("Peter Piper picked a peck of pickled peppers", 11) debería devolver "Peter Piper ...".

Aprobado
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) debe devolver "A-tisket a-tasket Una canasta verde y amarilla".

Aprobado
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) debe devolver "A-tisket a-tasket Una canasta verde y amarilla".

Aprobado
truncateString("A-", 1) debe devolver "A ...".

Aprobado
truncateString("Absolutely Longer", 2) debe devolver "Ab ...".

*/

function truncateString(str, num) {
    let string = str.substr(0, num)
    if (str.length > num)
        return string + "..."
    return string
}

console.log(truncateString("A-ti", 2)); // prints A-t ...
