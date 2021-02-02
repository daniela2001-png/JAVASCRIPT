/*ES6: crear un respaldo de exportación con exportación predeterminada
En la exportlección, aprendió sobre la sintaxis a la que se hace referencia como exportación con nombre . Esto le permitió hacer que múltiples funciones y variables estuvieran disponibles para su uso en otros archivos.

Hay otra exportsintaxis que necesita conocer, conocida como exportación predeterminada . Por lo general, utilizará esta sintaxis si solo se exporta un valor de un archivo. También se utiliza para crear un valor de respaldo para un archivo o módulo.

A continuación se muestran ejemplos que utilizan export default:

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
Dado que export defaultse utiliza para declarar un valor de reserva para un módulo o archivo, solo puede tener un valor como exportación predeterminada en cada módulo o archivo. Además, no se puede utilizar export defaultcon var, letoconst

La siguiente función debe ser el valor de reserva para el módulo. Agregue el código necesario para hacerlo.

*/

export default function subtract(x, y) {
    return x - y;
}
