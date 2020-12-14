/*
Estructuras de datos básicas: iterar a través de todos los elementos de una matriz utilizando bucles For

A veces, cuando se trabaja con matrices, es muy útil poder iterar a través de cada elemento para encontrar
uno o más elementos que podamos necesitar, o manipular una matriz en función de qué elementos de datos
cumplen un determinado conjunto de criterios.
Ofertas de JavaScript varios construido en los métodos que cada iterar sobre matrices
de formas ligeramente diferentes para lograr resultados diferentes 
(como por ejemplo every(), forEach(), map(), etc.),
sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple for bucle.

*/

// ejemplo:
/*

Usando un for ciclo, esta función recorre y accede a cada elemento de la matriz,
y lo somete a una prueba simple que hemos creado.
De esta manera, hemos determinado de manera fácil y programática qué elementos de datos
son mayores que 10y hemos devuelto una nueva matriz que contiene esos elementos.

*/

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]


/*
Hemos definido una función, filteredArray
que toma arruna matriz anidada y elemcomo argumentos y devuelve una nueva matriz.
elem representa un elemento que puede estar presente o no en una o más de las matrices anidadas dentro arr.
Modifique la función, utilizando un for bucle, para devolver una versión filtrada de la matriz
pasada de modo que se haya eliminado cualquier matriz anidada dentro de la que arr contiene elem.
*/

// solucion:
function filteredArray(arr, elem) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(filteredArray([[3, 1, 1], [2, 3, 3], [4, 1, 5]], 5)) // return [[3, 1, 1], [2, 3, 3]] 