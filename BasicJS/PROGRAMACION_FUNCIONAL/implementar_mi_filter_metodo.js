/*

Programación funcional: implementar el método de filtro en un prototipo

Puede aprender mucho sobre el filtermétodo si implementa su propia versión.
Se recomienda utilizar un for bucle o Array.prototype.forEach().

Escriba el suyo Array.prototype.myFilter(),
que debería comportarse exactamente igual Array.prototype.filter().
No debe utilizar el filter método integrado.
Se Array puede acceder a la instancia en el myFilter método usando this.

*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    let myarray = []
    // this contiene la lista s osea this == [23, 65, 98, 5]
    this.map(numero => {
        // verificamos si el numero cumple con la condicion osea si retorna true!
        if (callback(numero) === true) {
            // subimos el numero mas no el true que retorne el callback!
            myarray.push(numero)
        }
    })
    // retornamos el arreglo ya filtrado!
    return myarray
}
let test = s.myFilter(function (numero) {
    return numero % 2 == 1;
})

console.log(test) // [ 23, 65, 5 ]
