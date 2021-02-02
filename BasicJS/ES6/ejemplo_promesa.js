/*
ES6: Completar una promesa con determinación y rechazo
Una promesa tiene tres estados: pending, fulfilled, y rejected. La promesa que creaste en el último desafío está estancada para siempre en el pendingestado porque no agregaste una forma de completar la promesa. Los parámetros resolvey rejectdados al argumento de promesa se utilizan para hacer esto. resolvese usa cuando desea que su promesa tenga éxito y rejectse usa cuando desea que fracase. Estos son métodos que toman un argumento, como se ve a continuación.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
El ejemplo anterior usa cadenas para el argumento de estas funciones, pero realmente puede ser cualquier cosa. A menudo, podría ser un objeto del que utilizaría datos para colocar en su sitio web o en otro lugar.

Haga que la promesa maneje el éxito y el fracaso. Si responseFromServeres así true, llame al resolvemétodo para completar con éxito la promesa. Pase resolveuna cadena con el valor We got the data. Si responseFromServeres false, utilizar el rejectmétodo en su lugar y pasarlo la cadena: Data not received.

*/

const makeServerRequest = new Promise((data_recibida, data_no_recibida) => {
    if (true) {
        data_recibida("la data llego con exito")
    } else {
        data_no_recibida("data no recibida por lok");
    }
});
console.log(makeServerRequest.data_recibida); // imprimira 