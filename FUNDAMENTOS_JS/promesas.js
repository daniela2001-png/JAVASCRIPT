/*

En esta clase veremos las promesas, que son valores que aun no conocemos.
 Las promesas tienen tres estados:

1) pending
2) fullfilled
3) rejected

Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
})

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
//aqui llammamos  al funcion obtener_perosnaje sin parametros callbacks
// usaremos la funcion .then para tomnar el valor que la rpomise tomaraç
obtener_perosnaje(1)
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

// AQUI DANIELA OBERVARAS EL ASINCRONISMO EN SU MAXIMA EXPRESION!!! XD :3
// for (var i = 0; i < 50; i++){
// obtener_perosnaje(i)
// console.log(i.lenght)
// }
