/*
ES6: Utilice funciones de flecha para escribir funciones anónimas concisas
En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una función como argumento a otra función. En cambio, creamos funciones en línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.

Para lograr esto, a menudo usamos la siguiente sintaxis:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 nos proporciona el azúcar sintáctico para no tener que escribir funciones anónimas de esta manera. En su lugar, puede utilizar la sintaxis de la función de flecha :

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
Cuando no hay un cuerpo de función, y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir la palabra clave returnasí como los corchetes que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una línea:

const myFunc = () => "value";
Este código seguirá regresando valuepor defecto.

Vuelva a escribir la función asignada a la variable magicque devuelve a new Date()para usar la sintaxis de la función de flecha. Además, asegúrese de que no haya nada definido con la palabra clave var.


*/

const magic = () => new Date();
