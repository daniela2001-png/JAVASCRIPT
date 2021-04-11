// AQUI TENDREMOS LA LOGICA DE NEGOCIO(funciones necesarias para hacer CRUD de un mensaje) DE NUESTRO COMPONENTE message
const chalk = require('chalk');
let uniqid = require('uniqid');
const store = require('./store');


const añadirMensaje = (usuario, mensaje) => {
    return new Promise((resolve, reject) => {
        if (!usuario || !mensaje) {
            reject('Los datos estan incompletos')
            console.error(chalk.red('Hizo falta el usuario o el mensaje por completar'))
        } else {
            let Mensaje = {
                usuario: usuario,
                mensaje: mensaje,
                fechaCreacion: new Date()
            }
            resolve(Mensaje)
            // agregamos nuestro mensaje completo al mock de la db
            store.añadir(Mensaje)
            console.log('Èl mensaje completo es: %j', Mensaje)
        }
    })
}

const listarMensajes = () => {
    return new Promise((resolve, reject) => {
        resolve(store.listar())
    })
}



module.exports = {
    añadirMensaje,
    listarMensajes
}
