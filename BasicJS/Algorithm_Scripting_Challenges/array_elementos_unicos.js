/*
Secuencias de comandos de algoritmo intermedio: Unión ordenada

Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final.

Los números únicos deben ordenarse por su orden original, pero la matriz final no debe clasificarse en orden numérico.

Consulte las pruebas de afirmación para ver ejemplos.

*/

function uniteUnique(arr) {
    let array2d = Object.values(arguments)
    let lista = []
    let result = array2d.forEach(matriz => {
        matriz.forEach(numero => {
            lista.push(numero)
        })
    })
    console.log(lista)
    return [... new Set(lista)]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4]
