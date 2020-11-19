/*
JavaScript básico: hacer cola
En Ciencias de la Computación, una cola es una estructura de datos abstracta donde los elementos se mantienen en orden. Se pueden agregar nuevos elementos al final de la cola y los elementos antiguos se quitan del principio de la cola.

Escribe una función nextInLineque tome una matriz ( arr) y un número ( item) como argumentos.

Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz.

La nextInLinefunción debería devolver el elemento que se eliminó.

*/

function nextInLine(arr, item) {
  // Only change code below this line
  // añado el item al final del arreglo
  arr.push(item);
  // elimino el item al principio osea el mas antigu de la cola 
  item = arr.shift();
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
