function computerPlay () {
    scaledNumber = Math.floor((Math.random() * 3) + 1);

    if (scaledNumber === 1) {
        console.log("Computer chose Rock");
        return 'Rock';
    } else if (scaledNumber === 2) {
        console.log("Computer chose Paper");
        return 'Paper';
    } else if (scaledNumber === 3) {
        console.log("Computer chose Scissors");
        return 'Scissors';
    }
}

let userInput = prompt('Type in "Rock", "Paper" or "Scissors": ');
function userSelection (userInput) {
    playerChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    console.log(`You chose ${playerChoice}`);
    return playerChoice;
} 

let playerSelection = userSelection(userInput);
let computerSelection = computerPlay();

function gameRound (computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!")
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log("You win, Rock beats Scissors!");
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log("You lose, Paper beats Rock!");
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log("You lose, Scissors beats Paper");
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log("You win, Paper beats Rock!");
    } else if (playerSelection === 'Scissors' && computerPlay === 'Paper') {
        console.log("You win, Scissors beats Paper!");
    } else if (playerSelection === 'Scissors' && computerPlay === 'Rock') {
        console.log("You lose, Rock beats Scissors!");
    }
}

gameRound(computerSelection, playerSelection);
