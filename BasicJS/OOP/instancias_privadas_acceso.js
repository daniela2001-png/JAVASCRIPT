/*

Programación orientada a objetos: 
use el cierre para proteger las propiedades dentro de un objeto para que no se modifiquen externamente!

En el desafío anterior, bird tenía una propiedad pública name.
Se considera público porque se puede acceder y modificar fuera de bird

*/

bird.name = "Duffy"; // puedo cambiar el valor de name fuera o dentro del constructor lo cual puede ser complejo

/*

Por lo tanto, cualquier parte de su código puede cambiar fácilmente el nombre de bird a cualquier valor.
Piense en cosas como las contraseñas y las cuentas bancarias que se pueden cambiar
fácilmente por cualquier parte de su código base. Eso podría causar muchos problemas.

La forma más sencilla de hacer que esta propiedad pública sea privada es creando una variable
dentro de la función constructora.
Esto cambia el alcance de esa variable para que esté dentro de la función del constructor
en lugar de estar disponible globalmente.
De esta manera, solo se puede acceder a la variable y modificarla mediante métodos
también dentro de la función constructora.

*/

function Bird() {
    let hatchedEgg = 10; // private variable

    /* publicly available method that a bird object can use */
    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

/*

Aquí getHatchedEggCount hay un método privilegiado,
porque tiene acceso a la variable privada hatchedEgg.
Esto es posible porque hatchedEgg se declara en el mismo contexto que getHatchedEggCount.
En JavaScript, una función siempre tiene acceso al contexto en el que fue creada.
A esto se le llama closure.

*/

/*
Cambie cómo weight se declara en la Bird función para que sea una variable privada.
Luego, crea un método getWeight que devuelva el valor de weight 15. */

function Bird() {
    let weight = 15;
    this.getWeight = () => { return weight };

}
let bird = new Bird()
console.log(bird.getWeight()) // yields 15!
