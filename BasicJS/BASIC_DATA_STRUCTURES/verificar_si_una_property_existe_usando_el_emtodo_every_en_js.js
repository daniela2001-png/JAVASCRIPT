/*
Estructuras de datos básicas: compruebe si un objeto tiene una propiedad

Ahora podemos agregar, modificar y eliminar claves de objetos.
Pero, ¿y si solo quisiéramos saber si un objeto tiene una propiedad específica?
JavaScript nos proporciona dos formas diferentes de hacer esto.
Uno usa el hasOwnProperty() método y el otro usa la in palabra clave.
çSi tenemos un objeto userscon una propiedad de Alan,
podríamos verificar su presencia de cualquiera de las siguientes formas:
*/
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};


users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

/*
Hemos creado un objeto, users con algunos usuarios en él y una función isEveryoneHere,
a la que pasamos el users objeto como argumento.
Terminar de escribir esta función para que devuelva true sólo si el users objeto contiene los cuatro nombres,
Alan, Jeff, Sarah, y Ryan, como claves, y falsede otra manera.
*/

function isEveryoneHere(obj) {
    /*
    Utiliza una matriz con todos los nombres que deberían estar presentes en el objeto.
    El método every se utiliza para validar todos los nombres utilizados junto con el resultado
    del método hasOwnProperty en un valor de verdadero que se devuelve durante cada iteración.
    Si no se encuentra al menos un nombre utilizando el método hasOwnProperty, el método every devuelve falso.
    */
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        obj.hasOwnProperty(name)
    );
    // Only change code above this line
}

console.log(isEveryoneHere(users)); // true
