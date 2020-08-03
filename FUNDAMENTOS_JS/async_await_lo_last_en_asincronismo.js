/*

EN ESTA ULTIMA PARTE DE COMO OBTENER PERSONAJES USANDO ASINCRONIMSO CON ASYN-AWAIT
ES LO ULTIMO EN ASINCRONISMO :3

NOTA: Async-await es la manera más simple y clara de realizar tareas asíncronas.
Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función
y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
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


async function get_personaje(){
  // si se resulven las promesas, las obtenemos con una clase llamada .all() que toma un array de promesas
  // await es la parte asincrona de nuestra funcion tipo async await se ejecuta
  // si se obtuvieron bien todas las promesa sino hacemos un try catch!
  // arreglo que contiene los ids de los personajes que quiero OBTENER!ç
  var ids = [1, 2, 3, 4, 5, 6, 7]

  // luego modficamos (ids) y la recorremos con map por cada id obtenemos 1 promesa llamndo a nuestra funcion obtener_perosnaje()
  var promesas = ids.map(id => obtener_perosnaje(id)) // promesas es un array de pormesas con 7 promises
    try {
      var personajes = await Promise.all(promesas) //si hubo un fullfied promise todos los personaes se guardan en var 'personajes'
      console.log(personajes)
    } catch (id) {
      console.log(`NO SE PUDO OBTENER EL PERSONAJE CON ID : ${id}`)
    }

}

get_personaje() // llamamos a la funcion asincrona!
