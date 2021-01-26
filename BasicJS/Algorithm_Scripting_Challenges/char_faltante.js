/*

Secuencias de comandos de algoritmo intermedio: letras que faltan

Busque la letra que falta en el rango de letras aprobadas y devuélvala.

Si todas las letras están presentes en el rango, devuelve undefined.

*/
function fearNotLetter(string) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let start = alfabeto.indexOf(string[0])
    let compare = alfabeto.slice(start)
    for (let i = 0; i < string.length; i++) {
        //console.log(alfabeto[i], string[i])
        if (string[i] != compare[i]) {
            return compare[i]
        }
    }
}

console.log(fearNotLetter("abc"));
