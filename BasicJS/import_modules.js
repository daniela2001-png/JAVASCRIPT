/*
ES6: reutilizar código JavaScript mediante la importación
importle permite elegir qué partes de un archivo o módulo cargar. En la lección anterior, los ejemplos exportados adddel math_functions.jsarchivo. A continuación, le mostramos cómo puede importarlo para usarlo en otro archivo:

import { add } from './math_functions.js';
Aquí, importencontrará adden math_functions.js, importará solo esa función para que la use e ignore el resto. El ./le dice a la importación que busque el math_functions.jsarchivo en la misma carpeta que el archivo actual. La ruta de archivo relativa ( ./) y la extensión de archivo ( .js) son necesarias cuando se utiliza la importación de esta manera.

Puede importar más de un elemento del archivo agregándolos en la importdeclaración como esta:

import { add, subtract } from './math_functions.js';
Agregue la importdeclaración apropiada que permitirá que el archivo actual use las funciones uppercaseStringy lowercaseStringque exportó en la lección anterior. Estas funciones están en un archivo llamado string_functions.js, que está en el mismo directorio que el archivo actual.

*/

// Only change code above this line
import { uppercaseString, lowercaseString } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");
