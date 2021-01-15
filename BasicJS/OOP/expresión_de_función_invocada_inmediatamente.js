/*

Programación orientada a objetos: comprender la expresión de función invocada inmediatamente (IIFE)
Un patrón común en JavaScript es ejecutar una función tan pronto como se declara:

*/
(function () {
    console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

/*
Tenga en cuenta que la función no tiene nombre y no se almacena en una variable. Los dos paréntesis ()
al final de la expresión de la función hacen que se ejecute o invoque inmediatamente.
Este patrón se conoce como expresión de función invocada inmediatamente o IIFE */

/* Vuelva a escribir la función makeNesty elimine su llamada para que sea una expresión de función anónima
invocada inmediatamente (IIFE). */

(function () {
    console.log("A cozy nest is ready");
})();

