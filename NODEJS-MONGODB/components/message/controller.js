// AQUI TENDREMOS LA LOGICA DE NEGOCIO(funciones necesarias para hacer CRUD de un mensaje) DE NUESTRO COMPONENTE message
const chalk = require('chalk');
const store = require('./store');




const añadirMensaje = (usuario, mensaje, chat, file) => {
    return new Promise((resolve, reject) => {
        if (!chat || !usuario || !mensaje) {
            reject('Los datos estan incompletos')
            console.error(chalk.red('Hizo falta el usuario o el mensaje por completar'))
        } else {
            let fileUrl = ''
            if (file) {
                fileUrl = "http://localhost:3000/app/files/" + file.filename // aqui le mandamos la ruta donde podremos encontrar un fichero que haya sido subido con exito en static es en donde servimos nuestro archivos estaticos :3
            }
            let Mensaje = {
                usuario: usuario,
                mensaje: mensaje,
                chat: chat,
                file: fileUrl,
                fechaCreacion: Date.now(),
                fechaUltimaActualizacion: Date.now()
            }
            resolve(Mensaje)
            // agregamos nuestro mensaje completo al mock de la db
            store.añadir(Mensaje)
            console.log('Èl mensaje completo es: %j', Mensaje)
        }
    })
}

const listarMensajes = (filtro) => {
    return new Promise((resolve, reject) => {
        resolve(store.listar(filtro))
    })
}

const updateMensaje = (id, nuevoMensaje) => {
    return new Promise(async (resolve, reject) => { // aqui la convertimos a una funcion async/await
        if (!id || !nuevoMensaje) {
            reject('los datos que ha enviado el usuario son invalidos o estan icompletos')
        } else {
            const resultado = await store.updateStoreMensaje(id, nuevoMensaje) // y porque ? para que el resultado de esta funcion asincrona
            resolve(resultado) // espere hasta que se resuelva el resultado y haga le resolve sin ningun lio! 
        }
    })
}
const eliminarMensaje = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('dato invalido o no existe!')
        } else {
            const result = await store.remove(id)
            resolve(result)
            return result
        }
    })
}

module.exports = {
    añadirMensaje,
    listarMensajes,
    "update": updateMensaje,
    "eliminarMensaje": eliminarMensaje
}
