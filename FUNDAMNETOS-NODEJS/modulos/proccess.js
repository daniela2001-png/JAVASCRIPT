/*

PROCESS EL MODULO GLOBAL NODE NO TENEMOS QUE HACER REQUIRE() YUJUU

*/

// exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
process.on("exit", () => {
    console.log("El proceso se ha acabado sumerce!")
    setTimeout(() => {
        console.log("ESTE CONSOLE NUNCA SE VA A MOSTRAR")
    }, 0)
})

console.log("ESTE CONSOLE SI SE VA A MOSTRAR")

// usamos beforeExit para un proceso que va a terminar
process.on("beforeExit", () => {
    console.log("El proceso va A TERMINAR sumerce!")
})

// UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.

process.on('uncaughtException', (error, origen) => console.log(error, origen));


// provocamos un error llamando  auna funcion que NO EXISTE para que capture el error y node no muera :p
//funcionquenoexiste()
