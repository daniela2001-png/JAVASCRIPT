/*
Expresiones regulares: especifique solo el número más bajo de coincidencias:

Puede especificar el número inferior y superior de patrones con especificadores de cantidad utilizando llaves.
A veces, solo desea especificar el número inferior de patrones sin límite superior.

Para especificar solo el número menor de patrones, mantenga el primer número seguido de una coma.

*/

// Por ejemplo, para hacer coincidir solo la cadena "hah"con la letra que aaparece al MENOS 3 veces, su expresión regular sería /ha{3,}h/

// PARA QUE HAGA MATCH CON ES EREGEX LA "a" DEBE APARECER MINIMO 3 VECES O MAS DE 3 Y SHA :3
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
