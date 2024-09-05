const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;
let lastComputerChoice = null;
let lastPlayerChoice = null;

function getComputerChoice(difficulty) {
    let choiceIndex = Math.random() < 0.8 ? Math.floor(Math.random() * choices.length) : null;
    if (difficulty === "easy" || choiceIndex !== null) {
        return choices[choiceIndex];
    } else if (difficulty === "medium" || difficulty === "hard") {
        return lastPlayerChoice ? getCounterChoice(lastPlayerChoice) : choices[Math.floor(Math.random() * choices.length)];
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
    return winMap[playerChoice];
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerScoreBottom").textContent = playerScore;
    document.getElementById("computerScoreBottom").textContent = computerScore;
}

function updateAttempts() {
    document.getElementById("attemptsRemaining").textContent = `${attempts}/10 attempts remaining`;
}

function determineWinner(playerChoice, computerChoice) {
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

    document.getElementById("computerChoiceImg").src = `assets/images/${computerChoice.toLowerCase()}.jpg`;
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

updateScore();
updateAttempts();