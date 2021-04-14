const mensaje = require('../components/message/network')
const user = require('../components/usuarios/network')


const router = (server) => {
    server.use('/', mensaje) // las rutas funcionan como : '/' + 'nombre ruta del componente' == '/lista-mensajes' => me llamara al endpoint correspondiente
    server.use('/', user)
}
// agregamos esta funcion de router para que cuando tengamos mas e 1 componente en el server no hagamos o creamos multiples routes , mientras que nuestra API siga creciendo en cuanto al numero de componentes(mensjaes, usuarios)
module.exports = router
