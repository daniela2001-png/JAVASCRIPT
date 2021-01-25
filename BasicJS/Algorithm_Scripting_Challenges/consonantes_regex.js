/*
Scripting de algoritmo intermedio: Pig Latin

Pig Latin es una forma de alterar las palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y agregue "ay".

- Si una palabra comienza con una vocal, simplemente agregue "camino" al final.

Traduce la cadena proporcionada a Pig Latin. Se garantiza que las cadenas de entrada sean palabras en inglés en minúsculas.

*/


/*
translatePigLatin("california") debe devolver "aliforniacay".

Aprobado
translatePigLatin("paragraphs") debe devolver "aragraphspay".

Aprobado
translatePigLatin("glove") debe devolver "Oveglay".

Aprobado
translatePigLatin("algorithm") debería devolver "algorítmway".

Aprobado
translatePigLatin("eight") debe devolver "eightway".

Aprobado
Debe manejar palabras donde la primera vocal se encuentra en medio de la palabra. translatePigLatin("schwartz")debe devolver "artzschway".

Aprobado
Debe manejar palabras sin vocales. translatePigLatin("rhythm")debería devolver "rhythmay".

*/

function translatePigLatin(str) {
    /* let re = new RegExp(/^[ae|io|u]/, 'g')
     if (str.match(re)){
       str  += "way"
     */
    let regex = /^[^aeiou]+/gm;
    let con = str.match(regex); // me trae la palabra con la que hace match y retrona null si no hay match
    // sino empieza por consonante agregamos al final "way"
    if (con == null) {
        str = str.concat('way');
    }
    // sino reemplazmaos las consonates por un string vacio y agregamos el match con el "ay" al final
    // auqnue es mejor usar concat para no mutar el string original (programacion funcional)
    else {
        str = str.replace(regex, '')
        str += con + "ay"
    }
    return str;
}


console.log(translatePigLatin("california")) // aliforniacay
