#!/usr/bin/node

/*

CALLBACKS :)
asincronismo con callbacks en node js

*/

const saludar = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola ".concat(nombre))
        miCallback()
    }, 1500)
}

const adios = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Adios ".concat(nombre))
        miCallback()
    }, 1000)
}
console.log('inicnando proceso')
saludar('daniela', () => {
    adios('daniela', () => console.log("termianndo proceso"))
})
