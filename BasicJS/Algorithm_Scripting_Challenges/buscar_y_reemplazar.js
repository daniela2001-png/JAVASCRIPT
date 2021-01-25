/*

Scripting de algoritmo intermedio: búsqueda y reemplazo

Realice una búsqueda y reemplace la oración usando los argumentos proporcionados y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazarla.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento con (después).

Nota
Conserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando la reemplace. Por ejemplo, si desea reemplazar la palabra "Libro" por la palabra "perro", debe reemplazarla por "Perro".

*/

function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        let hi = after[0].toUpperCase() + after.slice(1);
        str = str.replace(before, hi)
    }
    if (before[0] === before[0].toLowerCase()) {
        let ho = after[0].toLowerCase() + after.slice(1);
        str = str.replace(before, ho)
    }
    return str
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
