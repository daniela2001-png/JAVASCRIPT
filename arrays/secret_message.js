// Using array methods, you will transform an array of strings into a secret message!//
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.pop());
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
secretMessage[7] = 'right'
secretMessage.shift();
secretMessage.unshift('Programming');
let pos = secretMessage.indexOf('get');
let removedItem = secretMessage.splice(pos, 1)
//indexOf cuenta desde cero no desde uno
let pos1 = secretMessage.indexOf('right', 'the', 'first', 'time');
let removedItem1 = secretMessage.splice(pos1, 3)
secretMessage[6] = 'know'
console.log(secretMessage)
console.log(secretMessage.join(' '));
