let playerWins = 0;
let computerWins = 0;
let ties = 0;
let roundCnt = 1;

game();

function game () {
    
    //Event handlers
    const btnRock = document.querySelector('#btnRock');
    btnRock.addEventListener('click', () => {
        removeScore();
        let computerSelection = computerPlay();
        playRound(computerSelection, 'Rock');
        scoreDisplay();
    });

    const btnPaper = document.querySelector('#btnPaper');
    btnPaper.addEventListener('click', () => {
        removeScore();
        let computerSelection = computerPlay();
        playRound(computerSelection, 'Paper');
        scoreDisplay();
    });

    const btnScissors = document.querySelector('#btnScissors');
    btnScissors.addEventListener('click', () => {
        removeScore();
        let computerSelection = computerPlay();
        playRound(computerSelection, 'Scissors');
        scoreDisplay();
    });
}

function computerPlay () {
    scaledNumber = Math.floor((Math.random() * 3) + 1);

    if (scaledNumber === 1) {
        return 'Rock';
    } else if (scaledNumber === 2) {
        return 'Paper';
    } else if (scaledNumber === 3) {
        return 'Scissors';
    }
};

function playRound (computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        ties += 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerWins += 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerWins += 1;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerWins += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerWins += 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerWins += 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerWins += 1;
    }
};

function scoreDisplay () {
    //player score
    const score = document.querySelector('.score'); 

    const roundTally = document.createElement('h2');
    roundTally.classList.add('roundTally');
    roundTally.textContent = `ROUND ${roundCnt}`;

    const playerTally = document.createElement('div');
    playerTally.classList.add('playerTally');
    playerTally.textContent = `Player Score: ${playerWins}`;

    //computer score
    const computerTally = document.createElement('div');
    computerTally.classList.add('computerTally');
    computerTally.textContent = `Computer score: ${computerWins}`;

    const tieTally = document.createElement('div');
    tieTally.classList.add('tieTally');
    tieTally.textContent = `Ties: ${ties}`

    //appends
    score.appendChild(roundTally);
    score.appendChild(playerTally);
    score.appendChild(computerTally);
    score.appendChild(tieTally);

    //winner declaration
    const totalTally = document.createElement('h3');
    totalTally.classList.add('totalTally');
    
    if (playerWins === 5){
        totalTally.textContent = 'Player wins!';
        score.appendChild(totalTally);

        playerWins = 0;
        computerWins = 0;
        ties = 0;
        roundCnt = 1;

    } else if (computerWins === 5) {
        totalTally.textContent = 'Computer wins!';
        score.appendChild(totalTally);

        playerWins = 0;
        computerWins = 0;
        ties = 0;
        roundCnt = 1;

    } else {
        roundCnt += 1;
    }
}

function removeScore () {
        const score = document.querySelector('.score');
        const playerTally = document.querySelector('.playerTally');
        const computerTally = document.querySelector('.computerTally');
        const tieTally = document.querySelector('.tieTally');
        const roundTally = document.querySelector('.roundTally');
        const totalTally = document.querySelector('.totalTally');

    if (playerTally !== null) {

        score.removeChild(roundTally);
        score.removeChild(playerTally);
        score.removeChild(computerTally);
        score.removeChild(tieTally);

        if (totalTally !== null) {
            score.removeChild(totalTally);
        }
    }
}
