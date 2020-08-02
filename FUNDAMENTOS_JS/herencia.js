// AQUI VERE EL TEMA EN JS DE HERENCIA

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre  // el this(keyword) referencia al objeto es como un self en python
    this.apellido = apellido
    this.altura = altura // el this(keyword) referencia al objeto es como un self en python

  }
  // aqui llamaremos los 2 metodos
  saludar (){
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)

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
  saludar(){
    console.log(`Hola soy ${this.nombre} y soy desarrollador/a`)
  }
}
// new crea un nuevo objeto con el prototipo o 'constructor'
//var daniela = new Persona('daniela', 'morales', 1.79) // new es una keyword de js que hace que el objeto daniela sea de tipo Persona() y no 'undefined'
//var juan = new Persona('juan', 'romero', 1.80)
