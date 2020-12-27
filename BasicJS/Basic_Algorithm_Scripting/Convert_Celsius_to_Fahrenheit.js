/*

Scripting de algoritmo básico: convertir grados Celsius a Fahrenheit

El algoritmo para convertir de Celsius a Fahrenheit es la temperatura en Celsius 9/5, más 32.

Se le da una variable que celsiusrepresenta una temperatura en grados Celsius.
Utilice la variable fahrenheit ya definida y asígnele la temperatura Fahrenheit equivalente
a la temperatura Celsius dada. Utilice el algoritmo mencionado anteriormente para ayudar a convertir la temperatura Celsius a Fahrenheit.

*/

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

console.log(convertToF(30)); // los grados de 30C === 86F
