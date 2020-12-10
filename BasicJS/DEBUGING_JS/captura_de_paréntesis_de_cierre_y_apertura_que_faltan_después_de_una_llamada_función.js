/*
Depuración: captura de paréntesis de cierre y apertura que faltan después de una llamada de función

Cuando una función o método no acepta ningún argumento,
puede que olvide incluir los paréntesis de apertura y cierre (vacíos) al llamarlo.
A menudo, el resultado de una llamada a una función se guarda en una variable para otro uso en su código.
Este error se puede detectar registrando los valores de las variables (o sus tipos)
en la consola y viendo que una está establecida en una referencia de función,
en lugar del valor esperado que devuelve la función.

*/

// Las variables del siguiente ejemplo son diferentes:
function myFunction() {
    return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"

// Corrija el código para que la variable resultse establezca en el valor devuelto al llamar a la función getNine.
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);
