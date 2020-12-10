/*

Estructuras de datos básicas: combinar matrices con el operador Spread

Otra gran ventaja del operador de propagación es la capacidad de combinar matrices,
o de insertar todos los elementos de una matriz en otra, en cualquier índice.
Con sintaxis más tradicionales, podemos concatenar matrices,
pero esto solo nos permite combinar matrices al final de una y al comienzo de otra.
La sintaxis de propagación hace que la siguiente operación sea extremadamente simple

*/

// por ejemplo: Usando la sintaxis de propagación, acabamos de lograr una operación que habría sido más compleja y más detallada si hubiéramos usado métodos tradicionales.

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

/*
EJERCICIO:

Hemos definido una función spreadOutque devuelve la variable sentence.
Modifique la función usando el operador de propagación para que devuelva
la matriz ['learning', 'to', 'code', 'is', 'fun'].

*/

// solucion:
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut()); // print [ 'learning', 'to', 'code', 'is', 'fun' ]
