/*

ES6: escribir funciones de flecha con parámetros
Al igual que una función normal, puede pasar argumentos a una función de flecha.

// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8
Si una función de flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden omitirse.

// the same function, without the parameter parentheses
const doubler = item => item * 2;
Es posible pasar más de un argumento a una función de flecha.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8

*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
