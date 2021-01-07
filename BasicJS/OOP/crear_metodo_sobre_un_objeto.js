/*
Programación orientada a objetos: crear un método en un objeto
Los objetos pueden tener un tipo especial de propiedad, llamado método .

Los métodos son propiedades que son funciones. 
Esto agrega un comportamiento diferente a un objeto. Aquí está el duck ejemplo con un método:
*/

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () { return "The name of this duck is " + duck.name + "."; }
};
duck.sayName(); // Returns "The name of this duck is Aflac."

// ejemplo: Usando el dogobjeto, dale un método llamado sayLegs. El método debe devolver la oración "Este perro tiene 4 patas".
let dog = {
    name: "Luna",
    numLegs: 4,
    sayLegs: function () { return `Este perro tiene ${dog.numLegs} patas.` }
};

console.log(dog.sayLegs()); // Este perro tiene 4 patas.




