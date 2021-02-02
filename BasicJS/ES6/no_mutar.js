/*

ES6: Prevenir la mutación de objetos
Como se vio en el desafío anterior, la constdeclaración por sí sola no protege realmente sus datos de la mutación. Para asegurarse de que sus datos no cambien, JavaScript proporciona una función Object.freezepara evitar la mutación de datos.

Una vez que el objeto está congelado, ya no puede agregar, actualizar o eliminar propiedades de él. Cualquier intento de cambiar el objeto será rechazado sin error.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}

*/



function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
