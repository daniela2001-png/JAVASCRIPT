// este modulo se encargara de exportar dos funciones de respuestas: error y exito

function success(req, resp, mensaje, status) {
    resp.status(status || 200).send({
        "error": null,
        "body": mensaje
    })
}
function error(req, resp, mensajeError, status) {
    resp.status(status || 400).send({
        "body": null,
        "error": mensajeError
    })
}

module.exports = {
    success: success,
    error: error
}