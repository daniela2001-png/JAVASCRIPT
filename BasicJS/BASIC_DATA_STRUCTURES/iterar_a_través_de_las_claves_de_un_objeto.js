/*
Estructuras de datos básicas: iterar a través de las claves de un objeto con una instrucción for ...

A veces, es posible que deba recorrer todas las claves dentro de un objeto.
Esto requiere una sintaxis específica en JavaScript llamada for ... in statement.
Para nuestro usersobjeto, esto podría verse así:
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

for (let user in users) {
    console.log(user); // me trae las keys del objeto
}
/*
En esta declaración, definimos una variable usery, como puede ver
esta variable se restableció durante cada iteración a cada una de las claves del objeto
a medida que la declaración recorría el objeto, lo que resultó en que el nombre de cada usuario
se imprimiera en la consola. NOTA: Los objetos no mantienen un orden en las claves almacenadas
como lo hacen las matrices; por lo tanto, la posición de una clave en un objeto, o el orden relativo 
en el que aparece, es irrelevante cuando se hace referencia a esa clave o se accede a ella.
*/


// crearemos uan fucnion que devuelve el numero de propeidades que cumplen con la condicion de tiene una propiedad === online como true
let usersObj = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}
console.log(countOnline(usersObj)); // print 1

