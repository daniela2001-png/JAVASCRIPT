/*

ES6: Utilice el operador de propagación para evaluar matrices in situ
ES6 introduce el operador de propagación , que nos permite expandir matrices y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 se utiliza apply()para calcular el valor máximo en una matriz:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
Tuvimos que usar Math.max.apply(null, arr)porque Math.max(arr)devuelve NaN. Math.max()espera argumentos separados por comas, pero no una matriz. El operador de propagación hace que esta sintaxis sea mucho mejor de leer y mantener.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
...arrdevuelve una matriz desempaquetada. En otras palabras, extiende la matriz. Sin embargo, el operador de propagación solo funciona en el lugar, como en un argumento para una función o en un literal de matriz. El siguiente código no funcionará:

const spreaded = ...arr; // will throw a syntax error
Copie todo el contenido de arr1en otra matriz arr2utilizando el operador de extensión.

*/

// solucion
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

