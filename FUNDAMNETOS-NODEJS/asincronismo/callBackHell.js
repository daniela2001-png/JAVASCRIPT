#!/usr/bin/node

/*

CALLBACKS HELL!!!! :)
AGREGAMOS UNA NUEVA FUNCIÓN LLAMADA (hablar())

*/

const saludar = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola ".concat(nombre))
        miCallback(nombre)
    }, 1500)
}

// creamos nuestra funcion hablar()
const hablar = (callBackHablar) => {
    setTimeout(() => {
        console.log("Bla bla bla bla ...")
        callBackHablar()
    }, 1000)
}

const adios = (nombre, miCallbackAdios) => {
    setTimeout(() => {
        console.log("Adios ".concat(nombre))
        miCallbackAdios(nombre)
    }, 1000)
}


const conversación = (nombre, vecesHablar, callBackConversar) => {
    if (vecesHablar > 0) {
        hablar(() => {
            conversación(nombre, --vecesHablar, callBackConversar)
        })
    } else {
        adios(nombre, callBackConversar)
    }
}

// el callback hell !!!
console.log('Iniciando proceso')
// BUENO Y AHORA EN VEZ DE LLMARA TANTAS VECES A LA FUNCION HABALR PODEMOS CREAR UNA FUNCION QUE LLAME A HABLAR() LAS VECES QUE QUERAMOS :)
saludar('Daniela', (nombre) => {
    conversación(nombre, 3, () => {
        console.log('Terminando Proceso');
    })
})


// saludar('daniela', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             adios(nombre, () => console.log("termianndo proceso"))
//         })
//     })
// })
