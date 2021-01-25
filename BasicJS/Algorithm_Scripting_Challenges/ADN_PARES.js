/*
Scripting de algoritmo intermedio: emparejamiento de ADN

A la cadena de ADN le falta el elemento de emparejamiento. Tome cada carácter, obtenga su par y devuelva los resultados como una matriz 2d.

Los pares de bases son un par de AT y CG. Haga coincidir el elemento que falta con el carácter proporcionado.

Devuelve el carácter proporcionado como el primer elemento de cada matriz.

Por ejemplo, para la entrada GCG, devuelve [["G", "C"], ["C", "G"], ["G", "C"]]

El personaje y su par se emparejan en una matriz, y todas las matrices se agrupan en una matriz encapsulante.

*/

/*

CASOS:

pairElement("ATCGA")debería volver [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

Aprobado
pairElement("TTGAG")debería volver [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

Aprobado
pairElement("CTCTA")debería volver [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/
function pairElement(str) {
    let ADN = {
        "G": ["G", "C"],
        "C": ["C", "G"],
        "T": ["T", "A"],
        "A": ["A", "T"]
    }
    let array = []
    for (let i = 0; i <= str.length - 1; i++) {

        if (str[i] === "G") {
            array.push(ADN["G"])
        }
        if (str[i] === "C") {
            array.push(ADN["C"])
        }
        if (str[i] === "T") {
            array.push(ADN["T"])
        }
        if (str[i] === "A") {
            array.push(ADN["A"])
        }
    }
    return array
}

console.log(pairElement("GCG"))