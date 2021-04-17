const mongoose = require('mongoose');
const { Schema, model } = mongoose


const mySchema = new Schema({
    usuarios: [{
        type: Schema.ObjectId,
        ref: 'Usuario'
    }],
    fechaCreacion: { type: Date, default: Date.now() },
    fechaUltimaActualizacion: { type: Date, default: Date.now() }
})

const Model = model('Chat', mySchema)


module.exports = Model
