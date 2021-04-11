// Aqui crearemos nuestro servidor usando express
require('dotenv').config()
const express = require('express')
const app = express()
//const router = require('./components/message/network')
const router = require('./network/routes')
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true })) // si ponemos el modo extended en false nos traera un objeto con su prototype en cambio con true  se acomoda y crea el objeto simple como se lo mandamos en el request
router(app) // creamos los middlewares para las rutas de nuestros componentes

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