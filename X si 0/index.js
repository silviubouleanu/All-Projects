const boardSize = 3;
let gameBoard = [];
let currentPlayer = 'X'; 

function createTable() {
    let table = document.createElement('table');
    table.id = 'tableboard';
    for (let i = 0; i < boardSize; ++i) {
        let row = table.insertRow(i);
        gameBoard[i] = [];
        for (let j = 0; j < boardSize; ++j) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', () => handleCellClick(i, j));
            gameBoard[i][j] = '';
        }
    }
    return table;
}

function handleCellClick(row, col) {
    if (gameBoard[row][col] == '' && !checkWin()) {
        gameBoard[row][col] = currentPlayer;
        updateCell(row, col);

        if (checkWin()) {
            announceWinner(currentPlayer);
        } else {
            switchPlayer();
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
}

function updateCell(row, col) {
    let cell = document.getElementById('tableboard').rows[row].cells[col];
    cell.textContent = gameBoard[row][col];
}

function checkWin() {
    for (let i = 0; i < boardSize; ++i) {
        if (gameBoard[i][0] != '' &&
            gameBoard[i][0] == gameBoard[i][1] &&
            gameBoard[i][1] == gameBoard[i][2]) {
            return true; 
        }
    }

    for (let j = 0; j < boardSize; ++j) {
        if (gameBoard[0][j] != '' &&
            gameBoard[0][j] == gameBoard[1][j] &&
            gameBoard[1][j] == gameBoard[2][j]) {
            return true; 
        }
    }

    if (gameBoard[0][0] != '' &&
        gameBoard[0][0] == gameBoard[1][1] &&
        gameBoard[1][1] == gameBoard[2][2]) {
        return true; 
    }

    if (gameBoard[0][2] != '' &&
        gameBoard[0][2] == gameBoard[1][1] &&
        gameBoard[1][1] == gameBoard[2][0]) {
        return true; 

    return false;
    }
}

function announceWinner(winner) {
    alert('You won!');
    resetGame();
}

function resetGame() {
    let table = document.getElementById('tableboard');
    let cells = table.getElementsByTagName('td');

    for (let i = 0; i < cells.length; ++i) {
        cells[i].textContent = '';
    }
    gameBoard = [];
    for (let i = 0; i < boardSize; ++i) {
        gameBoard[i] = Array(boardSize).fill('');
        }
        currentPlayer = 'X';
    }

let container = document.getElementById('game-container');
container.appendChild(createTable());