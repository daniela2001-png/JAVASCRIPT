/*

Estructuras de datos básicas: genere una matriz de todas las claves de objeto con Object.keys ()

También podemos generar una matriz que contiene todas las claves almacenadas en un objeto usando el Object.keys()
método y pasando un objeto como argumento.
Esto devolverá una matriz con cadenas que representan cada propiedad en el objeto.
Nuevamente, no habrá un orden específico para las entradas en la matriz.
*/

// Termine de escribir la getArrayOfUsersfunción para que devuelva una matriz que contenga todas las propiedades del objeto que recibe como argumento.
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
}

console.log(getArrayOfUsers(users));
