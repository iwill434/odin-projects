let humanScore = 0;
let computerScore = 0;

function declareWinner() {
    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore) {
            console.log(`Human wins with a score of ${humanScore} to ${computerScore}`);
            winnerMessage.textContent = `Human wins with a score of ${humanScore} to ${computerScore}`;
            container.appendChild(winnerMessage);
        } else if (computerScore > humanScore) {
            console.log(`Computer wins with a score of ${computerScore} to ${humanScore}`);
            winnerMessage.textContent = `Computer wins with a score of ${computerScore} to ${humanScore}`;
            container.appendChild(winnerMessage);
        } else {
            console.log(`Draw of ${humanScore} to ${computerScore}`);
            winnerMessage.textContent = `Draw of ${humanScore} to ${computerScore}`;
            container.appendChild(winnerMessage);
        }
    }
}

function playRock() {
    let humanChoice = "rock";
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
    
        let computerChoice = getComputerChoice();
    
        function playRound(humanChoice, computerChoice) {
            let human = humanChoice.toLowerCase();
            let computer = computerChoice.toLowerCase();
            if (human === computer) {
                console.log(`Draw. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Draw.`;
                container.appendChild(roundMessage);
            } else if (human === "rock" && computer === "scissors") {
                updateHumanScore.textContent = ++humanScore;
                console.log(`Rock beats scissors. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Rock beats scissors.`;
                container.appendChild(roundMessage);
            } else if (human === "rock" && computer === "paper") {
                updateComputerScore.textContent = ++computerScore;
                console.log(`Rock loses to paper. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Rock loses to paper.`;
                container.appendChild(roundMessage);
            } else {
                console.log('Please input either "rock", "paper", or "scissors"');
            }
        }
    
        playRound(humanChoice, computerChoice);
        declareWinner();
    }
    playGame();
}

function playPaper() {
    let humanChoice = "paper";
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
    
        let computerChoice = getComputerChoice();
    
        function playRound(humanChoice, computerChoice) {
            let human = humanChoice.toLowerCase();
            let computer = computerChoice.toLowerCase();
            if (human === computer) {
                console.log(`Draw. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Draw.`;
                container.appendChild(roundMessage);
            } else if (human === "paper" && computer === "scissors") {
                updateComputerScore.textContent = ++computerScore;
                console.log(`Paper loses to scissors. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Paper loses to scissors.`;
                container.appendChild(roundMessage);
            } else if (human === "paper" && computer === "rock") {
                updateHumanScore.textContent = ++humanScore;
                console.log(`Paper beats rock. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Paper beats rock.`;
                container.appendChild(roundMessage);
            } else {
                console.log('Please input either "rock", "paper", or "scissors"');
            }
        }
    
        playRound(humanChoice, computerChoice);
        declareWinner();
    }
    playGame();
}

function playScissors() {
    let humanChoice = "scissors";
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
    
        let computerChoice = getComputerChoice();
    
        function playRound(humanChoice, computerChoice) {
            let human = humanChoice.toLowerCase();
            let computer = computerChoice.toLowerCase();
            if (human === computer) {
                console.log(`Draw. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Draw.`;
                container.appendChild(roundMessage);
            } else if (human === "scissors" && computer === "rock") {
                updateComputerScore.textContent = ++computerScore;
                console.log(`Scissors loses to rock. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Scissors loses to rock.`;
                container.appendChild(roundMessage);
            } else if (human === "scissors" && computer === "paper") {
                updateHumanScore.textContent = ++humanScore;
                console.log(`Scissors beat paper. The current score is Human: ${humanScore} Computer: ${computerScore}`);
                roundMessage.textContent = `Scissors beat paper.`;
                container.appendChild(roundMessage);
            } else {
                console.log('Please input either "rock", "paper", or "scissors"');
            }
        }
    
        playRound(humanChoice, computerChoice);
        declareWinner();
    }
    playGame();
}


let updateHumanScore = document.getElementById("humanScore");
let updateComputerScore = document.getElementById("computerScore");
let roundMessage = document.createElement("div");
let winnerMessage = document.createElement("h1");
winnerMessage.style.color = "white";
winnerMessage.style.backgroundColor = "black";