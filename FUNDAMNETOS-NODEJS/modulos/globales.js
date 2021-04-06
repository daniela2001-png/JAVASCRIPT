#!/usr/bin/node

/*

TIPOS DE MODULOS EN NODEJS

1) GLOBALES =>  son los que ya viene integrados en node js
                como por ejemplo: (setTimeOut, console.log, setInterval entre otros)

*/

// console.log(global)
let counter = 0
let intervalo = setInterval(() => {
    console.log("HOLA SETINTERVAL")
    if (counter === 3) {
        clearInterval(intervalo);
    }
    counter++;
}, 1000);
//console.log(intervalo)

// algo de process en nodejs
if (process.geteuid) {
    console.log(`Current uid: ${process.geteuid()}`);
}
console.log(__filename)
console.log(process.getid ? `Current id: ${process.getid()}`: console.log("no existe id de grupo"));
