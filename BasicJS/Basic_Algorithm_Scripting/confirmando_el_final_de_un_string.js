function confirmEnding(string, target) {
    // Step 1. Use the substr method
    // console.log(string.substr(-target.length)) === 'n'
    if (string.substr(-target.length) === target) {

        // What does "if (string.substr(-target.length) === target)" represents?
        // The string is 'Bastian' and the target is 'n' 
        // target.length = 1 so -target.length = -1
        // if ('Bastian'.substr(-1) === 'n')
        // if ('n' === 'n')

        // Step 2. Return a boolean (true or false)
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n")); // return true!
