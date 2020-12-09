/*
Introducción a los desafíos de depuración
La depuración es una herramienta valiosa y (desafortunadamente) necesaria para los programadores. Sigue la fase de prueba de verificar si su código funciona como se esperaba y descubrir que no. La depuración es el proceso de encontrar exactamente lo que no funciona y solucionarlo. Después de dedicar tiempo a crear un bloque de código brillante, es difícil darse cuenta de que puede haber errores. Estos problemas generalmente se presentan en tres formas:

errores de sintaxis que impiden la ejecución de un programa
errores en tiempo de ejecución cuando el código no se ejecuta o tiene un comportamiento inesperado
errores semánticos (o lógicos) cuando el código no hace lo que se supone que debe hacer.
Los editores de código modernos (y la experiencia) pueden ayudar a identificar errores de sintaxis. Los errores semánticos y de tiempo de ejecución son más difíciles de encontrar. Pueden hacer que su programa se bloquee, hacer que se ejecute para siempre o dar una salida incorrecta. Piense en la depuración como tratar de comprender por qué su código se comporta como es. Ejemplo de un error de sintaxis, a menudo detectado por el editor de código:

funtcion willNotWork( 
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
A continuación, se muestra un ejemplo de un error en tiempo de ejecución, que a menudo se detecta mientras se ejecuta el programa:

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
Ejemplo de un error semántico, que a menudo se detecta después de probar la salida del código:

function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
La depuración es frustrante, pero ayuda a desarrollar (y seguir) un enfoque paso a paso para revisar su código. Esto significa verificar los valores intermedios y los tipos de variables para ver si son lo que deberían ser. Puede comenzar con un simple proceso de eliminación.

Por ejemplo, si la función A funciona y devuelve lo que se supone que debe hacer, entonces la función B puede tener el problema. O comience a verificar valores en un bloque de código desde el medio para intentar reducir el espacio de búsqueda a la mitad. Un problema en un lugar indica un error en la primera mitad del código. Si no, es probable que sea en el segundo.

Esta sección cubrirá un par de herramientas útiles para encontrar errores y algunas de las formas comunes que adoptan. Afortunadamente, la depuración es una habilidad que se puede aprender y que solo requiere un poco de paciencia y práctica para dominarla.

*/