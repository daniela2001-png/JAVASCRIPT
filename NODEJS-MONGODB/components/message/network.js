const express = require('express')
const router = express.Router()
// importamos el controlador de controller.js para traer la logica que tendra cada endpoint de manera desacoplada
const controlador = require('./controller')
const response = require('../../network/response');
// importamos el modulo multer que se encargar de hacer el proceso de subir archivos de multimedia  
const multer = require("multer")
const path = require("path")
const { nanoid } = require('nanoid')
// esto actuara como un middleware que simplemnet es un proceso que se ejecuta 1ro antes de que se ejecute la funcion que toma como parametro esete middleware que sera upload y actuara como parametro en el post de message
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/files') // aqui es donde se guardaran todos nuestro ficheros que sean subidos exitosamente y podremos aceder a ellos :)
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname)
        let filename = nanoid(10) + extension // el fichero quedara guardado con un nombre unico y su extension ejemplo => 2lhergcuwe46.pdf
        cb(null, filename)
    }
})
let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "text/markdown" || file.mimetype == "text/markdown" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File types allowed .jpeg, .jpg and .png .pdf .md!'));
        }
    }
})

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

/*
EN NUESTRP POSTAMN PARA A LA HORA DE CREAR UN MENSAJE PODREMOS TAMBIEN NO SOLO AGREGAR TEXTO SINO TAMBIEN CONTENICO MULTIMEDA
CON AYUDA DEL FORMATO RESPONSE MULTIPART EN VEZ DEL TRADICIONAL JSON

*/
// upload.single('archivo') sera el nombre del archivo que multer va  subir y guradar en la carpeta uploas/
router.post('/crear-mensaje', upload.single('archivo'), (req, resp) => {
    const { usuario, mensaje, chat } = req.body
    console.log('archivo a subir', req.file)
    controlador.añadirMensaje(usuario, mensaje, chat, req.file)
        .then((Mensaje) => {
            response.success(req, resp, Mensaje, 201)
        })
        .catch(error => {
            response.error(req, resp, 'Informacion invalida', 400, error)
        })
    //console.log(req.query) // obtenemos el objeto de querys que tengamos(que sena enviados desde el request) en esta ruta 
})

// router.delete('/eliminar-mensaje', (req, resp) => {
//     // aqui estamos simulando el error que le enviamos desde el request en los query params como (?error=ok) :)
//     req.query.error == "ok" ? response.error(req, resp, 'oops algo ha salido mal', 400, 'es un error simulado momentaneo :)') :
//         response.success(req, resp, 'mensaje eliminado correctamente', 204)
// })

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

router.delete('/eliminar-mensaje/:id', (req, resp) => {
    let id = req.params.id
    controlador.eliminarMensaje(id)
        .then((mensajeEliminado) => {
            if (mensajeEliminado !== null)
                response.success(req, resp, `El mensaje  ${mensajeEliminado} ha sido eliminado correctamente`, 200)
            else
                response.error(req, resp, `Oops un error ha ocurrido`, 500, 'el usuario ya fue borrado o no existe')
        })
        .catch((error) => {
            response.error(req, resp, 'Errror Interno, disculpanos!', 500, error)
        })
})

module.exports = router