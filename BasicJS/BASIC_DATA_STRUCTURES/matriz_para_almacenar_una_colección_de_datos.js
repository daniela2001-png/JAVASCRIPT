/*
Estructuras de datos básicas: use una matriz para almacenar una colección de datos

El siguiente es un ejemplo de la implementación más simple de una estructura de datos de matriz.
Esto se conoce como matriz unidimensional , lo que significa que solo tiene un nivel
o que no tiene otras matrices anidadas dentro de ella.
Observe que contiene valores booleanos , cadenas y números , entre otros tipos de datos JavaScript válidos:

*/
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7

/* 
Todas las matrices tienen una propiedad de longitud, que, como se muestra arriba,
se puede acceder muy fácilmente con la sintaxis Array.length.
A continuación se puede ver una implementación más compleja de una matriz.
Esto se conoce como matriz multidimensional o matriz que contiene otras matrices.
Tenga en cuenta que esta matriz también contiene objetos JavaScript
que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesita saber
es que las matrices también son capaces de almacenar objetos complejos.
*/

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

/*
EJERCICIO:

Hemos definido una variable llamada yourArray.
Complete el enunciado asignando una matriz de al menos 5 elementos de longitud a la yourArrayvariable.
Su matriz debe contener al menos una cadena , un número y un booleano .

*/

let yourArray = [true, NaN, 1, 'hola', null]; // Change this line
