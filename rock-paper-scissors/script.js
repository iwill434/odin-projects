let humanScore = 0;
let computerScore = 0;

function playGame(){

    function getComputerChoice() {
        let compChoice = Math.random();
        if (compChoice <= 0.33) {
            return "Rock";
        } else if (compChoice <= 0.67) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    let getHumanChoice = prompt("Please enter your input for rock paper scissors: ");

    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        let human = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();
        if (human === computer) {
            console.log(`Draw. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "rock" && computer === "scissors") {
            updateHumanScore.textContent = ++humanScore;
            console.log(`Rock beats scissors. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "rock" && computer === "paper") {
            updateComputerScore.textContent = ++computerScore;
            console.log(`Rock loses to paper. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "paper" && computer === "scissors") {
            updateComputerScore.textContent = ++computerScore;
            console.log(`Paper loses to scissors. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "paper" && computer === "rock") {
            updateHumanScore.textContent = ++humanScore;
            console.log(`Paper beats rock. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "scissors" && computer === "rock") {
            updateComputerScore.textContent = ++computerScore;
            console.log(`Scissors loses to rock. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (human === "scissors" && computer === "paper") {
            updateHumanScore.textContent = ++humanScore;
            console.log(`Scissors beat paper. The current score is Human: ${humanScore} Computer: ${computerScore}`);
        } else {
            console.log('Please input either "rock", "paper", or "scissors"');
        }
    }

    playRound(humanChoice, computerChoice);

}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log(`Human wins with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins with a score of ${computerScore} to ${humanScore}`);
    } else {
        console.log(`Draw of ${humanScore} to ${computerScore}`);
    }
}

function playNow() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
    declareWinner();
}

let updateHumanScore = document.getElementById("humanScore");
let updateComputerScore = document.getElementById("computerScore");