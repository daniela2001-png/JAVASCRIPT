/*

Programación funcional: combine una matriz en una cadena utilizando el método de unión

El join método se utiliza para unir los elementos de una matriz para crear una cadena. Toma un argumento para el delimitador que se usa para separar los elementos de la matriz en la cadena.

*/

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

/*
Utilice el joinmétodo (entre otros) dentro de la sentensifyfunción para hacer una oración a partir de las palabras de la cadena str. La función debería devolver una cadena. Por ejemplo, "Me gusta Star-Wars" se convertiría en "Me gusta Star Wars". Para este desafío, no use el replacemétodo.

*/

function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ")
    // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));