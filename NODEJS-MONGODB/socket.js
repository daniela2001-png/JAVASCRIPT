const socketio = require("socket.io")
const socket = {}

function connect(server) {
    socket.io = socketio(server)
}

module.exports = {
    connect,
    socket
}
