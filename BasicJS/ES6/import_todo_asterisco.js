/*
ES6: use * para importar todo desde un archivo
Suponga que tiene un archivo y desea importar todo su contenido al archivo actual. Esto se puede hacer con la import * assintaxis. A continuación, se muestra un ejemplo en el que el contenido de un archivo con nombre math_functions.jsse importa a un archivo en el mismo directorio:

import * as myMathModule from "./math_functions.js";
La importdeclaración anterior creará un objeto llamado myMathModule. Este es solo un nombre de variable, puedes nombrarlo como quieras. El objeto contendrá todas las exportaciones desde math_functions.jsél, por lo que puede acceder a las funciones como lo haría con cualquier otra propiedad de objeto. A continuación, le mostramos cómo puede utilizar las funciones addy subtractque se importaron:

myMathModule.add(2,3);
myMathModule.subtract(5,3);

El código de este archivo requiere el contenido del archivo:, string_functions.jsque está en el mismo directorio que el archivo actual. Utilice la import * assintaxis para importar todo, desde el archivo a un objeto llamado stringFunctions.

*/

// Only change code above this line
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
