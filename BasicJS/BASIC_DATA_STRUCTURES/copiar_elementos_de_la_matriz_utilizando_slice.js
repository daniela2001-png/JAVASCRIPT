/*

Estructuras de datos básicas: copiar elementos de la matriz utilizando slice ()

El siguiente método que cubriremos es slice().
En lugar de modificar una matriz, slice() copia o extrae un número determinado de elementos
en una nueva matriz, dejando intacta la matriz a la que se llama.
slice() toma solo 2 parámetros: el primero es el índice en el que comenzar la extracción
y el segundo es el índice en el que detener la extracción
(la extracción ocurrirá hasta, pero sin incluir el elemento en este índice).

*/

// considere lo siguiente:
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

//De hecho, hemos creado una nueva matriz extrayendo elementos de una matriz existente.
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']


// Hemos definido una función, forecastque toma una matriz como argumento. Modifique la función usando slice()para extraer información de la matriz de argumentos y devolver una nueva matriz que contiene los elementos 'warm'y 'sunny'.
function forecast(arr) {
    // Only change code below this line
    let hi = arr.slice(2, 4);
    return hi;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

