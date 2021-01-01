/*
Compruebe si un valor está clasificado como primitivo booleano. Devuelve verdadero o falso.

Las primitivas booleanas son verdaderas y falsas.

*/


function booWho(bool) {
    if (bool === true || bool === false)
        return true;
    return false;
}

console.log(booWho(null)); // prints false
