const modelo = require('./model')
const momento = require('moment');
let moment = momento()

const añadirMensaje = async (mensaje) => {
    // listaMensajes.push(mensaje)
    const miMensaje = await new modelo(mensaje)
    miMensaje.save() // guardamos el mensaje creado en nuestra mongodb :) en la db test!
}

const listarMensajes = async (filtro) => {
    if (!filtro) {
        const listaMensajes = await modelo.find() // con el metodo find obtenemos todos los documentos de la db test es decir todos los objetos
        return listaMensajes
    }
    else {
        //const filtrado = await modelo.find({ 'usuario': new RegExp(filtro, 'i') }) // hacemos un regex para una búsqueda por el nombre ignorando mayúsculas o minúsculas (flag 'i')
        const filtrado = await modelo.find({ 'usuario': filtro })
        if (filtrado.length !== 0) {
            return filtrado
        } else {
            return 'Oops! recurso no encontrado'
        }
    }
}

const updateStoreMensaje = async (id, mensaje) => {
    const mensajeCambiar = await modelo.findById(id) // traemos el documento que hace match con el id que tenemos en el query param
    mensajeCambiar.mensaje = mensaje // actualizamos el mensaje cin el mensaje que nos mandan en el cuerpo del request
    mensajeCambiar.fechaUltimaActualizacion = moment.format("M/DD/YYYY HH:MM A") // actualizamos la fecha en la que expresamos cual fue la ultima fecha de modificacion del mensaje
    console.log(mensajeCambiar.fechaUltimaActualizacion)
    const nuevoMensaje = await mensajeCambiar.save() // guardamos el nuevo documento en la dbmongo
    return nuevoMensaje // retornamos el nuevo mensaje ya actualizado y guardaddo
}

const eliminarMensaje = async (id) => {
    const result = await modelo.findOneAndDelete({ '_id': id })
    return result
}

module.exports = {
    'añadir': añadirMensaje,
    'listar': listarMensajes,
    'updateStoreMensaje': updateStoreMensaje,
    "remove": eliminarMensaje
}
