/*
Estructuras de datos básicas: agregue pares clave-valor a objetos JavaScript

En su forma más básica, los objetos son solo colecciones de pares clave-valor.
En otras palabras, son piezas de datos ( valores )
asignados a identificadores únicos llamados propiedades ( claves ).

Mira un ejemplo:
*/
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

/*

El código anterior define un objeto de personaje de videojuego Tekken llamado tekkenCharacter.
Tiene tres propiedades, cada una de las cuales se asigna a un valor específico.
Si desea agregar una propiedad adicional, como "origen", puede hacerlo asignando original objeto:

*/
tekkenCharacter.origin = 'South Korea';

/*
Esto usa notación de puntos. Si observara el tekkenCharacterobjeto, ahora incluirá la origin propiedad.
Hwoarang también tenía un cabello anaranjado distinto.
Puede agregar esta propiedad con notación de corchetes haciendo:
*/

tekkenCharacter['hair color'] = 'dyed orange';

/*
La notación entre corchetes es necesaria si su propiedad tiene un espacio o si desea usar una variable
para nombrar la propiedad. En el caso anterior, la propiedad se incluye entre comillas para denotarla
como una cadena y se agregará exactamente como se muestra.
Sin comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable.
Aquí tienes un ejemplo con una variable:
*/
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

// Después de agregar todos los ejemplos, el objeto se verá así:

{
    player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
            human: true,
                origin: 'South Korea',
                    'hair color': 'dyed orange',
                        'eye color': 'brown'
};

// agregue elementos al objeto foods
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(typeof (foods));

