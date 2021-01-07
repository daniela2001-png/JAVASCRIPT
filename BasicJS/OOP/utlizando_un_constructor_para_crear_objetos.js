/*
Programación orientada a objetos: utilice un constructor para crear objetos
Aquí está el Birdconstructor del desafío anterior:
*/
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird(); //creamos el objeto blueBird
/*
Observe que el newoperador se usa al llamar a un constructor.
Esto le dice a JavaScript que cree una nueva instancia de Birdcalled blueBird.
Sin el newoperador, thisdentro del constructor no apuntaría al objeto recién creado
dando resultados inesperados. Ahora blueBirdtiene todas las propiedades definidas dentro del Bird constructor:
*/

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2

// Como cualquier otro objeto, se puede acceder y modificar sus propiedades:
blueBird.name = 'Elvira';
blueBird.name; // => Elvira

// Utilice el Dogconstructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable hound.
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
var hound = new Dog() // creamos un objeto llamado hound
console.log(hound.color) // color === "brown"
// si quiero cambiar el valor de algun property puedo hacerlo con la notacion de punto o brackets
hound["color"] = "pink"
console.log(hound.color) // color === "pink"