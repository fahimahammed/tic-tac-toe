const gameStatus = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has WON!`;
const drawMessage = () => `The game is DRAW !`;
const playersTurn = () => `It's ${currentPlayer}'s turn.`;

gameStatus.innerHTML = playersTurn();

function handleCellPlayed( clickedCell, cellIndex) {
    gameState[cellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick(e) {
    const clickedCell = e.target;

    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    console.log(cellIndex);

    handleCellPlayed(clickedCell, cellIndex);
    handleResultValidation();

}
function handleRestartGame() {
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-reset').addEventListener('click', handleRestartGame);