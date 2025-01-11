// Rock paper scissors game:
// 1. Get computer choice
// 2. Get human choice
// 3. Declare scores
// 4. Write logic for a single round
// 5. Write logic for an entire game

// Still has a bug where 1234123123 type number results in a tie

// Scores
let humanScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Get human choice
function getHumanChoice() {
    return prompt("Enter your choice: rock," +
        " paper, or scissors");
}

// Check human input
function checkHumanChoice(humanChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
        if (!(lowerHumanChoice === "rock" || lowerHumanChoice === "paper" || lowerHumanChoice === "scissors")) {
            console.log("Input must be rock, paper, or scissors only");
            return getHumanChoice();
        }
        else {
            return lowerHumanChoice;
        }
}

// Convert computer input to string
function computerConvert(computerChoice) {
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else if (computerChoice === 2) {
        return "scissors";
    }
}

// single round
function playRound(humanChoice, convertComputerChoice) {
    if ((humanChoice === "rock") && (convertComputerChoice === "scissors")){
        return "win";
    }
    else if ((humanChoice === "rock") && (convertComputerChoice === "paper")){
        return "lose";
    }
    else if ((humanChoice === "paper") && (convertComputerChoice === "rock")){
        return "win";
    }
    else if ((humanChoice === "paper") && (convertComputerChoice === "scissors")){
        return "lose";
    }
    else if ((humanChoice === "scissors") && (convertComputerChoice === "paper")){
        return "win";
    }
    else if ((humanChoice === "scissors") && (convertComputerChoice === "rock")){
        return "lose";
    }
    else if (humanChoice === convertComputerChoice) {
        return "tie";
    }
}

for (let i = 0; i < 5; i++){
    let computerChoice = getComputerChoice();
    let convertComputerChoice = computerConvert(computerChoice);
    let humanChoice = checkHumanChoice(getHumanChoice());
    let result = playRound(humanChoice, convertComputerChoice);

    if (result === "win") {
        console.log(`You win! ${humanChoice} beats ${convertComputerChoice}`)
        humanScore ++;
    }
    else if (result === "lose") {
        console.log(`You lose! ${humanChoice} loses to ${convertComputerChoice}`)
        computerScore ++;
    }
    else {
        console.log("Tie game!");
    }
}


