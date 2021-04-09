// Aqui crearemos nuestro servidor usando express
const express = require('express')
const app = express()
const router = express.Router()
const response = require('./network/response');
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true })) // si ponemos el modo extended en false nos traera un objeto con su prototype en cambio con true  se acomoda y crea el objeto simple como se lo mandamos en el request

app.use(router) // hacemos este paso para que el router funcione sin problemas


router.get('/message', (req, resp) => {
    console.log('SOY UN QUERY PARAM EN FORMA DE LISTA: ', req.query.color)
    // si queremos ver las cabeceras del req usamos el atributo headers del request
    console.log('HOLA SOY EL HEADER DEL REQUEST: ', req.headers)
    // si queremos personalizar el header de respuesta del server usamos el metodo header del reponse :)
    resp.header({
        'dani-header': 'soy un header personalizado by daniela'
    })

    response.success(req, resp, 'Lista de mensajes', 200)
})

router.post('/message-post', (req, resp) => {
    console.log(req.body)
    console.log(req.query) // obtenemos el objeto de querys que tengamos(que sena enviados desde el request) en esta ruta 
    response.success(req, resp, 'mensaje creado correctamente', 201)
})

router.delete('/message-delete', (req, resp) => {
    console.log(req.body)
    req.query.error == "ok" ? response.error(req, resp, 'oops algo ha salido mal', 400) :
        response.success(req, resp, 'mensaje eliminado correctamente', 204)
})

// servimos archivos estaticos con express
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'css', 'js'],
    index: 'index.html',
    maxAge: '1d',
    redirect: false,
}
// desde la ruta /static/ podemos acceder a las rutas (names directorys) que esten dentro de public por ejemplo: si pongo /static/css/index.css me mostrara el css que he creado :)
app.use('/static', express.static('public', options)) 


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})
