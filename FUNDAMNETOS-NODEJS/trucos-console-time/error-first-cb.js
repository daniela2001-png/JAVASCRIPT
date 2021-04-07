// manejando el patron de manejo de errores con callbacks (error first callbacks)
const asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    })
}

// INTENTARE MANEJARLO DE LA MANERA TRY CATCH LA FUNCION ASINCRONA
try {
    asincrona((err, data) => {
        // LA MANERA CORRECTA DE MANEJAR ERRORES EN FUNCIONES O PROCESOS ASINCRONOS ES CON CALLBACKS DIRECTLY
        err ? console.log('Un error ha ocurrido: ', err) : console.log('El proceso ha sido exitoso ', data)
        // if (err) {
        //     throw err LANZAR ERRORES EN FUNIONES ASINCRONAS NO FUNCIONA!
        // }
        // console.log(data)
    })

} catch (error) {
    console.log('soy el error: ', error)
}
