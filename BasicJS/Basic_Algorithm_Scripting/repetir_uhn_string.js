/*
Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument)
Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
    let string = "";
    for (let i = 1; i <= num; i++) {
        string += str
    }
    return string
}

console.log(repeatStringNumTimes("abc", 3)); //abcabcabc