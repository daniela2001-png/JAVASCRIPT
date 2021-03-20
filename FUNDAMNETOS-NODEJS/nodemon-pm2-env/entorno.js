#!/usr/bin/node

/*

PARA NO ESTAR EJECUTANDO NUESTRO ARCHIVOS JS CON NODE CADA VEZ QUE HAGAMOS UN CAMBIO
USAREMOS EL DEMONIO NODEMON PARA EVITAR ESTE PROBLEMA (npm i -g nodemon)

*/

let env = process.env.NOMBRE || 'Desconocido'

console.log("Hola ".concat(env))
console.log("HI")

