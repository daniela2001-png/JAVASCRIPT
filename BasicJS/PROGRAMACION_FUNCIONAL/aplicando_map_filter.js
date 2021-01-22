/*
Programación funcional: utilice el mapa, el filtro o la reducción de funciones de orden superior para resolver un problema complejo
Ahora que ha trabajado a través de algunos de los retos que utilizan funciones de orden superior como map(), filter()y reduce(), ahora llegar a aplicarlos a resolver un problema más complejo.

Hemos definido una función llamada squareList. Debe completar el código de la squareListfunción usando cualquier combinación de map(), filter()y reduce()para que devuelva una nueva matriz que contenga solo el cuadrado de solo los enteros positivos (los números decimales no son enteros) cuando se le pase una matriz de números reales. Un ejemplo de una matriz que contiene solo números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Su función no debe utilizar cualquier tipo de foro whilebucles o la forEach()función.

*/

const squareList = arr => {
    // Only change code below this line
    const myArr = arr.filter(number => number > 0 && number % parseInt(number) === 0).map(number => number ** 2)
    return myArr

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);