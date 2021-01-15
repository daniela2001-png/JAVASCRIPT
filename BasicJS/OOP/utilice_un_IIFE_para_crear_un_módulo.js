/*
Programación orientada a objetos: utilice un IIFE para crear un módulo

Una expresión de función invocada inmediatamente (IIFE)
se usa a menudo para agrupar funciones relacionadas en un solo objeto o módulo
Por ejemplo, un desafío anterior definió dos mixins:

*/

function glideMixin(obj) {
    obj.glide = function () {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
}

// Podemos agrupar estos mixins en un módulo de la siguiente manera:
let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})(); // The two parentheses cause the function to be immediately invoked

/*

Tenga en cuenta que tiene una expresión de función invocada inmediatamente (IIFE)
que devuelve un objeto motionModule. Este objeto devuelto contiene todos los comportamientos
de mezcla como propiedades del objeto.
La ventaja del patrón del módulo es que todos los comportamientos de movimiento
se pueden empaquetar en un solo objeto que luego puede ser utilizado
por otras partes de su código. Aquí hay un ejemplo que lo usa:
*/

motionModule.glideMixin(duck);
duck.glide();

// Cree un módulo llamado funModulepara envolver los dos mixins isCuteMixiny singMixin. funModuledebe devolver un objeto
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

let objeto1 = {
    name: "daniela",
    age: 19
}

funModule.isCuteMixin(objeto1)
console.log(objeto1.isCute()) // yields true

