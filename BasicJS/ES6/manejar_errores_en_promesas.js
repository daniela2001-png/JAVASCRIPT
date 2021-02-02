/*
ES6: Manejar una promesa rechazada con capturas
catches el método utilizado cuando su promesa ha sido rechazada. Se ejecuta inmediatamente después de rejectllamar al método de una promesa . Esta es la sintaxis:

myPromise.catch(error => {
  // do something with the error.
});
errores el argumento que se pasa al rejectmétodo.

Agregue el catchmétodo a su promesa. Úselo errorcomo parámetro de su función de devolución de llamada e inicie sesión erroren la consola.

*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
// aqui imprimira el error cuando se ejecute el reject()
makeServerRequest.catch(error => {
    console.log(error); // impirmira "Data not received"!
});