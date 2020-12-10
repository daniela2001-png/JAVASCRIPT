/*

Estructuras de datos básicas: copiar una matriz con el operador Spread

Si bien slice() nos permite ser selectivos sobre qué elementos de una matriz copiar,
entre varias otras tareas útiles, el nuevo operador de propagación de ES6 nos permite copiar
fácilmente todos los elementos de una matriz, en orden, con una sintaxis simple y altamente legible.
La sintaxis de propagación simplemente se ve así:...

*/

// ejemplo: En la práctica, podemos usar el operador de propagación para copiar una matriz así
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray

/*

Hemos definido una función, copyMachineque toma arr(una matriz) y num(un número) como argumentos.
Se supone que la función devuelve una nueva matriz formada por numcopias de arr.
Hemos hecho la mayor parte del trabajo por usted, pero todavía no funciona del todo bien.
Modifique la función usando la sintaxis de propagación para que funcione correctamente
(pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).

*/

// solucion:
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        //newArr = [... arr];
        let object = [...arr]
        newArr.push(object);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

