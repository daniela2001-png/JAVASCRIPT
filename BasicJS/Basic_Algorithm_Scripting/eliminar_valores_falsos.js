/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
    // como sabemos si es true sera distitno de false entonces creamos un nuevo array con solo valores ciertos
    let array = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i]) {
            array.push(arr[i])
        }
    }
    return array
}

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
