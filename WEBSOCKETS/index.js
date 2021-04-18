const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", (socket) => {
    console.log("un usuario se ha conectado")
    // toma 2 parametros el 1ro sera el tipo de mensaje y el 2do sera literal el mensaje que se le mostrara a los users cada vez que se conceten a nuestro server a traves del sokcet o tunel abierto
    socket.emit("daniela", "hola visitante como estas?")
    socket.emit("mensaje2", "hola soy otro tipo de mensaje")
    socket.on('disconnect', () => {
        console.log("un usuario se ha desconecatdo")
    })
})
// este mensjae lo veran en consola cada 3 segundos los multiples usuarios que esten concetados nuestro socket haciendo stream masivamente
setInterval(function () {
    io.emit("daniela", "Hola este mensaje los veran todos los usuarios que esten conectados en este socket cada 3 segundos salu2 by Daniela")
}, 3000)

server.listen(8080, () => {
    console.log("Escuchando en http://localhost:8080")
})