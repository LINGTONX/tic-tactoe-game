let gameBoard = document.getElementById("gameWindow")
let restartGame = document.getElementById("restart-card")
console.log(restartGame);



function loadGame(){
    gameBoard.style.display = "block"
}

function restart(){
    restartGame.style.display = "block"
}

function cancel(){
    restartGame.style.display ="none"
}