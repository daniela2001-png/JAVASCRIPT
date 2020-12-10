/*
Estructuras de datos básicas: elimine elementos de una matriz con pop () y shift ()

Ambos push() y unshift() tienen métodos correspondientes que son casi opuestos funcionales: pop()y shift().
Como ya habrá adivinado, en lugar de agregar, pop() elimina un elemento del final de una matriz,
mientras que shift() elimina un elemento del principio.
La diferencia clave entre pop() y shift() y sus primos push() y unshift(), es que ninguno
de los métodos toma parámetros, y cada uno solo permite que una matriz sea modificada por un solo elemento a la vez.

*/

// vamos a ver:
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

// También podemos devolver el valor del elemento eliminado con cualquier método como este:
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
