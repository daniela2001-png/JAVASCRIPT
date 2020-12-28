/*
Invierta la cadena proporcionada. Es posible que deba convertir la cadena en una matriz antes de poder invertirla.
Tu resultado debe ser una cadena.
*/

function reverseString(str) {
    var x = str.length;
    var strInvertida = "";

    while (x >= 0) {
        //charAt() recibe como parámetro la posición del carácter de la cadena que queremos leer.
        strInvertida = strInvertida + str.charAt(x);
        x--;
    }
    return strInvertida;
}

console.log(reverseString("hi"))
