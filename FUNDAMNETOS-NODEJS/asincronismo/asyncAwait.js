#!/usr/bin/node

/*

ENTENDIENDO ASYNC AWAIT

*/

// async function daniela() {
//     const hi = await new Promise((resolve, reject) => { resolve("HI ME EJECUTARE DE SEGUNDAS") })
//     const hi3 = await new Promise((resolve, reject) => { resolve("HI ME EJECUTARE DE 3RAS") })
//     console.log(hi)
//     console.log(hi3)
// }

// daniela()
// async function daniela2() {
//     console.log("ME EJECUTO DE 1RAS")
// }
// daniela2()


const saludar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola ".concat(nombre))
            resolve(nombre)
            reject('uupssss')
        }, 1000)
    })
}


const hablar = (veces) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bla bla bla bla ...\n".repeat(veces))
            resolve(veces) // debemos pasarle el valor del parametro nombre para no perderlo entre las ejecuciones seguidas del .then()
        }, 1000)
    })
}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios ".concat(nombre))
            resolve(nombre)
        }, 1000)
    })
}


const main = async () => {
    let nombre = await saludar('Daniela')
    await hablar(3)
    await adios(nombre)
    console.log("Terminando Proceso")
}


// AQUI CON CONSOLE.LOG MIRAMOS SI SE EJECUTA 1RO EL EMPEZANDO PROCESO LUEGO LOS WAIR DE MAIN Y POR ULTIMO EL TERMIANNDO PROCESO
console.log("Empezando proceso")
main()