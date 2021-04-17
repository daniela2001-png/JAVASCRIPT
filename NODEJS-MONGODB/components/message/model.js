const mongoose = require('mongoose');
const { Schema, model } = mongoose

/*
Si te perdiste, pero tienes el código bien.
Borra los mensajes de la base de datos.
Ten creados dos usuarios en la base de datos.
Ahora ve a crear un chat nuevo (POST) y debe ser un body JSON así:

{
	"users": [
		"idDelUser1",
		"idDelUser2"
	]
}
Luego, ve a crear un mensaje (POST), a diferencia de la versión anterior, ahora se de le debe agregar el id del chat correspondiente de la creación que hicimos.

{
	"chat": "idChat",
	"user": "idUser1",
	"message": "mensaje"
}
Ahí puedes crear más mensajes.

Luego para hacer el GET de chat, debes poner el ID del User en la URL:
http://localhost:3000/chat/userId


*/

const mySchema = new Schema({
    chat: [{
        type: Schema.ObjectId,
        ref: 'Chat'
    }],
    usuario: [{
        type: Schema.ObjectId,
        ref: 'Usuario'
    }],
    mensaje: {
        type: String,
        required: true
    },
    fechaCreacion: { type: Date, default: Date.now() },
    fechaUltimaActualizacion: { type: Date, default: Date.now() }
})

const Model = model('Mensajes', mySchema)


module.exports = Model

// el Schema de mongoose ya nos agrega automaticamente un id a cada objeto de nuestro Modelo!
// const test = new Model({
//     usuario: undefined,
//     mensaje: "soy un test",
// })

// console.log(test['_id']) 46786y487563475yt3487

