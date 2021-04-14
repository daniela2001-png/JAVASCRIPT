const express = require('express')
const router = express.Router()
// importamos el controlador de controller.js para traer la logica que tendra cada endpoint de manera desacoplada
const controlador = require('./controller')
const response = require('../../network/response');


// CREAREMOS NUESTROS ENDPOINTS PARA UN USUARIO !
router.post('/', (req, resp) => {
    controlador.añadir(req.body.nombres)
        .then((usuario) => {
            response.success(req, resp, usuario, 200)
        })
        .catch((error) => {
            response.error(req, resp, 'Un error ha ocurrido al crear el usuario', 400, error)
        })
})

router.get('/listar-usuarios', (req, resp) => {
    controlador.listar()
        .then((usuarios) => {
            response.success(req, resp, usuarios, 200)
        })
        .catch((error) => {
            response.error(req, resp, 'Erro interno, lo sentimos', 500, error)
        })
})

module.exports = router
