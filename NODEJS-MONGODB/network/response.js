// este modulo se encargara de exportar dos funciones de respuestas: error y exito
const chalk = require('chalk');

function success(req, resp, mensaje, status) {
    resp.status(status || 200).send({
        "error": null,
        "body": mensaje
    })
}
function error(req, resp, mensajeError, status, detalles) {
    // usamos la libreria chalk(NO NATIVA) para darle un color rojo a la letra del error
    console.error(chalk.red('LA CAUSA PRINCIPAL DEL ERROR ES:'), detalles)
    resp.status(status || 400).send({
        "body": null,
        "error": mensajeError
    })
}

module.exports = {
    success: success,
    error: error
}