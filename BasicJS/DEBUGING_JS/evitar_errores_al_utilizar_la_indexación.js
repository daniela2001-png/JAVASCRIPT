/*

Depuración: evitar errores al utilizar la indexación

Los errores de uno por uno (a veces llamados OBOE) surgen cuando intenta apuntar a un índice específico
de una cadena o matriz (para cortar o acceder a un segmento), o cuando recorre los índices de ellos.
La indexación de JavaScript comienza en cero, no en uno, lo que significa que el último índice
es siempre uno menos que la longitud del elemento. Si intenta acceder a un índice igual a la longitud,
el programa puede arrojar un error de referencia de "índice fuera de rango" o imprimir undefined.

Cuando usa métodos de cadena o matriz que toman rangos de índice como argumentos,
es útil leer la documentación y comprender si son inclusivos
(el elemento en el índice dado es parte de lo que se devuelve) o no.

*/

// A continuación, se muestran algunos ejemplos de errores de apagado por uno:
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
    // loops one too many times at the end
    console.log("UNO!"+alphabet[i]);
}
for (let j = 1; j < len; j++) {
    // loops one too few times and misses the first character at index 0
    console.log("TWO"+alphabet[j]);
}
for (let k = 0; k < len; k++) {
    // Goldilocks approves - this is just right
    console.log("THREE"+alphabet[k]);
}

// Corrija los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola.
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i <= len - 1; i++) { // ponemos len -1 para que NO nos arroje el undefined al final d ela cadena
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();
