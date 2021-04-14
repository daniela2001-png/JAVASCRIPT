const Modelo = require("./model")

const añadirUser = async (nombre) => {
    const nombreUser = await new Modelo(nombre)
    nombreUser.save()
}
const listarUser = async () => {
    const usuariosLista = await Modelo.find()
    console.log(usuariosLista)
    if (usuariosLista.length <= 0) {
        return "OOps! al parecer no hay nada para ver"
    }
    return usuariosLista
}


module.exports = {
    "añadirUser": añadirUser,
    "listar": listarUser
}