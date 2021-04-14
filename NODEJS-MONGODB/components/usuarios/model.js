const mongoose = require('mongoose');
const momento = require('moment');
const { Schema, model } = mongoose

let moment = momento()
const mySchema = new Schema({
    nombre: String,
    fechaCreacion: { type: Date, default: Date.now() },
})

const ModelUser = model('Usuario', mySchema)

module.exports = ModelUser
