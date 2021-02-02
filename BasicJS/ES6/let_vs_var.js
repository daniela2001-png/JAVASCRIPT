/ES6: Explore las diferencias entre las palabras clave var y let
Uno de los mayores problemas al declarar variables con la varpalabra clave es que puede sobrescribir declaraciones de variables sin errores./

var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'

/Como puede ver en el código anterior, la campervariable se declara originalmente como Jamesy luego se reemplaza para ser David. En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código aumenta de tamaño, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir. Debido a que este comportamiento no arroja ningún error, la búsqueda y corrección de errores se vuelve más difícil.
Se letintrodujo una nueva palabra clave llamada en ES6 para resolver este problema potencial con la varpalabra clave. Si se va a reemplazar varcon letlas declaraciones de variables del código anterior, el resultado sería un error./

let camper = 'James';
let camper = 'David'; // throws an error

/Este error se puede ver en la consola de su navegador. Entonces var, a diferencia de cuando se usa let, una variable con el mismo nombre solo se puede declarar una vez. Tenga en cuenta el "use strict". Esto habilita el modo estricto, que detecta errores de codificación comunes y acciones "inseguras". Por ejemplo:/

"use strict";
x = 3.14; // throws an error because x is not declared
