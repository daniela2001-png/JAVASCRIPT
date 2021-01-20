/*

Programación funcional: implementar mapa en un prototipo

Como ha visto en la aplicación Array.prototype.map(), o simplemente map()antes, el mapmétodo devuelve una matriz de la misma longitud que la que se llamó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga.

En otras palabras, mapes una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

Puede aprender mucho sobre el mapmétodo si implementa su propia versión. Se recomienda utilizar un forbucle o Array.prototype.forEach().

Escriba el suyo Array.prototype.myMap(), que debería comportarse exactamente igual Array.prototype.map(). No debe utilizar el mapmétodo integrado . Se Arraypuede acceder a la instancia en el myMapmétodo usando this.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // console.log(this) === [23, 65, 98, 5]
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});
console.log(new_s) // [46, 130, 196, 10]
