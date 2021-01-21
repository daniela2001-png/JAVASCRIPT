/*

Programación funcional: eliminar elementos de una matriz utilizando un corte en lugar de un empalme

Un patrón común al trabajar con matrices es cuando desea eliminar elementos y conservar el resto de la matriz.
JavaScript ofrece el splice método para esto,
que toma argumentos para el índice de dónde comenzar a eliminar elementos,
luego la cantidad de elementos para eliminar.
Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final.
Sin embargo, el splice método muta la matriz original en la que se invoca.

He aquí un ejemplo:

*/

// array.splice(index_item_todelete, number_items_to_delete)
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]

/*
Como vimos en el último desafío, el slice método no muta la matriz original,
sino que devuelve una nueva que se puede guardar en una variable.
Recuerde que el slice método toma dos argumentos
para que los índices comiencen y terminen el segmento (el final no es inclusivo)
y devuelve esos elementos en una nueva matriz.

Usar el slice método en lugar de splice ayuda a evitar cualquier efecto secundario de mutación de matriz.

*/

function nonMutatingSplice(cities) {
    // retornamos los 1ros 3 elementos de una array sin mutarlo porque estamos usando slice y no splice!
    return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities)); // ["Chicago", "Delhi", "Islamabad"]
