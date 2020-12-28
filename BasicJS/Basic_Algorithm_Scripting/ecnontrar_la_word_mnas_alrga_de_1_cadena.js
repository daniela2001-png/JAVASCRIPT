/*
Basic Algorithm Scripting: Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    var word = str.split(" ")
    var max = 0;
    for (let i = 0; i < word.length; i++) {
        // aqui ya no podra leer el lenght de la cadena spliteada o mejor aun ser mayor ya que nuestra condicion del for le estamos diciendo hasta que sea igualal largo de la cadena por eso no existe algo mayor al maximo de la misma palabra  
        if (word[i].length > max)
            max = word[i].length;
    }
    return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // returns 6 === "jumped"
