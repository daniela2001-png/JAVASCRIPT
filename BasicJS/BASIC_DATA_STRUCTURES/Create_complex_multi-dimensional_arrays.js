/*

Estructuras de datos básicas: cree matrices multidimensionales complejas:

¡Increíble! ¡Acabas de aprender mucho sobre matrices!
Esta ha sido una descripción general de bastante alto nivel, y hay mucho más que aprender sobre cómo trabajar
con matrices, mucho de lo cual verá en secciones posteriores.
Pero antes de pasar a los objetos , echemos un vistazo más y veamos cómo las matrices pueden
volverse un poco más complejas de lo que hemos visto en desafíos anteriores.

Una de las características más poderosas cuando se piensa en matrices como estructuras de datos
es que las matrices pueden contener, o incluso estar completamente formadas por otras matrices.
Hemos visto matrices que contienen matrices en desafíos anteriores, pero bastante simples.
Sin embargo, las matrices pueden contener una profundidad infinita de matrices que pueden contener otras matrices,
cada una con sus propios niveles arbitrarios de profundidad, y así sucesivamente.
De esta manera, una matriz puede convertirse muy rápidamente en una estructura de datos muy compleja,
conocida como matriz multidimensional o anidada. Considere el siguiente ejemplo:

*/

let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
        ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
        [
            ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
        ],
        [
            [
                ['deepest-est?'] // an array nested 5 levels deep
            ]
        ]
    ]
];

/*
Si bien este ejemplo puede parecer complicado,
este nivel de complejidad no es desconocido, ni siquiera inusual,
cuando se trata de grandes cantidades de datos.
Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de una matriz
de este complejo con notación de corchetes:

*/

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

//Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still


/*
Hemos definido una variable, myNestedArrayigual a una matriz.
Modifique myNestedArray, utilizando cualquier combinación de cadenas,
números y valores booleanos para los elementos de datos,
de modo que tenga exactamente cinco niveles de profundidad(recuerde, la matriz más externa es el nivel 1).
En algún lugar del tercer nivel, incluya la cuerda 'deep', en el cuarto nivel,
incluya la cuerda 'deeper'y en el quinto nivel, incluya la cuerda 'deepest'.
*/

// solucion:
let myNestedArray = [ // 1 level
    // Only change code below this line
    [ // 2 level
        // 3 level
        ['deep', false, 1, 2, 3, 'complex', 'nested',
            // 4 level
            ['deeper',
                // 5 level
                ['deepest']
            ]
        ],
        // 3 level
        ['loop', 'shift', 6, 7, 1000, 'method'],
        ['concat', false, true, 'spread', 'array'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ]

];
// ejemplo quiero ver deeper seria con notacion de corchetes asi:
console.log(myNestedArray[2][0][2][1][0])