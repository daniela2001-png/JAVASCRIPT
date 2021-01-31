/*
Scripting de algoritmo intermedio: todo sea verdad

Compruebe si el predicado (segundo argumento) es veraz en todos los elementos de una colección (primer argumento).
En otras palabras, se le da una colección de matriz de objetos. El predicado preserá una propiedad de objeto y debe devolver truesi su valor es truthy. De lo contrario, regrese false.
En JavaScript, los truthyvalores son valores que se traducen truecuando se evalúan en un contexto booleano.
Recuerde, puede acceder a las propiedades del objeto mediante notación de puntos o []notación.

*/

const truthCheck = (collection, pre) => {
    return collection.every(element =>
        element.hasOwnProperty(pre) && element[pre]
    )
}

// return true
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "female" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));


// return false
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"))
