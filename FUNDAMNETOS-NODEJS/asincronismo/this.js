#!/usr/bin/node
/*
Primero registramos un objeto vacío porque no hay valores module.exports en este módulo.
Luego colocamos foo el module.exports objeto, cuando volvemos a registrar this,
podemos ver que ahora registra el module.exports objeto actualizado.

*/

console.log(this);    // logs {}

module.exports.foo = 5;
module.exports.hi = 'daniela';
console.log(this);  // logs { foo: 5}