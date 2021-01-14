/*

Programación orientada a objetos:
use una combinación para agregar un comportamiento común entre objetos no relacionados

Como ha visto, el comportamiento se comparte a través de la herencia.
Sin embargo, hay casos en los que la herencia no es la mejor solución.
La herencia no funciona bien para objetos no relacionados como Bird y Airplane.
Ambos pueden volar, pero a Bird no es un tipo de Airplane y viceversa.

Para objetos no relacionados, es mejor usar mixins.
Un mixin permite que otros objetos utilicen una colección de funciones.
*/

// creamos una funcion mixin con una funcion fly() que se asignara  a cada objeto que le pasemos como parametro al mixin!
let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    }
};

// El flyMixin toma cualquier objeto y le da el fly() método.
let objeto1 = {
    name: "Daniela",
    edad: 19
}

let objeto2 = {
    name: "Andres",
    edad: 24
}

// aqui llamamos a nuestra funcion mixin para darle un metodo fly() al objeto que le pasemos como prop
flyMixin(objeto1); // ahora nuestro objeto1 tendra el metodo fly()
console.log(objeto1.fly) // { name: 'Daniela', edad: 19, fly: [Function] }

/* Tenga en cuenta cómo el mixin permite que el mismo fly método sea reutilizado por objetos no relacionados birdy plane. */

/*
Cree un mixin llamado glideMixin que defina un método llamado glide.
Luego use el glideMixin para dar tanto bird y boat la habilidad de deslizarse.
*/
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = (objeto) => {
    objeto.glide = () => console.log("glide");
}

glideMixin(boat);
glideMixin(bird);