/*

Secuencias de comandos de algoritmo intermedio: ¿Por qué estás

Crea una función que mira a través de una matriz de objetos (primer argumento)
y devuelve una matriz de todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento).
Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección
si se va a incluir en la matriz devuelta.

Por ejemplo, si el primer argumento es
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
y el segundo argumento es { last: "Capulet" }, 
entonces debe devolver el tercer objeto de la matriz (el primer argumento),
porque contiene el nombre y su valor, que se pasó como segundo argumento.

*/

/*
PRUEBAS:

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })debería volver [{ first: "Tybalt", last: "Capulet" }].

Aprobado
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })debería volver [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

Aprobado
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })debería volver [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

Aprobado
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })debería volver [{ "apple": 1, "bat": 2, "cookie": 2 }].

Aprobado
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })debería volver [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

Aprobado
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) debería volver []

*/

function whatIsInAName(collection, source) {
    var arr = [];
    // obtengo las llaves del source parametro
    var sourceKeys = Object.keys(source);
    arr = collection.filter(obj => {
        for (var i = 0; i < sourceKeys.length; i++) {
            // negamos hasta que no entremos a este if y entre el return true y luego retornamos el array que cumple las dos condiciones que son que tenga esas llaves y esos valores y wala por fin entendí esto!
            // obj[sourceKeys[i]] en este caso seria igual a  === MOntage , null, Capulet por otra parte source[sourceKeys[i]] sera igual a === Capulet en cada iteracion 
            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true
    })
    return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // print [{ first: "Tybalt", last: "Capulet" }] 
