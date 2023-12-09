let secretWord = 'andrei';
let lives = 7;
let guessedLetters = [];
let wordToGuess = '_'.repeat(secretWord.length);

function updateGameDisplay() {
    document.getElementById('wordToGuess').innerHTML = wordToGuess;
    document.getElementById('guessedLetters').innerHTML = 'Guessed Letters: ' + guessedLetters.join(', ');
    document.getElementById('lives').innerHTML = 'Lives: ' + lives;
}

function processGuess(guess) {
    if (guessedLetters.includes(guess)) {
        return;
    }

    guessedLetters.push(guess);

    let guessCorrect = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] == guess) {
            wordToGuess = wordToGuess.substring(0, i) + guess + wordToGuess.substring(i + 1);
            guessCorrect = true;
        }
    }

    if (!guessCorrect) {
        --lives;
    }

    updateGameDisplay();

    if (wordToGuess == secretWord) {
        alert('Congratulations! You won!');
        endGame();
    } else if (lives == 0) {
        alert('Sorry, you lost! The word was: ' + secretWord);
        endGame();
    }
}

function endGame() {
    window.removeEventListener('keypress', handleKeyPress);
}

function resetGame() {
    secretWord = 'hangman';
    lives = 7;
    guessedLetters = [];
    wordToGuess = '_'.repeat(secretWord.length);

    updateGameDisplay();

    window.addEventListener('keypress', handleKeyPress);
}

updateGameDisplay();

window.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event) {
    let guess = event.key.toLowerCase();
    processGuess(guess);
}