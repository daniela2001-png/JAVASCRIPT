/*

Secuencias de comandos de algoritmo intermedio: buscar y destruir
Se le proporcionará una matriz inicial (el primer argumento en la función destructora),
seguido de uno o más argumentos. Elimine todos los elementos de la matriz inicial que
tengan el mismo valor que estos argumentos.

Nota
Tienes que utilizar el argumentsobjeto.

*/

function destroyer(arr) {
    // obtenemos los elementos a eliminar
    let args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= args.length; j++) {
            if (args[j] === arr[i]) {
                delete arr[i]
            }
        }
    }
    // debemos pasarle este filter bool para que no nos muestre los null valuesa
    return arr.filter(Boolean)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // retorna [1, 1]