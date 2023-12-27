//~~~~~~~~~~~~~~~~~~~~~~~~~~~Constants~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]


//~~~~~~~~~~~~~~~~~~~~~~~~~~~`State` Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let board, turn, winner, tie


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Cached Element References~~~~~~~~~~~~~~~~~~~~~~~~
const squareElements = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const sqrClick = document.querySelector('.sqr', );
const reset = document.getElementById('reset');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
squareElements.forEach(function(sqr){
    sqr.addEventListener('click', handleClick)
})

reset.addEventListener('click', init)
//~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
init();

//player starts game, board layout
function init (){
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    tie = false;
    render();
}

function render(){
    updateBoard();
    updateMessage();
}

//the status of the board during game play, 1 is the player 'X', -1 is computer 'O', empty string is when board is reset
function updateBoard(){
board.forEach(function(sqrVal, idx){
    if (board[idx] === 1){
        squareElements[idx].textContent = 'X'
        squareElements[idx].style.color = 'lightgrey'
    } else if (board[idx] === -1){
        squareElements[idx].textContent = 'O'
        squareElements[idx].style.color = 'lightcoral'
    } else {
        squareElements[idx].textContent = ''
    }
})
}

//after each turn what happens
function updateMessage() {
    if (winner === false && tie === false){
        messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
    } else if (winner === false && tie === true){
        messageEl.textContent = "It's a tie 😑!"
    } else {
        messageEl.textContent = "Congratulations! You won!🤩"
    }
}

//update board array each turn
function handleClick(evt) {
    const sqIdx = evt.target.id[2]
    if (board[sqIdx] || winner) return
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchTurns()
    render()
}

//changes the state of the board when you click box
function placePiece(idx) {
    board[idx] = turn
}
//checks for tie
function checkForTie() {
    if(board.includes(null)) {
        tie = false
    } else {
        tie = true
    }
}
//checks if all/any winning combos on the board 
function checkForWinner() {
    if(
        Math.abs(board[0] + board[1] + board[2]) === 3 ||
        Math.abs(board[3] + board[4] + board[5]) === 3 ||
        Math.abs(board[6] + board[7] + board[8]) === 3 ||
        Math.abs(board[0] + board[3] + board[6]) === 3 ||
        Math.abs(board[1] + board[4] + board[7]) === 3 ||
        Math.abs(board[2] + board[5] + board[8]) === 3 ||
        Math.abs(board[2] + board[4] + board[6]) === 3 ||
        Math.abs(board[0] + board[4] + board[8]) === 3 
    ) {
        winner = true
    }
}

//Changes turn after player plays
function switchTurns(){
    if (winner) return
    turn *= -1
}