const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;
let lastComputerChoice = null;
let lastPlayerChoice = null;

function getComputerChoice(difficulty) {
    let index = Math.floor(Math.random() * choices.length); // Default to random choice
    if (difficulty === "easy") {
        return choices[index];
    } else if (difficulty === "medium") {
        return Math.random() < 0.8 ? choices[index] : getCounterChoice(lastPlayerChoice);
    } else if (difficulty === "hard") {
        return Math.random() < 0.6 ? choices[index] : getCounterChoice(lastPlayerChoice);
    }
}

function getCounterChoice(playerChoice) {
    const winMap = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock",
        "Lizard": "Rock",
        "Spock": "Lizard"
    };
    return playerChoice ? winMap[playerChoice] : choices[Math.floor(Math.random() * choices.length)];
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerScoreBottom").textContent = playerScore;
    document.getElementById("computerScoreBottom").textContent = computerScore;
    console.log("Scores updated: Player -", playerScore, "Computer -", computerScore);
}

function updateAttempts() {
    document.getElementById("attemptsRemaining").textContent = `${attempts}/10 attempts remaining`;
    console.log("Attempts remaining:", attempts);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a draw.");
        return "draw";
    }
    const winConditions = {
        "Rock": ["Scissors", "Lizard"],
        "Paper": ["Rock", "Spock"],
        "Scissors": ["Paper", "Lizard"],
        "Lizard": ["Spock", "Paper"],
        "Spock": ["Scissors", "Rock"]
    };
    let result = winConditions[playerChoice].includes(computerChoice) ? "player" : "computer";
    console.log("Winner of this round:", result);
    return result;
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

    if (computerChoice) {
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
    } else {
        console.error("Failed to retrieve computer's choice.");
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
    console.log("Game has been reset.");
}

// Initial setup to show default values
updateScore();
updateAttempts();