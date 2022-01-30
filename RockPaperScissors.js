//game();

/*
function game () {

    console.log('This is a best of five rock paper scissors game.')

    let playerWins = 0;
    let computerWins = 0;
    let roundCnt = 1;
    
    for (let i = 0; i < 5; i++){

        console.log(`ROUND ${roundCnt}`);
        roundCnt += 1;

*/
       //user RNG to determine computer's choice 
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

        function playRound (computerSelection, playerSelection) {
            if (playerSelection === computerSelection) {
                console.log("Tie!")
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                console.log("You win, Rock beats Scissors!");
                playerWins += 1;
            } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
                console.log("You lose, Paper beats Rock!");
                computerWins += 1;
            }
            else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                console.log("You lose, Scissors beats Paper");
                computerWins += 1;
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                console.log("You win, Paper beats Rock!");
                playerWins += 1;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                console.log("You win, Scissors beats Paper!");
                playerWins += 1;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                console.log("You lose, Rock beats Scissors!");
                computerWins += 1;
            }
        }

        //Event handlers
        const btnRock = document.querySelector('#btnRock');
        btnRock.addEventListener('click', () => {
            let computerSelection = computerPlay();
            playRound(computerSelection, 'Rock');
        });

        const btnPaper = document.querySelector('#btnPaper');
        btnPaper.addEventListener('click', () => {
            let computerSelection = computerPlay();
            playRound(computerSelection, 'Paper');
        });

        const btnScissors = document.querySelector('#btnScissors');
        btnScissors.addEventListener('click', () => {
            let computerSelection = computerPlay();
            playRound(computerSelection, 'Scissors');
        });

//    }
        /*
        console.log(`You won ${playerWins} times.`)
        console.log(`Computer won ${computerWins} times.`)

        if (playerWins < computerWins){
            console.log('Computer wins best of five.');
        } else if (playerWins > computerWins) {
            console.log('Player wins best of five.');
        } else {
            console.log('There is tie for the best of five!');
        }
        */
//}
