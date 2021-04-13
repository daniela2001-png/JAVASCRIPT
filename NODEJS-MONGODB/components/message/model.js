const mongoose = require('mongoose');
const momento = require('moment');
let moment = momento()
const { Schema, model } = mongoose
const mySchema = new Schema({
    usuario: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
    fechaCreacion: { type: Date, default: moment.format("M/DD/YYYY HH:MM A") },
    fechaUltimaActualizacion: { type: Date, default: moment.format("M/DD/YYYY HH:MM A") }
})

const Model = model('Mensajes', mySchema)

module.exports = Model

// el Schema de mongoose ya nos agrega automaticamente un id a cada objeto de nuestro Modelo!
// const test = new Model({
//     usuario: undefined,
//     mensaje: "soy un test",
// })

// console.log(test['_id']) 46786y487563475yt3487

