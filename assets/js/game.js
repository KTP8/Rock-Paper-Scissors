const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;
let lastComputerChoice = null;
let lastPlayerChoice = null;

function getComputerChoice(difficulty) {
    let index = Math.floor(Math.random() * choices.length); 
    if (difficulty === "easy") {
        return choices[index];
    } else if (difficulty === "medium") { // For medium and hard computer has a set chance of using game logic to predict next move
        return Math.random() < 0.8 ? choices[index] : getCounterChoice(lastPlayerChoice); // Computer has an 80% chance of making a random choice
    } else if (difficulty === "hard") {
        return Math.random() < 0.6 ? choices[index] : getCounterChoice(lastPlayerChoice); // Computer has a 60% chance of making a random choice 
    }
}

function getCounterChoice(playerChoice) { // listed winning hands 
    const winMap = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock",
        "Lizard": "Rock",
        "Spock": "Lizard"
    };
    return playerChoice ? winMap[playerChoice] : choices[Math.floor(Math.random() * choices.length)]; // Provides computer with logic to play best hand 
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function updateAttempts() {
    document.getElementById("attemptsRemaining").textContent = `${attempts}/10 attempts remaining`;
}

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

function playerChoice(choice) {
    if (attempts <= 0) {
        alert("Game over! Click 'OK' to reset.");
        resetGame();
        return;
    }

    lastPlayerChoice = choice;
    const difficulty = document.getElementById('difficulty').value;
    const computerChoice = getComputerChoice(difficulty);

    const imagePaths = { // Image of selection should be displayed 
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
        alert(`Game over! Final Score - YOU: ${playerScore} | COMPUTER: ${computerScore}`); // Following 10 attempts user is prompted to play again
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    attempts = 10;
    updateScore();
    updateAttempts();
    document.getElementById("computerChoiceImg").src = "https://imgur.com/rzV1AO6.jpg";
    document.getElementById("computerChoiceImg").alt = "Computer Choice";
    lastComputerChoice = null;
    lastPlayerChoice = null;
}

// Initial setup to show default values
updateScore();
updateAttempts();