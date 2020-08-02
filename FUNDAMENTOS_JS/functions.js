// aqui practicare funciones en js !las keys pueden ser numeros strs
var yo = {
nombre: 'Daniela',
apellido: 'Morales',
edad: 16
}

function mayor_edad(persona){
  console.log(`${persona.nombre} es`)
  if (persona.edad >= 18)
    console.log('mayor de edad');
  else
    console.log('menor de edad');
}


mayor_edad(yo)
