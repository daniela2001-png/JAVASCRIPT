/*

Depuración: tenga cuidado al reinicializar variables dentro de un bucle

A veces es necesario guardar información, incrementar los contadores o restablecer las variables dentro de un ciclo.
Un problema potencial es cuando las variables deben reinicializarse y no lo están, o viceversa.
Esto es particularmente peligroso si restablece accidentalmente la variable
que se utiliza para la condición del terminal, lo que provoca un bucle infinito.

La impresión de valores de variables con cada ciclo de su ciclo mediante el uso console.log()
puede descubrir un comportamiento erróneo relacionado con el restablecimiento o no restablecer una variable.

Se supone que la siguiente función crea una matriz bidimensional con mfilas y ncolumnas de ceros.
Desafortunadamente, no está produciendo el resultado esperado porque la row variable
no se reinicializa (vuelve a ser una matriz vacía) en el ciclo externo.
Corrija el código para que devuelva una matriz correcta de ceros 3x2, que se parece a [[0, 0], [0, 0], [0, 0]].

*/

// solcuion
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
        row = []; // inicializamos la lista row como vacia para que NO tome valores que NO QUEREMOS :3
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix); // print [[0, 0],[0, 0],[0, 0]]
