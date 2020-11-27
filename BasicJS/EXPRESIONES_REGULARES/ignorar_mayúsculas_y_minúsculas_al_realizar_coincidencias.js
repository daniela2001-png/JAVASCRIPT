/*
Expresiones regulares: ignorar mayúsculas y minúsculas al realizar coincidencias
Hasta ahora, ha mirado las expresiones regulares para hacer coincidencias literales de cadenas. Pero, a veces, es posible que desee hacer coincidir también las diferencias entre casos.

El caso (oa veces el caso de la letra) es la diferencia entre letras mayúsculas y minúsculas. Ejemplos de mayúsculas son "A", "B", y "C". Ejemplos de minúsculas son "a", "b", y "c".

Puede hacer coincidir ambos casos usando lo que se llama una bandera. Hay otras banderas, pero aquí se enfocará en la bandera que ignora el caso: la ibandera. Puede usarlo agregándolo a la expresión regular. Un ejemplo del uso de esta bandera es /ignorecase/i. Esta expresión regular puede igualar las cuerdas "ignorecase", "igNoreCase"y "IgnoreCase".


Escriba una expresión regular fccRegexpara que coincida "freeCodeCamp", sin importar su caso. Su expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.

*/

// solucion
let myString = "frEECodeCAmp"; // con freeCODECAMP tambien hara match ya que la "i" ignoara si es mayuscula o minuscula desd e que sea el string literal :3
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);
