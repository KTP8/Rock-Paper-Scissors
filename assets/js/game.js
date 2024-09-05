const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;
let lastComputerChoice = null;
let lastPlayerChoice = null;

// Function to get computer choice based on difficulty
function getComputerChoice(difficulty) {
    if (difficulty === "easy") {
        return choices[Math.floor(Math.random() * choices.length)];
    } else if (difficulty === "medium") {
        if (Math.random() < 0.8) {
            return choices[Math.floor(Math.random() * choices.length)];
        } else {
            return lastPlayerChoice === null ? choices[Math.floor(Math.random() * choices.length)] : getCounterChoice(lastPlayerChoice);
        }
    } else if (difficulty === "hard") {
        if (Math.random() < 0.6) {
            return choices[Math.floor(Math.random() * choices.length)];
        } else {
            return lastPlayerChoice === null ? choices[Math.floor(Math.random() * choices.length)] : getCounterChoice(lastPlayerChoice);
        }
    }
}

// Function to determine what beats the player's last choice
function getCounterChoice(playerChoice) {
    const winMap = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock",
        "Lizard": "Rock",
        "Spock": "Lizard"
    };
    return winMap[playerChoice];
}

// Function to update the score display
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerScoreBottom").textContent = playerScore;
    document.getElementById("computerScoreBottom").textContent = computerScore;
}

// Function to update remaining attempts
function updateAttempts() {
    document.getElementById("attemptsRemaining").textContent = `${attempts}/10 attempts remaining`;
}

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }

    const winConditions = {
        "Rock": ["Scissors", "Lizard"],
        "Paper": ["Rock", "Spock"],
        "Scissors": ["Paper", "Lizard"],
        "Lizard": ["Spock", "Paper"],
        "Spock": ["Scissors", "Rock"]
    };
    return winConditions[playerChoice].includes(computerChoice) ? "player" : "computer";
}

// Function to handle player's choice
function playerChoice(choice) {
    if (attempts <= 0) {
        alert("Game over! Click 'OK' to reset.");
        resetGame();
        return;
    }

    lastPlayerChoice = choice;
    const difficulty = document.getElementById('difficulty').value;
    const computerChoice = getComputerChoice(difficulty);

    // Map computer choice to the correct image path
    const imagePaths = {
        "Rock": "https://imgur.com/femz9LO.jpg",
        "Paper": "https://imgur.com/DtQLv5q.jpg",
        "Scissors": "https://imgur.com/XGDSf2s.jpg",
        "Lizard": "https://imgur.com/AuVNy9m.jpg",
        "Spock": "https://imgur.com/PpHIiny.jpg"
    };

    document.getElementById("computerChoiceImg").src = imagePaths[computerChoice];
    document.getElementById("computerChoiceImg").alt = computerChoice;

    const winner = determineWinner(choice, computerChoice);
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }

    attempts--;
    updateScore();
    updateAttempts();

    if (attempts <= 0) {
        alert(`Game over! Final Score - YOU: ${playerScore} | COMPUTER: ${computerScore}`);
        resetGame();
    }

    lastComputerChoice = computerChoice;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    attempts = 10;
    updateScore();
    updateAttempts();

    // Reset the computer choice image to the placeholder
    document.getElementById("computerChoiceImg").src = "https://imgur.com/rzV1AO6.jpg";
    document.getElementById("computerChoiceImg").alt = "Computer Choice";
    lastComputerChoice = null;
    lastPlayerChoice = null;
}

// Initial Setup
updateScore();
updateAttempts();