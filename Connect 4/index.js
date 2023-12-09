const ROW_COUNT = 6;
const COLUMN_COUNT = 7;
let currentPlayer = 1;
let board = createBoard();

function createBoard() {
    const board = [];

    for (let i = 0; i < ROW_COUNT; ++i) {
        const row = [];
        for (let j = 0; j < COLUMN_COUNT; ++j) {
            row.push(0);
        }
        board.push(row);
    }
    return board;
}

function drawBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for (let row = 0; row < ROW_COUNT; row++) {
        for (let col = 0; col < COLUMN_COUNT; ++col) {
            const cell = document.createElement('div');
            cell.classList.add('cell', 'empty');
            cell.setAttribute('data-row', row);
            cell.setAttribute('data-col', col);
            cell.addEventListener('click', () => handleCellClick(col));
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(col) {
    const row = getEmptyRow(col);
    if (row != -1) {
        board[row][col] = currentPlayer;
        updateCell(row, col);

        if (checkForWin(row, col)) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else if (checkForDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = 3 - currentPlayer; // Switch player (1 -> 2, 2 -> 1)
        }
    }
}

function getEmptyRow(col) {
    for (let row = ROW_COUNT - 1; row >= 0; --row) {
        if (board[row][col] == 0) {
            return row;
        }
    }
    return -1; // Column is full
}

function updateCell(row, col) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    cell.classList.remove('empty');
    cell.classList.add(`player${currentPlayer}`);
}

function checkForWin(row, col) {
    return (
        checkDirection(row, col, 0, 1) || // Horizontal
        checkDirection(row, col, 1, 0) || // Vertical
        checkDirection(row, col, 1, 1) || // Diagonal /
        checkDirection(row, col, -1, 1)   // Diagonal \
    );
}

function checkDirection(row, col, rowDirection, colDirection) {
    const player = board[row][col];
    let count = 1;

    for (let i = 1; i < 4; ++i) {
        const newRow = row + i * rowDirection;
        const newCol = col + i * colDirection;

        if (newRow >= 0 && newRow < ROW_COUNT && newCol >= 0 && newCol < COLUMN_COUNT) {
            if (board[newRow][newCol] == player) {
                ++count;
            } else {
                break;
            }
        } else {
            break;
        }
    }

    for (let i = 1; i < 4; ++i) {
        const newRow = row - i * rowDirection;
        const newCol = col - i * colDirection;

        if (newRow >= 0 && newRow < ROW_COUNT && newCol >= 0 && newCol < COLUMN_COUNT) {
            if (board[newRow][newCol] == player) {
                ++count;
            } else {
                break;
            }
        } else {
            break;
        }
    }

    return count >= 4;
}

function checkForDraw() {
    return board.every(row => row.every(cell => cell != 0));
}

function resetGame() {
    currentPlayer = 1;
    board = createBoard();
    drawBoard();
}

drawBoard();