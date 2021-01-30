function dropElements(arr, func) {
    /*
    Crea un bucle for para comprobar cada elemento.
    Luego verifique si la función dada es verdadera,
    luego deténgase, de lo contrario elimine ese elemento      devuelve la matriz.
    
    */
    for (let i = 0; i <= arr.length; i++) {
        // simepre srea true entonces i entrara aqui y liego hara le verificaccion de la condiiocn que tenga la funcion si es true sigue pero sie flase el elmento en esta iteracion y no cumple la condicion de la funcion lo elminamos  y siempre retornamos el array filtrado :)
        if (func(arr[0])) {
            break;
        }
        // entrara aqui si el elemento da false en la condicion de la funcion como parametro que le pasamos
        // en etse caso eliminaria el 0
        else {
            arr.shift()
        }

    }
    return arr
}

console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })) // [1, 0, 1]
