const store = require("./store")

const añadirUsuario = (nombre) => {
    return new Promise((resolve, reject) => {
        if (!nombre) {
            reject('Dato invalido o faltante en el body request!')
        } else {
            let user = {
                "nombre": nombre
            }
            resolve(user)
            store.añadirUser(user)
        }
    })
}

const listarUsuarios = () => {
    return new Promise((resolve, reject) => {
        resolve(store.listar())
    })
}

module.exports = {
    "añadir": añadirUsuario,
    "listar": listarUsuarios
}
