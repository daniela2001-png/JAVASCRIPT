/*
Depuración: evitar bucles infinitos con una condición de terminal válida

El tema final es el temido bucle infinito.
Los bucles son excelentes herramientas cuando necesita que su programa
ejecute un bloque de código un cierto número de veces o hasta que se cumpla una condición,
pero necesitan una condición terminal que finalice el bucle.
Es probable que los bucles infinitos congelen o bloqueen el navegador
y provoquen un caos general en la ejecución del programa, algo que nadie quiere.

Había un ejemplo de un bucle infinito en la introducción de esta sección:
no tenía una condición terminal para salir del whilebucle interno loopy(). ¡NO llame a esta función!

Es trabajo del programador asegurarse de que finalmente se alcance la condición del terminal,
que le dice al programa cuándo salir del código de bucle. Un error es aumentar o disminuir
una variable de contador en la dirección incorrecta desde la condición del terminal.
Otro es restablecer accidentalmente un contador o una variable de índice dentro del código de bucle
en lugar de incrementarlo o disminuirlo.
*/

// La myFunc()función contiene un bucle infinito porque la condición del terminal i != 4nunca se evaluará false(y romperá el bucle): ise incrementará en 2 en cada pasada y saltará a la derecha sobre 4 ya que ies extraño comenzar. Corrija el operador de comparación en la condición de terminal para que el bucle solo se ejecute por imenos de o igual a 4.
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
myFunc() // print 2 times "Still going!" :3
