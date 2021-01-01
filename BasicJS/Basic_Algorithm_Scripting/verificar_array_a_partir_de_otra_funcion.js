/*
Scripting de algoritmo básico: Finders Keepers
Cree una función que mire a través de una matriz arry devuelva el primer elemento que pasa una 'prueba de verdad'.
Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true.
Si ningún elemento pasa la prueba, regrese undefined.
*/
function findElement(arr, func) {
    var num = 0;
    for (let i = 0; i <= arr.length; i++) {
        num = arr[i];
        // aqui verifico si ese numero del arreglo cumple la condicion de ser par pasandolo a la función que hace eso sino retorno undefined
        if (func(num)) {
            return num
        }
    }
    return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // retorna el 1er numero dentro del array dado que encontro que paso la prueba de la funcion dada === (2)
