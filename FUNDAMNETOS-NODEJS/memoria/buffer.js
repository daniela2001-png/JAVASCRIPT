/*

La Buffer clase en Node.js está diseñada para manejar datos binarios sin procesar.
Cada búfer corresponde a una parte de la memoria bruta asignada fuera de V8.
Los búferes actúan como matrices de números enteros,
pero no se pueden cambiar de tamaño y tienen un montón de métodos específicamente para datos binarios.
Los enteros en un búfer representan cada uno un byte y, por lo tanto, están limitados
a valores de 0 a 255 inclusive.
Cuando utilice console.log() para imprimir la Buffer instancia, obtendrá una cadena de valores
en valores hexadecimales.

*/
let abc = Buffer.alloc(26);
console.log(abc); // buffer con bytes sin valor

for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97; // 97 ==a 98 == b y asi hasta llegar a la iteracion numero 26 osea (z) :3
}
console.log(abc); // buffer con bytes con valor de 00 a 26 :3
console.log(abc.toString()) // abecedario
