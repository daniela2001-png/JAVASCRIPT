/*
Estructuras de datos básicas: use la palabra clave eliminar para eliminar las propiedades del objeto

Ahora sabe qué son los objetos y sus características y ventajas básicas.
En resumen, son tiendas de valor clave que proporcionan una forma flexible e intuitiva
de estructurar datos y proporcionan un tiempo de búsqueda muy rápido.
A lo largo del resto de estos desafíos, describiremos varias operaciones comunes que puede realizar en objetos
para que se sienta cómodo aplicando estas estructuras de datos útiles en sus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto.
Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.

Repasemos nuestro foods ejemplo de objeto por última vez.
Si quisiéramos eliminar la applesclave, podemos eliminarla usando la deletepalabra clave como esta:
*/

let foods = {
    apples: 25,
    melon: 30,
    uwu: 30
};

delete foods["apples"]; // otra manera seria con la notacion de "." delete foods.apples
console.log(foods); // la property apples ya no existe :3

// Usar la palabra clave de eliminación para quitar las oranges, plums y strawberries las teclas del foods objeto.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line 
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);
