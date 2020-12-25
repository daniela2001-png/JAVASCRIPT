/*
Estructuras de datos básicas: nombres de propiedades de acceso con notación entre corchetes

En el primer desafío de objetos mencionamos el uso de la notación entre corchetes como una forma de acceder
a los valores de propiedad mediante la evaluación de una variable.
Por ejemplo, imagine que nuestro foodsobjeto se utiliza en un programa para la caja registradora de un supermercado.
Tenemos alguna función que establece el selectedFoody queremos verificar nuestro foods
objeto para detectar la presencia de ese alimento. Esto podría verse así:
*/
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
/*
Este código evaluará el valor almacenado en la selectedFoodvariable y devolverá el valor de esa clave
en el foods objeto, o undefined si no está presente.
La notación entre corchetes es muy útil porque a veces las propiedades de los objetos
no se conocen antes del tiempo de ejecución o necesitamos acceder a ellas de una manera más dinámica.
*/


/*
Hemos definido una función, checkInventory que recibe un elemento escaneado como argumento.
Devuelve el valor actual de la scannedItem clave en el foods objeto.
Puede suponer que solo se proporcionarán claves válidas como argumento para checkInventory.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
}

console.log(checkInventory("apples")); // return 25 !
