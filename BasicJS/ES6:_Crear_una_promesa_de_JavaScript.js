/*
ES6: Crear una promesa de JavaScript
Una promesa en JavaScript es exactamente lo que parece: la usa para hacer una promesa de hacer algo, generalmente de forma asincrónica. Cuando la tarea se completa, o cumple su promesa o no lo hace. Promisees una función de constructor, por lo que debe usar la newpalabra clave para crear una. Toma una función, como argumento, con dos parámetros: resolvey reject. Estos son métodos que se utilizan para determinar el resultado de la promesa. La sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => {

});
Cree una nueva promesa llamada makeServerRequest. Pase una función con parámetros resolvey rejectal constructor.

*/
/*
const makeServerRequest = new Promise((resolve, reject) => {

});
*/

// EJEMPLO DE UNA PROMESA

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100);

    setTimeout(
        () => number > 5
            ? resolve(number)
            : reject(new Error('Menor a 5')),
        1000
    );
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));

// EXPLICAION DEL CODIGO ANTERIOR:
/*
Lo que acabamos de hacer es crear una nueva promesa que se va a completar luego de 1 segundo,
si el número aleatorio que generamos es mayor a 5 entonces se resuelve,
si es menor a 5 entonces es rechazada y obtenemos un error.

NOTA: Estados de las promesas
Esto nos lleva a hablar del estado de una promesa, básicamente existen 3 posibles estados.

Pendiente
Resuelta
Rechazada
Una promesa originalmente esta Pendiente. Cuando llamamos a resolve entonces la promesa pasa a estar Resuelta, si llamamos a reject pasa a estar Rechazada, usualmente cuando es rechazada obtenemos un error que nos va a indicar la razón del rechazo. Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then, si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch, de esta forma podemos controlar el flujo de datos.

También es posible pasar una segunda función a .then la cual se ejecutaría en caso de un error en vez de ejecutar el .catch

*/
