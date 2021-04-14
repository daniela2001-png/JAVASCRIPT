// ARCHICO QUE CONTIENE LA CONEXION CON LA DB MONGO
const db = require('mongoose');
const chalk = require('chalk');

const dbConexion = async () => {
    try {
        await db.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
        console.log('LA CONEXIÓN HA SIDO EXITOSA')
    } catch (error) {
        console.error(chalk('UN ERROR HA OCURRIDO DURANTE LA CONEXION A LA DB'))
    }
}
module.exports = dbConexion
