const gameStatus = document.querySelector('.game-status');
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    gameStatus.innerHTML = playersTurn();

}
function handleResultValidation() {
    let roundWon = false;
    for(let i = 0; i<=7; i++){
        const condition = winCondition[i];
        let a = gameState[condition[0]];
        let b = gameState[condition[1]];
        let c = gameState[condition[2]];

        if (a == '' || b == '' || c == ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }
    if (roundWon){
        gameStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    roundWon = !gameState.includes("");
    if(roundWon){
        gameStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();

}
function handleCellClick(e) {
    const clickedCell = e.target;

    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    // console.log(cellIndex);

    handleCellPlayed(clickedCell, cellIndex);
    handleResultValidation();

}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];

    gameStatus.innerHTML = playersTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-reset').addEventListener('click', handleRestartGame);