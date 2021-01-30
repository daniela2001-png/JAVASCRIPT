function steamrollArray(arr) {
    /*
    Bueno Daniela como ya te diste de cuenta despues de buscar la mejor solucion para este tipo de casos y la respuesta es la recursión!
    asi que podemos vovler a llamar a nuestr funcion ara que haga un for each o for normal cada vez que el lemeento que le pasemos sea si si un array y la llame haste que deje de ser un array el elemto que le pasemos por ejemplo (string, numbers, bools)
    si tenemos estso valores podemos pshuearlo a un array vacio sin lio sino haremos la recuriosn ara que llame  a nuestr funcion mientras el elemento que le pasemos sea un array (este será nuestro caso base (mientras el elemento que estemos mirando sera estrictamente un array)) bueno  ahora manos en el teclado
    
     */
    let flatArray = []
    arr.forEach((elemento) => {
        if (Array.isArray(elemento)) {
            flatArray.push(...steamrollArray(elemento)) // aqui esta la magia :3 el spread operator es nuestro amigo :v
        }
        else {
            flatArray.push(elemento)
        }
    })
    return flatArray;
}
console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
