/*
Scripting de algoritmo básico: ¿A dónde pertenezco?
Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debería regresar 1porque es mayor que 1(índice 0), pero menor que 2(índice 1).

Del mismo modo, getIndexToIns([20,3,5], 19)debería regresar 2porque una vez que se haya ordenado la matriz, se verá [3,5,20]y 19es menor que 20(índice 2) y mayor que 5(índice 1).


*/

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // debería volver 3 la posicion donde debria ser insertado deberia ser la numero 3