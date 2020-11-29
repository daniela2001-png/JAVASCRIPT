/*

Expresiones regulares: coincide con los caracteres que aparecen una o más veces

A veces, es necesario hacer coincidir un personaje (o grupo de personajes) que aparece una o más veces seguidas.
Esto significa que ocurre al menos una vez y puede repetirse.

Puede utilizar el +carácter para comprobar si ese es el caso.
Recuerde, el personaje o patrón debe estar presente de forma consecutiva.
Es decir, el personaje tiene que repetir uno tras otro.

Por ejemplo:

/a+/g >>> buscaría una coincidencia "abc"y regresaría ["a"]. Debido a +eso, también encontraría una única coincidencia "aabc"y regresaría ["aa"].

Si, en cambio, estuviera verificando la cadena "abab", encontraría dos coincidencias y regresaría ["a", "a"]
porque los acaracteres no están en una fila, hay un bentre ellos.
Finalmente, dado que no hay ningún "a" en la cadena "bcd", no encontraría una coincidencia.

*/

// Desea encontrar coincidencias cuando la letra saparece una o más veces en "Mississippi".

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result); // ["ss", "ss"]