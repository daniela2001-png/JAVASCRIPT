// EN ESTA PARTE APRENDER COMO ORDENAR EL ORDEN EN QUE SE EJCUTAN LAS FUNCIONES ASINCRONAS EN JS!

const API_URL = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'

// asi es como se hace un request con jQuery
// el 1er param es la URL
// le damos valor  o do it replace a la id===1 con replace
// le pasamos el objeto luke que es nuestro personaje con id === 1 a nuestra function

//NOTA LA FUNCION SE REALIZA SOLO SI EL REQUESTS FUE EXITOSO Y LUEGO LA HACE EL $.GET
//$.get(`${API_URL}${PEOPLE.replace(':id', 1)}`, { crossDomain: true}, function (personaje){
//  console.log(`HOLA YO SOY: ${personaje.name}`) // arguments trae toda lainfo del get que hago en jQuery
  // argumnets trae el objeto del request la data y si fue success o noo
//}) // le damos valor  o do it replace a la id===1 con replace

// AHORA HARE REQUEST PARA CUALQUIER ID DE CULAQUIER personaje
// agregamos el callback que es una funcion para que todo se ejeucte en orden
function obtener_perosnaje(id, callback){
  const url = `${API_URL}${PEOPLE.replace(':id', id)}`
  $.get(url, { crossDomain:true }, function (personaje){
    console.log(`HOLA YO SOY: ${personaje.name}`)
    if (callback) // llamammos al callback para que que ejecuten los callbacks de abajo!!!
      callback()
  })
}
// AQUI DANIELA OBERVARAS EL ASINCRONISMO EN SU MAXIMA EXPRESION!!! XD :3
//for (var i = 0; i < 50; i++){
//  obtener_perosnaje(i)
  //console.log(i.lenght)
//}

// aqui llamamos a la funcion obtenr personaje  con el callback como funcion por parametro;
obtener_perosnaje(1, function () {
  obtener_perosnaje(2, function () {
    obtener_perosnaje(3)

  })
})
