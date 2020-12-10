/*
Estructuras de datos básicas: agregue elementos a una matriz con push () y unshift ()

La longitud de una matriz, al igual que los tipos de datos que puede contener, no es fija.
Las matrices se pueden definir con una longitud de cualquier número de elementos,
y los elementos se pueden agregar o eliminar con el tiempo; en otras palabras,
las matrices son mutables . En este desafío, veremos dos métodos con los que podemos modificar programáticamente
una matriz: Array.push()y Array.unshift().

Ambos métodos toman uno o más elementos como parámetros
y agregan esos elementos a la matriz en la que se llama al método; el push()
método agrega elementos al final de una matriz y unshift()agrega elementos al principio.

*/

// considere lo siguiente:
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

/*
Hemos definido una función, mixedNumbersque le estamos pasando una matriz como argumento.
Modifique la función usando push()y unshift()para agregar 'I', 2, 'three'
al principio de la matriz y 7, 'VIII', 9
al final de modo que la matriz devuelta contenga representaciones de los números del 1 al 9 en orden.
*/

// solucion
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
