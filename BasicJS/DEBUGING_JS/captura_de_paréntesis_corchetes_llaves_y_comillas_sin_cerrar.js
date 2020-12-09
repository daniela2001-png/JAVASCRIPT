/*

Depuración: captura de paréntesis, corchetes, llaves y comillas sin cerrar

Otro error de sintaxis a tener en cuenta es que todos
los paréntesis de apertura, corchetes, llaves y comillas tienen un par de cierre.
El olvido de una pieza tiende a suceder 
cuando está editando código existente e insertando elementos con uno de los tipos de pares.
Además, tenga cuidado al anidar bloques de código en otros,
como agregar una función de devolución de llamada como argumento a un método.

Una forma de evitar este error es tan pronto como se escriba el carácter de apertura,
incluir inmediatamente la coincidencia de cierre, luego mover el cursor hacia atrás entre ellos
y continuar codificando. Afortunadamente, la mayoría de los editores de código modernos generan
la segunda mitad del par automáticamente.

*/

// Corrija los errores de dos pares en el código.
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
