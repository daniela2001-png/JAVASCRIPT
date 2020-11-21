/*

La recursividad es el concepto de que una función se puede expresar en términos de sí misma. Para ayudar a comprender esto, comience por pensar en la siguiente tarea: multiplique los primeros nelementos de una matriz para crear el producto de esos elementos. Usando un forbucle, puede hacer esto:

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
Sin embargo, observe eso multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Eso significa que puede reescribir multiplyen términos de sí mismo y nunca necesita usar un bucle.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
La versión recursiva de multiplyse descompone así. En el caso base , donde n <= 0, devuelve 1. Para valores mayores de n, se llama a sí mismo, pero con n - 1. Esa llamada a la función se evalúa de la misma forma, multiplyvolviendo a llamar hasta n <= 0. En este punto, todas las funciones pueden regresar y el original multiplydevuelve la respuesta.

Nota: Las funciones recursivas deben tener un caso base cuando regresan sin llamar a la función nuevamente (en este ejemplo, cuando n <= 0), de lo contrario, nunca podrán terminar de ejecutarse.

*/

function sum(arr, n) {
  // Only change code below this line
  if (n === 0) {
    return 0
  }
  return sum(arr, n -1) + arr[n-1];
  // Only change code above this line
}
