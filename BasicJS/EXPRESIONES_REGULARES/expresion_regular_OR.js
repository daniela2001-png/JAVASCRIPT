/*
Expresiones regulares: haga coincidir una cadena literal con diferentes posibilidades
Usando expresiones regulares como /coding/, puede buscar el patrón "coding"en otra cadena.

Esto es poderoso para buscar cadenas individuales, pero está limitado a un solo patrón. Puede buscar varios patrones de uso de la alternationo ORdel operador: |.

Este operador hace coincidir los patrones antes o después. Por ejemplo, si desea hacer coincidir "yes"o "no", la expresión regular que desea es /yes|no/.

También puede buscar más de dos patrones. Puede hacer esto agregando más patrones con más ORoperadores separándolos, como /yes|no|maybe/.

Completar la expresión regular petRegexpara que coincida con los animales domésticos "dog", "cat", "bird", o "fish".

*/

//ejemplo retornrabtrue ya que hara match con "cat" racias al operador | (or)

let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result); // true