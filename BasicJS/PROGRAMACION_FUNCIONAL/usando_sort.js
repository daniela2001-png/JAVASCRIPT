/*

Programación funcional: ordenar una matriz alfabéticamente usando el método de ordenación

El sort método ordena los elementos de una matriz de acuerdo con la función de devolución de llamada.

*/

function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

/*
El método de clasificación predeterminado de JavaScript es por valor de punto Unicode de cadena, que puede devolver resultados inesperados. Por lo tanto, se recomienda proporcionar una función de devolución de llamada para especificar cómo ordenar los elementos de la matriz. Cuando se proporciona una función de devolución de llamada de este tipo, normalmente llamada compareFunction, los elementos de la matriz se ordenan de acuerdo con el valor de retorno de compareFunction: If compareFunction(a,b)devuelve un valor menor que 0 para dos elementos ay b, entonces a, vendrá antes b. Si compareFunction(a,b)devuelve un valor mayor que 0 para dos elementos ay b, entonces bvendrá antes a. Si compareFunction(a,b)devuelve un valor igual a 0 para dos elementos ay b, entonces ay bpermanecerá sin cambios.

Utilice el sortmétodo de la alphabeticalOrderfunción para ordenar los elementos de arren orden alfabético.

*/

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));