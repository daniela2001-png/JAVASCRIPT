// EN ESTA CLASE MANEJARE EN CASO DE QUE SE GENEREN ERROES EN MIS callbacks
// Para solucionar el problema de quedarnos sin conexión, u otro error similar
// en medio de una sucesión de callbacks utilizamos el método fail().

const API_URL = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'

// AHORA HARE REQUEST PARA CUALQUIER ID DE CULAQUIER personaje
// agregamos el callback que es una funcion para que todo se ejeucte en orden
function obtener_perosnaje(id, callback) {
  const url = `${API_URL}${PEOPLE.replace(':id', id)}`
  $.get(url, { crossDomain:true }, callback).fail(function(){
    console.log(`SE GENERO UN ERROR OBTENIENDO EL PERSONAJE CON ID : ${id}`)
  })
}
// AQUI DANIELA OBERVARAS EL ASINCRONISMO EN SU MAXIMA EXPRESION!!! XD :3
//for (var i = 0; i < 50; i++){
//  obtener_perosnaje(i)
  //console.log(i.lenght)
//}
// aqui llamamos a la funcion obtenr personaje  con el callback como funcion por parametro;
// function === callback
// todo esto se eejcuta en el orden que yo le puse estoy ordenando el ASINCRONISMO!
obtener_perosnaje(1, function (personaje) {
  console.log(`HOLA SOY: ${personaje.name}`)

  obtener_perosnaje(2, function (personaje) {
    console.log(`HOLA SOY: ${personaje.name}`)

    obtener_perosnaje(3, function (personaje) {
      console.log(`HOLA SOY: ${personaje.name}`)
    })
  })
})

/*
NOTA IMPORTANTE DE LA CLASE DE MANEJO DE ERRORES CON CALLBACKS: Resumen de la clase
Manejo de Errores con callBacks

Cómo solucionar o prever el que el programa se quede sin conexión u algo parecido?
Primero modificamos la función del $.get y borramos el if:

//$.get(url, opts, function(person){
//   console.log(person.name)
//})
//if(callback) {
//    callback()
//}

Queda así:

$.get(url, opts, callback)

El callback llama a la función declarada por parámetro en la invocación de obtenerPersonaje().
La invocación (1 de ellas) queda así:

obtenerPersonaje(1, function(person){
    console.log(person.name)
})

A demás del método get() podemos encadenar otro llamado al método fail() que va a recibir un callback y se va a disparar si hay algún error.


$.get(url, opts, callback).fail(() => { console.log(`EROR! La conexiónse ha interrumpido y no podemos mostrarte el resto de los personajes.`) })

Probamos en consola, pestaña ‘Network’ deshabilitamos la cache y después de recargar nos pusimos en modo offline y se reprodujo el error para disparar el fail().

El código completo queda así:


const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

functionobtenerPersonaje(id, callback) {
    consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(url, opts, callback)
        .fail(() => { console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje ${id}.`)})
}

obtenerPersonaje(1, function(character) {
    console.log(character.name)

    obtenerPersonaje(2, function(character) {
        console.log(character.name)

        obtenerPersonaje(3, function(character) {
            console.log(character.name)

            obtenerPersonaje(4, function(character){
                console.log(character.name)

                obtenerPersonaje(5, function(character){
                    console.log(character.name)

                    obtenerPersonaje(6, function(character){
                        console.log(character.name)

                        obtenerPersonaje(7, function(character){
                            console.log(character.name)
                        } )
                    } )
                } )
            } )
        })
    })
})
*/
