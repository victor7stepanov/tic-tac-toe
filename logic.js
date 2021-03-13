let players = ['x', 'o'];
let activePlayer = 0; //0 - первый ход x, 1 - первый ход о
let field;

function startGame() {
    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    renderBoard(field);
};

function click(row, col) {
    field[row][col] = players[activePlayer];
    renderBoard(field);
    checkWinner();
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
};

function checkWinner() {
    let shot = players[activePlayer];
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (field[i][0] == shot && field[i][1] == shot && field[i][2] == shot) {
                showWinner(activePlayer);
            } else if (field[0][j] == shot && field[1][j] == shot && field[2][j] == shot) {
                showWinner(activePlayer);
            } else if (field[0][0] == shot && field[1][1] == shot && field[2][2] == shot) {
                showWinner(activePlayer);
            } else if (field[0][2] == shot && field[1][1] == shot && field[2][0] == shot) {
                showWinner(activePlayer);
            }
        }
    }
}