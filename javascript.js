//get choice-input from player (Rock, paper or scissor)
let playerChoice = (prompt("Choose your weapon: Rock, Paper or Scissors"))
console.log("Player chooses "+ playerChoice)

//get random number 
const randomNumber = ((Math.floor((Math.random()*3)+1)));

// convert number to computerChoice
function assignNumber() {
    if(randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Scissors";
    } else computerChoice = "Paper";
      return computerChoice
}
assignNumber();
console.log("Computer chooses "+ computerChoice)

//determine win/loss or tie: 
    //rock wins against scissor
    //scissor wins against paper
    //paper wins against rock
    //same choice is a tie
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose!")
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You lose!")
    } else (console.log("It`s a tie...Try again!"));    
    }   
determineWinner(playerChoice, computerChoice)

//if successful -> display victory message 
//else if display defeat message
//else display a tie message
