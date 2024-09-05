function() {
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let playerScore = 0;
    let computerScore = 0;
    let attempts = 10;

    function updateScore() {
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("playerScoreBottom").textContent = playerScore;
        document.getElementById("computerScoreBottom").textContent = computerScore;
    }

    function updateAttempts() {
        document.getElementById("attemptsRemaining").textContent = `${attempts}/10 attempts remaining`;
    }

    function playerChoice(choice) {
        if (attempts <= 0) {
            alert("Game over! Click 'OK' to reset.");
            resetGame();
            return;
        }

        const computerChoice = getComputerChoice(document.getElementById('difficulty').value);
        const winner = determineWinner(choice, computerChoice);
        updateGameStats(winner);
    }

    function getComputerChoice(difficulty) {
        // Random choice or strategy-based choice logic here
        // Return choice
    }

    function determineWinner(player, computer) {
        // Determine and return winner
    }

    function updateGameStats(winner) {
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
    }

    // Initial setup calls
    updateScore();
    updateAttempts();
};