const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;
let lastComputerChoice = null;
let lastPlayerChoice = null;

// Function to get computer choice based on difficulty
function getComputerChoice(difficulty) {
    if (difficulty === "easy") {
        // Easy: Computer choice is Random
        return choices[Math.floor(Math.random() * choices.length)];
    } else if (difficulty === "hard") {
        // Hard: Computer uses adaptive strategy
        if (lastComputerChoice === null) {
            // First round, random choice
            return choices[Math.floor(Math.random() * choices.length)];
        } else {
            // Use adaptive strategy
            if (lastPlayerChoice === null) {
                return choices[Math.floor(Math.random() * choices.length)];
            } else {
                // Adapt based on previous choices
                const winMap = {
                    "Rock": "Paper",
                    "Paper": "Scissors",
                    "Scissors": "Rock",
                    "Lizard": "Rock",
                    "Spock": "Lizard"
                };
                return winMap[lastPlayerChoice];
            }
        }
    }
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

    // Win conditions for player
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
    // const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const difficulty = document.getElementById('difficulty').value;
    const computerChoice = getComputerChoice(difficulty);

    document.getElementById("computerChoiceImg").src = `path/to/${computerChoice.toLowerCase()}.png`; // Update the path to match your image folder
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
    document.getElementById("computerChoiceImg").src = "";
    document.getElementById("computerChoiceImg").alt = "Computer Choice";
    lastComputerChoice = null;
    lastPlayerChoice = null;
}

// Initial Setup
updateScore();
updateAttempts();