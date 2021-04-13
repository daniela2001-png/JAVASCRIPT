const modelo = require('./model')
const db = require('mongoose');
const chalk = require('chalk');

const dbConexion = async () => {
    try {
        await db.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
        console.log('LA CONEXIÓN HA SIDO EXITOSA')
    } catch (error) {
        console.error(chalk('UN ERROR HA OCURRIDO DURANTE LA CONEXION A LA DB'))
    }
}
dbConexion()

const añadirMensaje = (mensaje) => {
    // listaMensajes.push(mensaje)
    const miMensaje = new modelo(mensaje)
    miMensaje.save() // guardamos el mensaje creado en nuestra mongodb :) en la db test!
}

const listarMensajes = async () => {
    const listaMensajes = await modelo.find() // con el metodo find obtenemos todos los documentos de la db test es decir todos los objetos
    return listaMensajes
}

module.exports = {
    'añadir': añadirMensaje,
    'listar': listarMensajes,
}
