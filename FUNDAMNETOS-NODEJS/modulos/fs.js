#!/usr/bin/node

// ESTA MANERA SERIA DE LA MANERA COMUN
// const fs = require("fs")
// const leerArchivo = (rutaArchivo) => {
//     fs.readFile(rutaArchivo, (err, data) => {
//         console.log(data.toString())
//     })
// }

// leerArchivo(__dirname.concat("/file.txt"))


// AHORA HAGAMOLO CON PROMESAS
// const fs = require("fs").promises
// const leer = async () => {
//     let data = await fs.readFile(__dirname.concat('/file.txt'), { encoding: 'utf-8' })
//     console.log(data)
// }
// leer()

// ahora una funcion de escribir archivos
// const fs = require("fs")

// let CONTENIDO = `
// HOLA SOY NUEVO CONTENIDO BABYS

// `
// const escribir = (ruta, contenido) => {
//     fs.writeFile(ruta, contenido, (err) => {
//         if (!err) {
//             console.log("EL CONTENIDO HA SIDPE XITOSO")
//         } else {
//             console.log("UPPPS tenemos problemas señor")
//         }
//     })
// }
// escribir(__dirname.concat("/file2.txt"), CONTENIDO)


// AHORA ESCRIBOR VERSION PROMESAS :)
// const fs = require("fs").promises

// const escribir = async (ruta, contenido) => {
//     await fs.writeFile(ruta, contenido)
// }

// escribir(__dirname.concat("/file3.txt"), "HOLAA SOY EL FILE 3 CON PROMESAS")


// AHORA CREAREMOS UNA FUNCION PARA BORRAR UN ARCHIVO CON unlink
// const fs = require("fs")

// const borrarArchivo = (rutaArchivo) => {
//     fs.unlink(rutaArchivo, (err) => {
//         if (err) {
//             console.error("Un error ha ocurrido", err)
//         }
//     })
// }

//borrarArchivo(__dirname.concat("/file3.txt"))

// AHORA DE LA MANERA ASYNC
const fs = require("fs").promises
const borrarArchivo = async (rutaArchivo) => {
    try {
        await fs.unlink(rutaArchivo)
    }
    catch {
        console.log("EL ARCHIVO NO EXISTE")
    }
}
borrarArchivo(__dirname.concat("/file2.txt"))

