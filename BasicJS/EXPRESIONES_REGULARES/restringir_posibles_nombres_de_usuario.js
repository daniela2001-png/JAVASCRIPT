/*

Expresiones regulares: restringir posibles nombres de usuario

Los nombres de usuario se utilizan en todas partes de Internet.
Son los que dan a los usuarios una identidad única en sus sitios favoritos.

Debe verificar todos los nombres de usuario en una base de datos.
Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

1) Los nombres de usuario solo pueden utilizar caracteres alfanuméricos.

2) Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final.
El nombre de usuario no puede comenzar con el número.

3) Las letras del nombre de usuario pueden estar en minúsculas y mayúsculas.

4) Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo
puede utilizar letras del alfabeto como caracteres.

*/

// solucion:

let username = "A1"; // conm este srting no hara match porque Un nombre de usuario de dos caracteres solo puede utilizar letras del alfabeto como caracteres.
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = username.match(userCheck);
console.log(result);
