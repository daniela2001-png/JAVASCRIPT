/*
ES6: Usar el parámetro Rest con parámetros de función
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros de función. Con el parámetro rest, puede crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder más tarde desde dentro de la función.

Mira este código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
El parámetro rest elimina la necesidad de verificar la argsmatriz y nos permite aplicar map(), filter()y reduce()en la matriz de parámetros.

*/

const sum = (...args) => {
    //const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(2,2,2,2));
