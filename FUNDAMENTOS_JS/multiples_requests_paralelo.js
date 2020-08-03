/*

INTRODUCCION DE MULTIPLES Promesas EN PARALELO NO EN SERIE!
Múltiples promesas en paralelo
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas
con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'

// AHORA HARE REQUEST PARA CUALQUIER ID DE CULAQUIER personaje
// agregamos el callback que es una funcion para que todo se ejeucte en orden

// modificamos eliminamos el callback y retirnamos la promesa

function obtener_perosnaje(id) {
  return new Promise((resolve, rejected)=> {
    const url = `${API_URL}${PEOPLE.replace(':id', id)}`
    // resolve se ejecuta si el get fue exitoso sino no!
    // el parametro DATA sera === PERSONAJE
    $.get(url, { crossDomain:true }, function (data){
      resolve(data)
    })
    // aqui pongo el fail por si la promise falla obteniendo el id!
    .fail(() => rejected(id))
})
}
// arreglo que contiene los ids de los personajes que quiero OBTENER!ç
var ids = [1, 2, 3, 4, 5, 6, 7]

// luego modficamos (ids) y la recorremos con map por cada id obtenemos 1 promesa llamndo a nuestra funcion obtener_perosnaje()
var promesas = ids.map(function (id){ // promesas es un array de pormesas con 7 promises
  return obtener_perosnaje(id)
})
// si se resulven las promesas, las obtenemos con una clase llamada .all() que toma un array de promesas
Promise
  .all(promesas)
  // obtenemos los personajes con .thne()
  .then(personajes => console.table(personajes))
  .catch(function (id){
    console.log(`NO SE PUDO OBTENER EL PERSONAJE CON ID : ${id}`)
  })

/*
RESUMEN DE LA CLASE:

Multiples Requests en Paralelo

Con promises podemos hacer los requests en paralelo sin alterar el orden de los objetos, lo que mejoraría mucho nuestro código y performance.

Generamos un array con los ids de los personajes que queremos obtener. Y a partir de este vamos a generar otro array con múltiples promesas, donde cada elemento sea una promesa, la promesa de obtener un personaje con su id.
Con el método map() vamos a recorrer el array ids y por cada elemento de este vamos a generar uno nuevo que va a ser una promesa.
Estas promesas las guardamos en una variable ‘promesas’. A partir de cada objeto del array ids (de cada id) obtenemos una nueva promesa con la función _obtenerPersonaje(id).
_

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})

Expresado en arrow function

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map( id => obtenerPersonaje(id) )

// (7) [Promise, Promise, Promise, Promise, Promise, Promise, Promise]

Cómo obtenemos los valores de estas promesas cuando se resuelvan?

Para esto podemos llamar a un método que tiene la clase de promesas llamado 'Promise.all()'
A este le pasamos el array ‘promesas’, le encadenamos el .then()que nos entrega los objetos y depués encadenamos el .catch() que se va a ejecutar si cualquiera de las promesas que tenemos en el array falla.

Promise
    .all(promesas)
    .then( personajes => console.log(personajes))
    .catch(onError)

// (7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
//Si lo desglosamos tenemos en orden las respuestas de cauda una de las promesas.


Las promesas tienen un gran potencial por sobre los callBakc.
El código queda mucho más prolijo y a demás podemos realizar promesas en paralelo.

Código completo:

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

functionobtenerPersonaje(id) {
    returnnew Promise((resolve, reject) => {
        consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

functiononError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

var ids = []
for (let i = 1; i <= 10; i++) {
    ids.push(i)
}
console.log(ids.length)
var promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
 */






//aqui llammamos  al uncion obtener_perosnaje sin parametros callbacks
// usaremos la funcion .then para tomnar el valor que la rpomise tomaraç
/*obtener_perosnaje(1)
  // then toma como parametro una funcion que se ejecuta1 si la rpomesa fue fullfilled! osea exitosa!
  // tomamos el valor que esperamos de una promise con .thne()
  .then(function (personaje1) {
    console.log(`EL PERSONAJE CON ID === 1 ES: ${personaje1.name}`);
    return obtener_perosnaje(2)
  })
  .then(function (personaje2) {
    console.log(`EL PERSONAJE CON ID === 2 ES: ${personaje2.name}`);
    return obtener_perosnaje(3)
  })
  .then(function (personaje3) {
    console.log(`EL PERSONAJE CON ID === 3 ES: ${personaje3.name}`);
  })
  // por si la prmise no es exitosa imprimos el error
  .catch(function (id){
    console.log(`NO SE PUDO OBTENER EL PERSONAJE CON ID : ${id}`)
  })
*/

// AQUI DANIELA OBERVARAS EL ASINCRONISMO EN SU MAXIMA EXPRESION!!! XD :3
// for (var i = 0; i < 50; i++){
// obtener_perosnaje(i)
// console.log(i.lenght)
// }
