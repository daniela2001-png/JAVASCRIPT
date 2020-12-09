/*
Depuración: use typeof para verificar el tipo de una variable

Puede utilizar typeof para comprobar la estructura de datos o el tipo de una variable
Esto es útil para depurar cuando se trabaja con varios tipos de datos.
Si cree que está sumando dos números, pero uno es en realidad una cadena,
los resultados pueden ser inesperados. Los errores de tipo pueden acechar en cálculos o llamadas a funciones.
Tenga cuidado especialmente cuando acceda y trabaje con datos externos
en forma de un objeto JavaScript Object Notation (JSON).

*/

// A continuación, se muestran algunos ejemplos que utilizan typeof:
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"

/*

JavaScript reconoce seis tipos de datos (inmutables) primitivas:
Boolean, Null, Undefined, Number, String, y Symbol(nueva con ES6)
y un tipo de objetos mutables: Object. 
Tenga en cuenta que en JavaScript, las matrices son técnicamente un tipo de objeto.

*/