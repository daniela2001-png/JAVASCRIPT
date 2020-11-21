/*
JavaScript básico: utilizar varios operadores condicionales (ternarios)
En el desafío anterior, usó un solo operador condicional. También puede encadenarlos para comprobar si hay varias condiciones.

La siguiente función usa declaraciones if, else if y else para verificar múltiples condiciones:

*/

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}


// o lo mismo pero con ternarios

function findGreaterOrEqual(a, b) {

    return (a === b) ? "a y b iguales": (a > b) ? "a es mayor": "b es mayor";

}
