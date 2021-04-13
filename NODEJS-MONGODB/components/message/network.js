const express = require('express')
const router = express.Router()
// importamos el controlador de controller.js para traer la logica que tendra cada endpoint de manera desacoplada
const controlador = require('./controller')
const response = require('../../network/response');
const store = require('./store');


router.get('/lista-mensajes', (req, resp) => {
    // console.log('SOY UN QUERY PARAM EN FORMA DE LISTA: ', req.query.color)
    // // si queremos ver las cabeceras del req usamos el atributo headers del request
    // console.log('HOLA SOY EL HEADER DEL REQUEST: ', req.headers)
    // // si queremos personalizar el header de respuesta del server usamos el metodo header del reponse :)
    // resp.header({
    //     'dani-header': 'soy un header personalizado by daniela'
    // })
    // obtenemos todos los mensajes que estan en la db
    const mensajeFiltrado = req.query.usuario || undefined
    controlador.listarMensajes(mensajeFiltrado)
        .then((listaMensajes) => {
            response.success(req, resp, listaMensajes, 200)
        })
        .catch(error => {
            response.error(req, resp, 'Error inesperado', 500, error)
        })

})

router.post('/crear-mensaje', (req, resp) => {
    const { usuario, mensaje } = req.body
    controlador.añadirMensaje(usuario, mensaje)
        .then((Mensaje) => {
            response.success(req, resp, Mensaje, 201)
        })
        .catch(error => {
            response.error(req, resp, 'Informacion invalida', 400, 'Error en el controlador')
        })
    //console.log(req.query) // obtenemos el objeto de querys que tengamos(que sena enviados desde el request) en esta ruta 
})

router.delete('/eliminar-mensaje', (req, resp) => {
    // aqui estamos simulando el error que le enviamos desde el request en los query params como (?error=ok) :)
    req.query.error == "ok" ? response.error(req, resp, 'oops algo ha salido mal', 400, 'es un error simulado momentaneo :)') :
        response.success(req, resp, 'mensaje eliminado correctamente', 204)
})

// Bien ahora crearemos un endpoint que nos permita actualizar de MANERA PARCIAL un mensaje usaremos PATCH para ello
router.patch('/actualizar-mensaje/:id', (req, resp) => {
    // llamamos la funcion que manejara la logica de actualizar un mensaje, necesitaremos el id del mensaje a cambiar y el nuevo texto
    console.log(req.params.id, req.body.mensaje)
    controlador.update(req.params.id, req.body.mensaje)
        .then((data) => {
            response.success(req, resp, data, 200)
        })
        .catch(error => {
            response.error(req, resp, 'Error interno, disculpanos', 500, error)
        })
})

module.exports = router