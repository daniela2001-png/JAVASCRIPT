const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = 0;
while (currentCard != 'spade')
{
// selecciona aleatoriamente un index de cards entre 0 y 3
// length del array concuerda
currentCard = cards[Math.floor(Math.random() *4)];
console.log(currentCard)
}
