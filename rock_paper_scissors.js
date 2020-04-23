
//Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.The possible outcomes are:Rock destroys scissors.Scissors cut paper.Paper covers rock.If there’s a tie, then the game ends in a draw.Our code will break the game into four parts:Get the user’s choice.Get the computer’s choice.Compare the two choices and determine a winner.Start the program and display the results//

const getUserChoice = userInput => {

userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
    return userInput;  
  else
    return "ERROR: this option was not found";
    };
//test my function//
console.log(getUserChoice('hi'));
console.log(getUserChoice('Rock'));

//create a new function
function getComputerChoice () {
//where randomnumber is a number to value//
const randomnumber =Math.floor(Math.random() * 3)
switch(randomnumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
};
//test my function getComputerChoice
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

//new function determine a winner
const determineWinner = (userChoice,computerChoice) =>  {
if(userChoice === computerChoice)
  return "The game is a tie!";
//Here I will evaluate the cases
if (userChoice === 'rock') {
   if (computerChoice === 'paper') {
        return "Sorry, you lost!";
 } else {
        return "You Won!"
}
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
      return "Sorry, you lost!";
} else {
      return "You Won!";
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
      return "Sorry, you lost!"
} else {
      return "You Won!";
  }
}

if (userChoice === 'bomb')
    return "You Won!";
}
//test the cases
console.log(determineWinner('rock', 'rock'));
//create a new function that start the game
const playGame = () => {  
var userChoice = getUserChoice('bomb');
var computerChoice = getComputerChoice();

console.log(userChoice);
console.log(computerChoice);

console.log(determineWinner(userChoice, computerChoice));
}
playGame();
