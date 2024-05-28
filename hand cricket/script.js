let playerScore = 0;
let computerScore = 0;
let playerOut = false;

// Function to generate a random number between 1 and 10 for the computer's choice
function generateComputerChoice() {1
    return Math.floor(Math.random() * 10) + 1;
}

// Function to let the player bat
function playerBat(choice) {
    const playerChoice = parseInt(choice.textContent);
    const computerChoice = generateComputerChoice();

    // Update UI with player's choice
    const playerDisplay = document.querySelector('.player_display');
    playerDisplay.textContent = playerChoice;

    // Update UI with computer's choice
    const computerDisplay = document.querySelector('.computer_player');
    computerDisplay.textContent = computerChoice;

    // Check if player is out
    if (playerChoice === computerChoice) {
        alert("You're out! Computer will bat now.");
        playerOut = true;
        computerBat();
    } else {
        playerScore += playerChoice;
        const playerScoreDisplay = document.querySelector('.score .player');
        playerScoreDisplay.textContent = playerScore;

    }
}

// Function to let the computer bat
function computerBat() {
    const computerChoice = generateComputerChoice(); // Generate computer's choice

    // Update UI with computer's choice
    const computerDisplay = document.querySelector('.computer_player');
    computerDisplay.textContent = computerChoice;

    // Update UI with player's choice
    const playerDisplay = document.querySelector('.player_display');
    playerDisplay.textContent = ""; // Clear player's choice

    // Check if computer is out
    if (computerChoice === playerScore) {
        alert("Computer is out");
        determineWinner();
    } else {
        computerScore += computerChoice;
        const computerScoreDisplay = document.querySelector('.score .computer');
        computerScoreDisplay.textContent = computerScore;
        determineWinner1();
    }
}



// Add click event listeners to all the player's options
const playerChoices = document.querySelectorAll('.left_side #one');
playerChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        if (!playerOut) {
            playerBat(choice);
        } else {
            // alert("You're already out! Computer is batting now.");
            computerBat(choice)
        }
    });
});

// Function to determine the winner
function determineWinner() {
    if (playerScore > computerScore) {
        alert("You win! Your Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerScore < computerScore) {
        alert("Computer wins! Your Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        alert("It's a tie! Your Score: " + playerScore + " Computer Score: " + computerScore);
    }
}
function determineWinner1(){
    if (playerScore < computerScore) {
        alert("Computer wins! Your Score: " + playerScore + " Computer Score: " + computerScore);
    }
}