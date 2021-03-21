#!/usr/bin/node

/*

CALLBACKS :)
asincronismo con callbacks en node js

*/

const saludar = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola ".concat(nombre))
        miCallback(nombre)
    }, 1500)
}

const adios = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Adios ".concat(nombre))
        miCallback(nombre)
    }, 1000)
}
console.log('inicnando proceso')
saludar('daniela', (nombre) => {
    adios(nombre, () => console.log("termianndo proceso"))
})
