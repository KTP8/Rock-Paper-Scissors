const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let computerScore = 0;
let attempts = 10;

// Function to get computer choice based on difficulty chosen by player 
function getComputerChoice(difficulty) {
    if (difficulty === "easy") {
        // Easy: Computer choice is Random
        return choices[Math.floor(Math.random() * choices.lenghth)];
    } else if (difficulty === "medium") {
        // Medium: Computer choice is part of a 'Predictable Pattern' (i.e., always chooses Rock after Scissors)
        // May insert a more sophisticated pattern 
        return choices[(Math.floor(Math.random() * choices.length) + 1) % choices.length];
    } else if (difficulty === "hard") {
        // Hard: Computer uses an 'Adaptive Strategy' to beat the player's previous choice)
        // For simplicity computer uses a random choice of the options but this can be adapted based on user history
        return choices [Math.floor(Math.random() * choices.lenghth)];
    }
}

// Function to update the score display
function updateScore() {
    document.getElementById("playerScore").textContent = PlayerScore;
    document.getElementById("computerScore").textContent = ComputerScore;
}

//Function to upate remaining attempts 
function updateAttempts() {
    document.getElementById("attemptsRemaining").textContent = '${attempts}/10 attempts remaining';
}

//Function to determine the winner of a round
function determineWinner(playerChoice, ComputerChoice) {
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
    if (attempts <=0) {
        alert ("Game over! Click 'OK' to reset.");
        resetGame();
        return;
    }

    const difficulty = document.getElementById("difficulty").value;
    const computerChoice = getComputerChoice(difficulty);

    document.getElementById("computerChoiceImg").src = computerChoice.toLowerCase() + ".png";
    document.getElementById("computerChoiceImg").alt = computerChoice;

    const winner = determineWinner(choice, computerChoice);
    if (winner === "player") {
        playerScore++;
    } else if (winner=== "computer") {
        computerScore++;
    }

    attempts--;
    updateScore();
    updateAttempts();

    if (attempts <= 0) {
        alert('Game over! Final Score - YOU: ${playerScore} | COMPUTER: ${computerScore}');
        resetGame();
    }
}

// Function to reset the game 
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    attempts = 10;
    updateScore();
    updateAttempts();
    document.getElementById("computerChoiceImg").src = "";
    document.getElemenetById("computerChoiceImg").alt = "Computer Choice";
}

// Initial Setup
updateScore();
updateAttempts();