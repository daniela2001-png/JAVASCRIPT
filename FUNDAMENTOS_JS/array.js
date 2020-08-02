
var pepe = {
  altura: 1.90,
  nombre: 'pepe',
  cantidad_libros: 60
}

var daniela = {
  altura: 1.90,
  nombre: 'daniela',
  cantidad_libros: 40
}
 var pepito = {
   nombre: 'pepito',
   altura: 1.80,
   cantidad_libros: 20
}

var personas = [pepe, daniela, pepito]

//var filtro = lista.filter(function (persona){
//  return persona.altura < 1.90
//})
//const PasarAlturacms = persona => {
//   persona.altura *= 100 // aqui estamos modificando el array orginial sus alturas para no hacer esto desglosamos el objeto
//   return persona
//}
// como lo hare aqui:
const PasarAlturacms = persona => {
  return {... persona, // desglosamos el objeto
  altura : persona.altura * 100 // convertimos su altura a cms
}
}
var personacms = personas.map(PasarAlturacms) // aqui genremaos el nuevo array con las alturas en cms usando map
//console.log(personacms)
var counter = 0
for (var i = 0; i < personas.length; i++){
  counter = counter + personas[i].cantidad_libros
}
console.log('EN TOTAL HAY ' + counter + ' LIBROS')
