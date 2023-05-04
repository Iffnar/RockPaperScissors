let computerScore = 0;
let playerScore = 0;  
let computerSelection;
const fightLog = document.querySelector(".fightLog");
const results = document.querySelector(".results")




//determine win, loss or tie
// if playerSelection beats computerSelection alert victory-message, otherwise defeat-message 
function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    computerSelection = getComputerSelection();
    console.log(computerSelection)
   
if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    gameTally(computerScore, playerScore);
    fightLog.textContent = `You win! Rock beats Scissors --> Player: ${playerScore} Computer: ${computerScore}`
    
} else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    gameTally(computerScore, playerScore);
    fightLog.textContent = `You win! Paper beats Rock --> Player: ${playerScore} Computer: ${computerScore}`
   
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    gameTally(computerScore, playerScore);
    fightLog.textContent =`You win! Scissors beat Paper --> Player: ${playerScore} Computer: ${computerScore}`
} else if (playerSelection === computerSelection) {
    gameTally(computerScore, playerScore);
    fightLog.textContent =`It\`s a tie... --> Player: ${playerScore} Computer: ${computerScore}`    
   
} else {
    computerScore++;
    fightLog.textContent =`You lose! ${computerSelection} beats ${playerSelection} --> Player: ${playerScore} Computer: ${computerScore}`;
    gameTally(computerScore, playerScore);
} 
} 


//button functionality: on click play a round with chosen weapon
const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => playRound("rock", computerSelection));

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () =>  playRound("paper", computerSelection));

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () =>  playRound("scissors", computerSelection));

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => location.reload());



// game();

// //play five rounds and give a tally at the end
// function game() {
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());
//     console.log(playRound());
//     gameTally(computerScore, playerScore);     
// }

//evaluates the total scores of player and computer and returns a corresponding message
function gameTally(computerScore, playerScore) {
    results.textContent = "I work";     
    if (computerScore === 3 && playerScore < 3) {
        results.textContent = "You`re defeated. Can you let that stand??"; 
    } else if(computerScore === 3 && playerScore === 3) {
        results.textContent = "It`s a tie! That`s pathetic, don`t you think?";
    } else if (playerScore === 3 && computerScore < 3) {
        results.textContent = "Winner winner! Chicken dinner!";
    }    
} 

//get computer Selection from random number between 1 and 3 and return corresponding choice
function getComputerSelection() {
    let randomNumber = ((Math.floor((Math.random()*3)+1)));
    if(randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissors";
    } return "paper";
} 


    