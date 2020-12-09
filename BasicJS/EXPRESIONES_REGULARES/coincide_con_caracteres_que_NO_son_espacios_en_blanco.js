/*
Expresiones regulares: coincide con caracteres que no son espacios en blanco
Aprendió a buscar espacios en blanco \scon minúsculas s. También puede buscar todo excepto los espacios en blanco.

Busque el uso de espacios que no sean en blanco \S, que son mayúsculas s.
Este patrón no coincidirá con los caracteres de espacio en blanco, retorno de carro, tabulación,
avance de página y nueva línea. Puedes pensar que es similar a la clase de personaje [^ \r\t\f\n\v].

*/

// ejemplo:
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // \s != \S
let result = sample.match(countNonWhiteSpace);
console.log(result.length) // print 38
