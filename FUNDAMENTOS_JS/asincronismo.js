// ASINCRONISMO EN JS INTRO
// En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones
// puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
// FUNCIONES COMO PARAMETRO EN JS
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre  // el this(keyword) referencia al objeto es como un self en python
    this.apellido = apellido
    this.altura = altura // el this(keyword) referencia al objeto es como un self en python

  }
  // aqui llamaremos los 2 metodos
  // le pasamos fn como funcion por parametro fn === responderSaludo
  saludar (fn){
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    if (fn){
      // nota-> fn toma 3 parametros nombre, apellido, isdev pero en esta clase is dev no existe asi que no la ponemos
      fn(this.nombre, this.apellido) // lo refrencio con this o sino no estara definido!y dara error!!
    }
  }
  Soyalto () {
    if ((this.altura) >= 1.8){
      console.log(`Hola soy ${this.nombre} y soy alto`)
    }
    else {
      console.log(`Hola soy ${this.nombre} y no soy alto`)

    }
  }

}
// aqui le decimos a Desarrollador que va a heredar de Persona con la keyword extends!
class Desarrollador extends Persona {
//NOTA: EL this SIMEPRE VA DESPUES DE super en herencia en js
  constructor(nombre, apellido, altura){
    super (nombre, apellido, altura)
      }
  saludar(fn){
    console.log(`Hola soy ${this.nombre} y soy desarrollador/a`)
    if (fn){
      // nota-> fn toma 3 parametros nombre, apellido, isdev pero en esta clase is dev SI existe asi que le ponemos TRUE
      fn(this.nombre, this.apellido, true)
    }
  }
}
function responderSaludo (nombre, apellido, isdev){
  console.log(`buen dia ${nombre} ${apellido}`);
  if (isdev){
    console.log(`ah mira vos ${nombre} ${apellido} sos desarrollador`);
  }

}
var dani = new Persona('dani', 'morales', 1.70)
dani.saludar(responderSaludo) // aqui pasamos la funcion como parametro que respondera el saludo de dani

var daniel = new Desarrollador('daniel', 'morales', 1.70)
daniel.saludar()
