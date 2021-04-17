const express = require('express')
const router = express.Router()
// importamos el controlador de controller.js para traer la logica que tendra cada endpoint de manera desacoplada
const controlador = require('./controller')
const response = require('../../network/response');


router.post("/crear-chat", (req, resp) => {
    controlador.crear(req.body.usuarios)
        .then((data) => {
            response.success(req, resp, data, 201)
        })
        .catch((error) => {
            response.error(req, resp, 'error interno', 500, error)
        })
})

router.get('/:chatId', (req, resp) => {
    controlador.listar(req.params.chat)
        .then((data) => {
            response.success(req, resp, data, 200)
        })
        .catch((error) => {
            response.error(req, resp, 'error interno', 500, error)
        })
})

module.exports = router