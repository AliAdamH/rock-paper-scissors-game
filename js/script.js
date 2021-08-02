
let container = document.querySelector('#container');
let result = document.createElement('div');
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let scores = document.createElement('div');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
container.appendChild(result);
result.classList.add('result');
scores.classList.add('result');
container.appendChild(scores);

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 33) {
        return "rock";
    } else if (randomNumber > 66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function game (playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {
        result.textContent = `Round ${roundNumber} :  It's a tie !`;
    }
    switch(true){

        case (playerSelection === 'rock' && computerSelection === 'scissors'): 
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            playerScore++;
            result.textContent = `Round ${roundNumber} : You win ! ${playerSelection} beats ${computerSelection}`;
            break;

        case (computerSelection=== 'rock' && playerSelection === 'scissors'): 
        case (computerSelection === 'paper' && playerSelection === 'rock'):
        case (computerSelection === 'scissors' && playerSelection === 'paper'):
            computerScore++;
            result.textContent = `Round ${roundNumber} : You lose ! ${computerSelection} beats ${playerSelection}`;
    }
    
}

function playRound (playerSelection) {
    playerSelection = this.value;
    computerSelection = computerPlay();
    game(playerSelection,computerSelection);
    if (playerScore === 5) {
        scores.textContent = 'You win the game!';
        stopGame();
    }
    else if (computerScore === 5) {
        scores.textContent = 'You lose the game!'
        stopGame();
    } else {
        scores.textContent = ` The player's score is: ${playerScore},
        The computer's score is : ${computerScore}`;
    roundNumber++;
    }
}


function stopGame() {
    buttons.forEach(button => button.removeEventListener('click', playRound));
    const resetbtn = document.createElement('button');
    resetbtn.textContent = 'Click to reset the game';
    resetbtn.classList.add('reset-btn');
    container.appendChild(resetbtn);
    resetbtn.addEventListener('click', () => { location.reload();
        return false;
    });
    return;
}