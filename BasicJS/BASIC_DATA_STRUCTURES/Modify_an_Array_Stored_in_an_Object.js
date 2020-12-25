/*

Estructuras de datos básicas: modificar una matriz almacenada en un objeto

Ahora ha visto todas las operaciones básicas para objetos JavaScript.
Puede agregar, modificar y eliminar pares clave-valor, verificar si existen claves e iterar
sobre todas las claves en un objeto. A medida que continúe aprendiendo JavaScript,
verá aplicaciones de objetos aún más versátiles.
Además, las lecciones de Estructuras de datos ubicadas en la sección Preparación para entrevistas
de codificación del plan de estudios también cubren los objetos Mapa y Conjunto de ES6,
los cuales son similares a los objetos ordinarios pero proporcionan algunas características adicionales.
Ahora que ha aprendido los conceptos básicos de matrices y objetos,
¡está completamente preparado para comenzar a abordar problemas más complejos utilizando JavaScript!

Eche un vistazo al objeto que le proporcionamos en el editor de código.
El userobjeto contiene tres claves. La dataclave contiene cinco claves,
una de las cuales contiene una matriz de friends.
A partir de esto, puede ver cuán flexibles son los objetos como estructuras de datos.
Empezamos a escribir una función addFriend. Termine de escribirlo para que tome un userobjeto
y agregue el nombre del friendargumento a la matriz almacenada user.data.friendsy devuelva esa matriz.

*/


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj["data"]["friends"].push(friend)
    return userObj["data"]["friends"]
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));