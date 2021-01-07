/*

Programación orientada a objetos: haga que el código sea más reutilizable con esta palabra clave
El último desafío introdujo un método al duckobjeto. Usó duck.name 
notación de puntos para acceder al valor de la namepropiedad dentro de la declaración de retorno:

sayName: function() {return "The name of this duck is " + duck.name + ".";}

Si bien esta es una forma válida de acceder a la propiedad del objeto, aquí existe un error.
Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original
también deberá actualizarse. En una definición de objeto corta, no es un problema, pero
si un objeto tiene muchas referencias a sus propiedades, existe una mayor posibilidad de error.

Una forma de evitar estos problemas es con la this palabra clave:
*/
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () { return "The name of this duck is " + this.name + "."; }
};
console.log(duck.sayName())

/*
this es un tema profundo, y el ejemplo anterior es solo una forma de usarlo.
En el contexto actual, this se refiere al objeto de que el método se asocia con: duck.
Si se cambia el nombre del objeto a mallard, no es necesario buscar todas las referencias a duck en el código.
Hace que el código sea reutilizable y más fácil de leer.
*/

// Modifique el dog.sayLegsmétodo para eliminar cualquier referencia dog. Utilice el duck ejemplo como guía
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());


/*
En modo estricto, el valor de this se mantiene en lo que está establecida al entrar en el contexto de ejecución.
Si no está definido, permanece undefined. También se puede ajustar a cualquier valor
tales como null o 42 o "Yo no soy this".

EJEMPLO:
*/
function indefinido() {
    /*
    QUE HACE EL MODO ESTRICTO? >> Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.
    */
    "use strict"
    return this
};
console.log(indefinido()); // undefined; ya que estamos en modo estricto!

var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};

console.log(o.f()); // logs 37


var o = { prop: 38 };

function independent() {
    return this.prop;
}

o.f = independent;
console.log(o.f())  // logs 38
