/*
Expresiones regulares: elimine los espacios en blanco del inicio y el final

A veces, los caracteres de espacio en blanco alrededor de las cadenas no se desean, pero están ahí.
El procesamiento típico de cadenas es eliminar los espacios en blanco al principio y al final.

Escriba una expresión regular y utilice los métodos de cadena adecuados para eliminar los espacios
en blanco al principio y al final de las cadenas.

Nota: El String.prototype.trim()método funcionaría aquí, pero deberá completar este desafío
usando expresiones regulares.

*/

// ejemplo: el resultado debe ser igual a "Hello World!" osea sin espacios al principio ni al final
let hello = "   Hello, World!  ";
let wsRegex = /(^\s+|\s+$)/ // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result); // print Hello, World!
