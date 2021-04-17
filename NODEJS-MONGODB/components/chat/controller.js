const chalk = require("chalk")
const store = require("./store")


const crearChat = (listausers) => {
    return new Promise((resolve, reject) => {
        if (!listausers) {
            reject('deben haber dos users para crear un chat con exito')
            console.error(chalk.red('EL USUARIO NO HA INTRODUCIDO LOS DOS USUARIOS EN EL REQUEST'))
        }
        let chat = {
            "usuarios": listausers
        }
        resolve(chat)
        store.crear(chat)
    })
}

const listarChat = (userId) => {
    const result = store.listar(userId)
    return result
}

module.exports = {
    "crear": crearChat,
    "listar": listarChat
}