/*

Programación funcional: refactorizar variables globales sin funciones
Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como var newArr = arrVar, donde arrVarestá una matriz, simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.

Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función y no de ningún objeto o variable global.

Sumar uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con matrices u objetos más complejos.

Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna de las funciones. La addfunción debe agregar el dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debería eliminar lo dado bookNamede la matriz que se le pasó.

Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookName parámetro.



*/

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let array = [...arr]
    array.push(bookName);
    return array;

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    let array = [...arr]
    // obtenemos el index del elemeto para eliminar
    var book_index = array.indexOf(bookName);
    if (book_index >= 0) {

        array.splice(book_index, 1);
        return array;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
//console.log(newBookList); // [... arr ] + 'A Brief History of Time'

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
//console.log(newerBookList) // [... arr] - 'On The Electrodynamics of Moving Bodies'

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
// console.log(newestBookList)
/* [ 'The Hound of the Baskervilles',
'Philosophiæ Naturalis Principia Mathematica',
'Disquisitiones Arithmeticae',
'A Brief History of Time' ] */

console.log(bookList); // nuestra variable global sigue  intacta!
