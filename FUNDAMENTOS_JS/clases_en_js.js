// AQUI DARE EJEOLOS SOBRE CLASES EN JS

//NOTA IMPORTANTE: this dentro de una arro function es window osea es un objeto global
// osea se cumple la condicion window === this esto nos dara true
function Persona(nombre, apellido, altura) {
  this.nombre = nombre  // el this(keyword) referencia al objeto es como un self en python
  this.apellido = apellido
  this.altura = altura // el this(keyword) referencia al objeto es como un self en python
}
// new crea un nuevo objeto con el prototipo o 'constructor'
var daniela = new Persona('daniela', 'morales', 1.79) // new es una keyword de js que hace que el objeto daniela sea de tipo Persona() y no 'undefined'
var juan = new Persona('juan', 'romero', 1.80)
//creamos uan funcion saludar que tendra todos los objects que creemos a partir del protype de Persona
Persona.prototype.saludar = function(){
  console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
//daniela.saludar() // llamamos al metodo
Persona.prototype.Soyalto = function() {
  if ((this.altura) >= 1.8){
    console.log(`Hola soy ${this.nombre} y soy alto`)
  }
  else {
    console.log(`Hola soy ${this.nombre} y no soy alto`)

  }
}
juan.Soyalto()
daniela.Soyalto()
