/*

Estructuras de datos básicas: acceda al contenido de una matriz utilizando notación entre corchetes

La característica fundamental de cualquier estructura de datos es, por supuesto,
la capacidad no solo de almacenar datos, sino también de poder recuperarlos cuando lo soliciten.
Entonces, ahora que hemos aprendido cómo crear una matriz,
comencemos a pensar en cómo podemos acceder a la información de esa matriz.

*/

// Cuando definimos una matriz simple como se ve a continuación, hay 3 elementos en ella:
let ourArray = ["a", "b", "c"];

// En una matriz, cada elemento de la matriz tiene un índice . Este índice funciona como la posición de ese elemento en la matriz y cómo se hace referencia a él. Sin embargo, es importante tener en cuenta que las matrices de JavaScript tienen un índice cero , lo que significa que el primer elemento de una matriz está en realidad en la posición cero , no en el primero. Para recuperar un elemento de una matriz, podemos encerrar un índice entre corchetes y agregarlo al final de una matriz, o más comúnmente, a una variable que hace referencia a un objeto de matriz. Esto se conoce como notación entre corchetes . Por ejemplo, si queremos recuperar el "a"de ourArrayy asignarlo a una variable, podemos hacerlo con el siguiente código:
let ourVariable = ourArray[0];
// ourVariable equals "a"

//Además de acceder al valor asociado con un índice, también puede establecer un índice en un valor usando la misma notación:
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];

//Usando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 desde "b", hasta "not b anymore".
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "mami churra";
// Only change code above this line
console.log(myArray);
