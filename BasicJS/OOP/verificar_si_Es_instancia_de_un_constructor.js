/*
Programación orientada a objetos: verifique el constructor de un objeto con instanceof

Siempre que una función constructora crea un nuevo objeto,
se dice que ese objeto es una instancia de su constructor.
JavaScript ofrece una forma conveniente de verificar esto con el instanceof operador.
instanceof le permite comparar un objeto con un constructor,
devolviendo true o false basándose en si ese objeto fue creado con el constructor o no.
He aquí un ejemplo:
*/
let Crickin = function Detalles(bello, unico) {
    this.bello = bello;
    this.unico = unico;
}
let newCrick = new Crickin(true, true)
console.log(newCrick)
console.log(newCrick instanceof Crickin); // => true