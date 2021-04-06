#!/usr/bin/node

/*
AHORA MIRAREMOS EL MODULO DE CONSOLE EN NODE
Con console podemos imprimir todo tipo de valores por
nuestra terminal:

- console.log: recibe cualquier tipo y lo muestra en el consola.
- console.info: es equivalente a log pero es usado para informar.
- console.error: es equivalente a log pero es usado para errores.
- console.warn: es equivalente a log pero es usado para warning.
- console.table: muestra una tabla a partir de un objeto.
- console.count: inicia un contador autoincremental.
- console.countReset: reinicia el contador a 0.
- console.time: inicia un cronometro en ms.
- console.timeEnd: Finaliza el cronometro.
- console.group: permite agrupar errores mediante identación.
- console.groupEnd: finaliza la agrupación.
- console.clear: Limpia la consola.

*/

// usando grupos de logs se ve tan cute :3
console.group("Presentacion: ")
console.log("HOLA DANIELA")
console.group("RESPUETSA:")
console.log("BALBLABLBALAL")
console.log("BALBLABLBALAL")
console.log("BALBLABLBALAL")
console.groupEnd()
console.groupEnd("Presentacion: ")
console.log("BYE DANIELA")