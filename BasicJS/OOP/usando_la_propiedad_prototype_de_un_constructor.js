/*
Programación orientada a objetos: use propiedades de prototipo para reducir el código duplicado

Dado numLegs que probablemente tendrá el mismo valor para todas las instancias de Bird,
esencialmente tiene una variable duplicada numLegsdentro de cada Bird instancia.

Esto puede no ser un problema cuando solo hay dos instancias, pero imagínese si hay millones de instancias.
Serían muchas variables duplicadas.

Una mejor forma es utilizar Bird’s prototype.
Las propiedades en prototypese comparten entre TODAS las instancias de Bird.
A continuación se explica cómo agregar numLegsa Bird prototype:
*/

let Bird = function bird(name) {
    this.name = name;
}
// hasta el momento nuestro Bird constructor solo tiene una prop pero que pasa si creamos muchas instancias de este y estar cada nada duplicando una propiedad obvia el 99% de las veces y es de que un pajaro tengo 2 patas!
// entonces podemos usar la property del prototipo o del constructor Bird para poder delegar esat propiedad obvia para cada instancia que creamos con este constructor y asi ahorrar codigo repetitivo
// para hacer eso sería usando la siguinet sintaxis : name_constructor.prototype.new_prop = value y wala en nuestro caso quedaria:
Bird.prototype.numLegs = 2;
// nota: Bird va a seguir teniendo solamente 1 prop y es name
let newBird = new Bird("lola") // newBird es un tipo object 
// verifiquemos si despues añadir el prototype sigue teniendo como propiedad solo name ...
let my_props = [];
for (let prop in newBird) {
    if (newBird.hasOwnProperty(prop)) {
        my_props.push(prop)
    }
}
console.log(Bird.prototype.numLegs) // 2 ya que es protoype quien guarda esta prop de numlegs que deifnimos como === 2
console.log(my_props); // ["name"]
console.log(newBird.numLegs) // 2 ... parece que nuestro objeto newBird solo tiene una property pero cuando accedemos a numLegs nos bota 2 gracias prototype!
/*
Dado que todas las instancias tienen automáticamente las propiedades en prototype,
piense en a prototypecomo una "receta" para crear objetos.
Tenga en cuenta que prototype para ducky canary es parte del Bird constructor como Bird.prototype.
Casi todos los objetos en JavaScript tienen una prototype propiedad que es parte de la función constructora
que los creó.
*/

// Agregar una numLegs propiedad a la prototype de Dog

let Dog = function perrito(name) {
    this.name = name;
}
let myDog = new Dog("luna")
// agregamos la prop  numlegs general para todas la instancias proximas que creemos con Dog.prototype
Dog.prototype.numLegs = 4;
// ahora magicamnet nuestra instancia myDog tendra esta prop asi su contructor no la tenga declarada explicitamente
console.log(myDog.numLegs) // 4
// eso es todo :3