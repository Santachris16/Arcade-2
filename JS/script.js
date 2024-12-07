// Bear-Ninja-Hunter Game
function playBearNinjaHunter() {
    const gameChoices = ["bear", "ninja", "hunter"];
    let totalGames = 0;
    let playerWins = 0;
    let computerWins = 0;
    let playerName = prompt("Welcome to Bear-Ninja-Hunter! Please enter your name:");

    if (!playerName) {
        alert("No name entered. Game canceled.");
        return;
    }

    alert(`Hello ${playerName}! Let's start the game.`);
    let keepPlaying = true;

    while (keepPlaying) {
        let playerChoice = prompt(`${playerName}, what is your choice? Type 'bear', 'ninja', or 'hunter':`);
        if (!playerChoice) {
            alert("Invalid input. Game canceled.");
            break;
        }

        playerChoice = playerChoice.toLowerCase();
        if (!gameChoices.includes(playerChoice)) {
            alert("Invalid choice! Please enter 'bear', 'ninja', or 'hunter'.");
            continue;
        }

        const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        let resultMessage = `${playerName}, you chose ${playerChoice}. The computer chose ${computerChoice}. `;
        if (playerChoice === computerChoice) {
            resultMessage += "It's a tie!";
        } else if (
            (playerChoice === "bear" && computerChoice === "ninja") ||
            (playerChoice === "ninja" && computerChoice === "hunter") ||
            (playerChoice === "hunter" && computerChoice === "bear")
        ) {
            resultMessage += "Congratulations, you win!";
            playerWins++;
        } else {
            resultMessage += "Sorry, the computer wins this time.";
            computerWins++;
        }

        totalGames++;
        alert(resultMessage);

        let playAgain = prompt(`${playerName}, would you like to keep playing this game? y/n`);
        keepPlaying = playAgain && playAgain.toLowerCase() === "y";
    }

    alert(`Game over! You played ${totalGames} game(s).\nPlayer wins: ${playerWins}\nComputer wins: ${computerWins}`);
    document.getElementById("gameResult").textContent = `Session Summary: ${totalGames} game(s) played. Player wins: ${playerWins}, Computer wins: ${computerWins}.`;
}

// Guessing Game
const playGuessingGame = function () {
    let playerName = prompt("Welcome to the Guessing Game! Please enter your name:");
    if (!playerName) {
        alert("No name entered. Game canceled.");
        return;
    }

    alert(`Hello ${playerName}! Let's start the game.`);
    let playAgain = true;

    while (playAgain) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let guess;
        let attempts = 0;

        while (true) {
            guess = prompt(`${playerName}, enter your guess (1-10):`);
            attempts++;

            if (guess === null) {
                alert("Game exited. Goodbye!");
                playAgain = false;
                break;
            }

            guess = parseInt(guess);
            if (isNaN(guess) || guess < 1 || guess > 10) {
                alert("Invalid input. Please enter a number between 1 and 10.");
            } else if (guess > randomNumber) {
                alert("Your guess is too high, try again.");
            } else if (guess < randomNumber) {
                alert("Your guess is too low, try again.");
            } else {
                alert(`Correct! You guessed it in ${attempts} attempts.`);
                break;
            }
        }

        if (playAgain) {
            let response = prompt(`${playerName}, would you like to keep playing this game? y/n`);
            playAgain = response && response.toLowerCase() === "y";
        }
    }

    document.getElementById("gameResult").textContent = `${playerName} enjoyed playing the Guessing Game!`;
};

// Magic 8 Ball Game
const playMagic8Ball = () => {
    const responses = [
        "Yes, definitely!",
        "No, absolutely not.",
        "Ask again later.",
        "It is certain.",
        "Very doubtful.",
        "Concentrate and ask again.",
        "Signs point to yes.",
        "Cannot predict now."
    ];

    let playerName = prompt("Welcome to Magic 8 Ball! Please enter your name:");
    if (!playerName) {
        alert("No name entered. Game canceled.");
        return;
    }

    alert(`Hello ${playerName}! Ask your yes/no questions and let the Magic 8 Ball decide.`);
    let keepPlaying = true;

    while (keepPlaying) {
        const question = prompt(`${playerName}, what is your yes/no question?`);
        if (!question) {
            alert("You didn't ask a question. Try again.");
            continue;
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const response = responses[randomIndex];
        alert(`The Magic 8 Ball says: ${response}`);

        const playAgain = prompt(`${playerName}, would you like to keep playing this game? y/n`);
        keepPlaying = playAgain && playAgain.toLowerCase() === "y";
    }

    alert(`Thanks for playing Magic 8 Ball, ${playerName}! Farewell!`);
    document.getElementById("gameResult").textContent = `${playerName} enjoyed playing Magic 8 Ball!`;
};