/*
Scripting de algoritmo intermedio: hacer una persona
Complete el constructor del objeto con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Ejecute las pruebas para ver el resultado esperado para cada método.
Los métodos que toman un argumento deben aceptar solo un argumento
y debe ser una cadena.
Estos métodos deben ser los únicos medios disponibles para interactuar con el objeto.


PRUEBAS:
Object.keys(bob).length debe devolver 6.

Aprobado
bob instanceof Person debería devolver verdadero.

Aprobado
bob.firstName debería devolver undefined.

Aprobado
bob.lastName debería devolver undefined.

Aprobado
bob.getFirstName() debería devolver "Bob".

Aprobado
bob.getLastName() debería devolver "Ross".

Aprobado
bob.getFullName() debe devolver "Bob Ross".

Aprobado
bob.getFullName()debería devolver "Haskell Ross" después bob.setFirstName("Haskell").

Aprobado
bob.getFullName()debería devolver "Haskell Curry" después bob.setLastName("Curry").

Aprobado
bob.getFullName()debería devolver "Haskell Curry" después bob.setFullName("Haskell Curry").

Aprobado
bob.getFirstName()debería devolver "Haskell" después bob.setFullName("Haskell Curry").

Aprobado
bob.getLastName()debería devolver "Curry" después bob.setFullName("Haskell Curry").

*/




var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var name = firstAndLast
    //console.log(firstAndLast);
    this.getFullName = function () {
        return name;
    };
    this.getFirstName = () => {
        return name.split(" ")[0];
    }
    this.getLastName = () => {
        return name.split(" ")[1];
    }
    this.setLastName = (last) => {
        name = name.split(" ")[0] + " " + last;
        return name;
    }
    this.setFirstName = (first) => {
        name = first + " " + name.split(" ")[1];
        return name;
    }
    this.setFullName = (firstAndLast) => {
        name = firstAndLast
        return name
    }
};

var bob = new Person('Bob Ross');
console.log(bob.setLastName('hoi'));
