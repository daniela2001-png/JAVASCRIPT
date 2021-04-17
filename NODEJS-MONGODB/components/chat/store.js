const modelo = require("./model")

const crearChat = async (listausers) => {
    const result = await new modelo(listausers)
    result.save()
}
const listarChat = (userId) => {
    return new Promise ((resolve, reject) => {
        let filter;
        if (userId) {
            filter = {"usuario":userId}
        }
        modelo.find(filter)
            .populate('usuarios')
            .exec((error, dataPopulated) => {
                if (error) {
                    reject(error)
                }
                resolve(dataPopulated)
            })
    })
}

module.exports = {
    "crear": crearChat,
    "listar":listarChat
}