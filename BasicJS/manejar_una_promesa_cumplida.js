/*
ES6: Manejar una promesa cumplida con entonces
Las promesas son más útiles cuando tiene un proceso que lleva una cantidad de tiempo desconocida en su código (es decir, algo asincrónico), a menudo una solicitud del servidor. Cuando realiza una solicitud al servidor, lleva algo de tiempo y, una vez que se completa, generalmente desea hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el thenmétodo. El thenmétodo se ejecuta inmediatamente después de que se cumpla su promesa resolve. He aquí un ejemplo:

myPromise.then(result => {
  // do something with the result.
});
resultproviene del argumento dado al resolvemétodo.

Agregue el thenmétodo a su promesa. Úselo resultcomo parámetro de su función de devolución de llamada e inicie sesión resulten la consola.

*/

// solucion creamos una promesa que solo tendra un .then (en caso de exito)
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
    //console.log("HIII");
    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => { console.log(result) });
console.log(makeServerRequest) // impirmira "we got the data"