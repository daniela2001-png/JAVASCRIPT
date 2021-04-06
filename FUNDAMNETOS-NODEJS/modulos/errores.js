#!/usr/bin/node

/*

MANEJANDO ERRORES EN NODE JS

*/

const meVoyARomper = () => (z + 3)
try {
    meVoyARomper()
} catch (e) {
    console.error("Error:", e.message)
}

// MANEJANDO ERRORES EN FUNCIONES ASINCRONAS O PROCESOS DE 2DO HILO
const funcionAsincrona = (cbError) => {
    setTimeout(() => {
        try {
            return 3 + c
        } catch (e){
            console.log("UUPS ALGO CRASHEO")
            cbError(e)
        }
    });
}

try {
    funcionAsincrona((e) => (console.log("Error:", e.message)))
} catch (error) {
    console.log("ERROR: ", error)
}

