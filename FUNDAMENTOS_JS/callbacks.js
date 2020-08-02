// AQUI USAREMOS JQUERY PARA PODER HACER REQUESTS A UNA API LLAMADA SWAPI.aliU8dGd2tb6OSsuzixeV4y
const API_URL = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'

// asi es como se hace un request con jQuery
// el 1er param es la URL
// le damos valor  o do it replace a la id===1 con replace
// le pasamos el objeto luke que es nuestro personaje con id === 1 a nuestra function

//NOTA LA FUNCION SE REALIZA SOLO SI EL REQUESTS FUE EXITOSO Y LUEGO LA HACE EL $.GET
$.get(`${API_URL}${PEOPLE.replace(':id', 1)}`, { crossDomain: true}, function (personaje){
  console.log(`HOLA YO SOY: ${personaje.name}`) // arguments trae toda lainfo del get que hago en jQuery
  // argumnets trae el objeto del request la data y si fue success o noo
}) // le damos valor  o do it replace a la id===1 con replace

// AHORA HARE REQUEST PARA CUALQUIER ID DE CULAQUIER personaje
function obtener_perosnaje(id){
  const url = `${API_URL}${PEOPLE.replace(':id', id)}`
  $.get(url, { crossDomain:true }, function (personaje){
    console.log(`HOLA YO SOY: ${personaje.name}`)
  })
}
// AQUI DANIELA OBERVARAS EL ASINCRONISMO EN SU MAXIMA EXPRESION!!! XD :3
for (var i = 0; i < 50; i++){
  obtener_perosnaje(i)
  //console.log(i.lenght)
}
  //obtener_perosnaje(3)
  //obtener_perosnaje(2)
  //obtener_perosnaje(1)
