/*

Programación orientada a objetos: definir una función de constructor
Los constructores son funciones que crean nuevos objetos.
Definen propiedades y comportamientos que pertenecerán al nuevo objeto.
Piense en ellos como un modelo para la creación de nuevos objetos.

A continuación, se muestra un ejemplo de un constructor:
*/

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

/*
Este constructor define un Birdobjeto con propiedades name, color y numLegs establecido en Albert, azul y 2, respectivamente.
Los constructores siguen algunas convenciones:

1) Los constructores se definen con un nombre en mayúscula para distinguirlos de otras funciones que no lo son constructors.
2) Los constructores usan la palabra clave thispara establecer las propiedades del objeto que crearán. Dentro del constructor, se thisrefiere al nuevo objeto que creará.
3) Los constructores definen propiedades y comportamientos en lugar de devolver un valor como lo harían otras funciones.

*/

// Cree un constructor, Dogcon propiedades name, colory numLegsque se establezcan en una cadena, una cadena y un número, respectivamente.
function Dog() {
    this.name = "daniela";
    this.color = "brown";
    this.numLegs = 4;
};

