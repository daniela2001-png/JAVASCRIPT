/*
Expresiones regulares: coincidir con todos los que no sean números

El último desafío mostró cómo buscar dígitos usando el atajo \dcon minúsculas d.
También puede buscar no dígitos utilizando un atajo similar que usa mayúsculas en su Dlugar.
El atajo para buscar caracteres que no son dígitos es \D. Esto es igual a la clase de caracteres [^0-9]
que busca un solo carácter que no sea un número entre cero y nueve.

*/

// ejemplo: Utilice la clase de caracteres abreviados para los que no son dígitos \Dpara contar cuántos no dígitos hay en los títulos de películas.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result); // 17 caracteres con los que hará match el operador \D :3
