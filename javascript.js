let computerScore = 0;
let playerScore = 0;  


game();

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    gameTally(computerScore, playerScore);     
}

function gameTally(computerScore, playerScore) {
    if (computerScore > playerScore) {
        console.log("You`re defeated. Can you let that stand??"); 
    } else if(computerScore === playerScore) {
        console.log("It`s a tie! That`s pathetic, don`t you think?") 
    } else console.log("Winner winner! Chicken dinner!")
} 

function playRound() {
    //get playerSelection (Rock, paper or scissor) and announce result
    let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors");

    console.log("Player chooses "+ playerSelection);

    //get computer Selection from random number between 1 and 3 and return corresponding choice
    function getComputerSelection() {
        let randomNumber = ((Math.floor((Math.random()*3)+1)));
        if(randomNumber === 1) {
            return "rock";
        } else if (randomNumber === 2) {
            return "scissors";
        } return "paper";
    } 
    const computerSelection = getComputerSelection();
    console.log("Computer chooses "+ computerSelection)

    //determine win/loss or tie
    // if playerSelection beats computerSelection alert victory-message, otherwise defeat-message 

    if ((playerSelection.toLowerCase()) === "rock" && computerSelection === "scissors") {
        playerScore++;
        return (`You win! Rock beats Scissors --> Player: ${playerScore} Computer: ${computerScore}`)
    } else if ((playerSelection.toLowerCase()) === "paper" && computerSelection === "rock") {
        playerScore++;
        return(`You win! Paper beats Rock --> Player: ${playerScore} Computer: ${computerScore}`)
    } else if ((playerSelection.toLowerCase()) === "scissors" && computerSelection === "paper") {
        playerScore++;
        return (`You win! Scissors beat Paper --> Player: ${playerScore} Computer: ${computerScore}`)
    } else if ((playerSelection.toLowerCase()) === computerSelection) {
        return (`It\`s a tie... --> Player: ${playerScore} Computer: ${computerScore}`)        
    } else {
        computerScore++;
        return(`You lose! ${computerSelection} beats ${playerSelection} --> Player: ${playerScore} Computer: ${computerScore}`);
    } 
} 