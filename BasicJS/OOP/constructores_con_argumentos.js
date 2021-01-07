/*
Programación orientada a objetos: amplíe los constructores para recibir argumentos
Los constructores Birdy Dogdel último desafío funcionaron bien.
Sin embargo, observe que todos los Birds que se crean con el Bird constructor
se llaman automáticamente Albert, son de color azul y tienen dos patas.
¿Qué pasa si quieres pájaros con diferentes valores de nombre y color?
Es posible cambiar las propiedades de cada ave manualmente, pero eso sería mucho trabajo:
*/

function Bird() {
    this.name = "";
    this.color = "";
    this.numLegs = 2;
}

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
console.log(swan);

/*
Suponga que está escribiendo un programa para realizar un seguimiento de cientos o incluso miles de aves
diferentes en un aviario. Se necesitaría mucho tiempo para crear todas las aves y luego cambiar
las propiedades a diferentes valores para cada una.
Para crear más fácilmente diferentes Bird objetos, puede diseñar su constructor Bird para aceptar parámetros:
*/
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

/*
Luego, pase los valores como argumentos para definir cada ave única en
el Birdconstructor: let cardinal = new Bird("Bruce", "red");
Esto da una nueva instancia de Birdcon las propiedades de nombre y color configuradas en Bruce y rojo,
respectivamente. La numLegspropiedad todavía se establece en 2. cardinalTiene estas propiedades:
*/
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2

/*
El constructor es más flexible. Ahora es posible definir las propiedades para cada uno Birden
el momento de su creación, que es una de las formas en que los constructores de JavaScript son tan útiles.
Agrupan objetos en función de características y comportamientos compartidos y definen un plan que automatiza
su creación.
*/

/*
Crea otro Dog constructor. Esta vez, configúrelo para que tome los parámetros name y color 
tenga la propiedad numLegs fijada en 4.
Luego cree una nueva Dog guardada en una variable terrier.
Páselo dos cadenas como argumentos para las propiedades name y color.
*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Luna", "Black");
console.log(terrier); // a new object was created!
