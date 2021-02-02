/*
ES6: crear cadenas con literales de plantilla
Una nueva característica de ES6 es la plantilla literal . Este es un tipo especial de cuerda que facilita la creación de cuerdas complejas.

Los literales de plantilla le permiten crear cadenas de varias líneas y utilizar funciones de interpolación de cadenas para crear cadenas.

Considere el siguiente código:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
Allí pasaron muchas cosas. En primer lugar, el ejemplo utiliza `comillas inversas ( ), no comillas ( 'o "), para ajustar la cadena. En segundo lugar, observe que la cadena es de varias líneas, tanto en el código como en la salida. Esto ahorra la inserción \ndentro de cadenas. La ${variable}sintaxis utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrá que usar la concatenación con el +operador. Para agregar variables a cadenas, simplemente suelte la variable en una cadena de plantilla y envuélvala con ${y }. De manera similar, puede incluir otras expresiones en su literal de cadena, por ejemplo ${a + b}. Esta nueva forma de crear cadenas le brinda más flexibilidad para crear cadenas robustas.

Utilice la sintaxis literal de plantilla con comillas inversas para crear una matriz de licadenas de elementos de lista ( ). El texto de cada elemento de la lista debe ser uno de los elementos de la matriz de la failurepropiedad del resultobjeto y tener un classatributo con el valor text-warning. La makeListfunción debería devolver la matriz de cadenas de elementos de la lista.

Utilice un método iterador (cualquier tipo de bucle) para obtener la salida deseada (que se muestra a continuación).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

*/

// solucion => salida epserada ==  ['<li class="text-warning">no-var</li>', '<li class="text-warning">var-on-top</li>', '<li class="text-warning">linebreak</li>']

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions", "daniela_bella"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    // Only change code above this line
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return (failureItems);
}
// nota si le mando todo el objeto retorna una lista vacia pero si accedo a sus properties nop :p
const failuresList = makeList(result.skipped);
console.log(failuresList);

