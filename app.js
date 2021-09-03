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

// game status function
const winningMessage = () => `Player ${currentPlayer} has WON!`;
const drawMessage = () => `The game is DRAW !`;
const playersTurn = () => `It's ${currentPlayer}'s turn.`;

gameStatus.innerHTML = playersTurn();

const handleCellPlayed = ( clickedCell, cellIndex) => {
    gameState[cellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// change player
const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    gameStatus.innerHTML = playersTurn();
}

// result validation
const handleResultValidation = () => {
    let roundWon = false;

    for(let i = 0; i<=7; i++){
        const condition = winCondition[i];
        let a = gameState[condition[0]];
        let b = gameState[condition[1]];
        let c = gameState[condition[2]];

        // console.log(a, b, c);

        if (a == '' || b == '' || c == ''){
            continue;
        }

        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }
    // wining condition true
    if (roundWon){
        gameStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    //if winning condition false
    roundWon = !gameState.includes("");
    if(roundWon){
        gameStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();

}

// click handlar of cell 
const handleCellClick = (e) => {
    const clickedCell = e.target;

    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    // console.log(cellIndex);

    handleCellPlayed(clickedCell, cellIndex);
    handleResultValidation();

}
const handleRestartGame = () => {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];

    gameStatus.innerHTML = playersTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
}

// click handlar
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-reset').addEventListener('click', handleRestartGame);