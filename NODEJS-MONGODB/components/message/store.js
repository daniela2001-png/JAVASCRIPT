const modelo = require('./model')

const añadirMensaje = async (mensaje) => {
    // listaMensajes.push(mensaje)
    const miMensaje = await new modelo(mensaje)
    miMensaje.save() // guardamos el mensaje creado en nuestra mongodb :) en la db test!
}

const listarMensajes = (filtro) => {
    return new Promise((resolve, reject) => {
        let filter;
        if (filtro) {
            filter = { 'usuario': filtro }
        }
        modelo.find(filter)
            .populate('usuario') // populamos la info ya teniendo la referencia en le campo "usuario" a la tabla "Usuarios" como un id, para traernos toda la info de un user asociada a un mensaje cada vez que listemos los mensajes
            .exec((error, dataPopulated) => {
                if (error) {
                    reject(error)
                }
                resolve(dataPopulated)
            })
    })
}

const updateStoreMensaje = async (id, mensaje) => {
    const mensajeCambiar = await modelo.findById(id) // traemos el documento que hace match con el id que tenemos en el query param
    mensajeCambiar.mensaje = mensaje // actualizamos el mensaje cin el mensaje que nos mandan en el cuerpo del request
    mensajeCambiar.fechaUltimaActualizacion = Date.now() // actualizamos la fecha en la que expresamos cual fue la ultima fecha de modificacion del mensaje
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
