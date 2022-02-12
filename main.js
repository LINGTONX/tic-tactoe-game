let gameBoard = document.getElementById("gameWindow")
let restartGame = document.getElementById("restart-card")
let Btns = [...document.getElementsByClassName('gamebox')]
let winCard = document.getElementById("winCard")
let winner = document.getElementById("winSpan")
let  gameboard = document.getElementsByClassName('gameBoard')[0]
let quit = document.getElementById('quit')
let restartBtn = document.getElementById('restart')
let redoBtn = document.getElementById('redo')
let NXTround = document.getElementById('NXTround')
const xscore = document.getElementById('Xscore')
const yscore = document.getElementById('Yscore')
let youLost = document.getElementById("lost")


const xClass = 'Lgreen'
const oClass = 'Oyellow'
let Xscore = 0
let Yscore = 0
const winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let currentPlayer = true
xscore.innerHTML = Xscore
yscore.innerHTML = Yscore



function loadGame(){
    gameBoard.style.display = "block"
}

function restart(){
    startGame()
}

function cancel(){
    restartGame.style.display ="none"
}

startGame()

function startGame(){
    winCard.style.display = 'none';

    redoBtn.addEventListener('click', ()=>{
        restartGame.style.display = 'block'
    });
     restartBtn.addEventListener('click',()=>{
        startGame()
        cancel()
      });
      NXTround.addEventListener('click',()=>{
       startGame()
      });
    [...gameboard.children].forEach(el=>{
        el.classList.remove('Lgreen')
        el.classList.remove('Oyellow')
        el.innerHTML = ''
        el.removeEventListener('click',handleClick)
    })
    Btns.forEach((el)=>{
        el.addEventListener('click',handleClick,{once:true})
    })
}



function handleClick(e){
    const el = e.target
    let player = currentPlayer ? xClass : oClass
    if(el.classList.contains(xClass) === true|| el.classList.contains(oClass) === true) return
    if(hPlay(el,player)) return
    let emptyChoice = [...Btns.filter(el => (el.classList.contains(xClass) || el.classList.contains(oClass)) ? null: el)]
    currentPlayer = !currentPlayer
    player = currentPlayer ? xClass : oClass
    cPlayer(emptyChoice,player)
    return  currentPlayer = !currentPlayer
    
 }

   


function hPlay(el,player){
    console.log(player)
    el.classList.add(xClass)
    el.innerHTML = 'X'
    if(win(player)){
     winCard.style.display = 'block'
     winSpan.textContent = "X"
     Xscore++
     xscore.innerHTML = Xscore
     return win(player)
    
    }
    
}
function win(currP){
    return winArr.some((elArr)=>{
      return elArr.every((el) =>{
        quit.addEventListener('click', ()=>{
            startGame()
            gameBoard.style.display = 'none'
        })
          return Btns[el].classList.contains(currP)  
      }) 
    })
   
 }

function cPlayer (el,player){
    console.log(player)
    if(el.length === 0) return
    randChoice = Math.floor(Math.random()*el.length)
    el[randChoice].classList.add(oClass)
     el[randChoice].innerHTML = 'O'
    if(win(player)){
        winCard.style.display = 'block'
        winSpan.textContent = "O"
        youLost.textContent = "You Lost"
        youLost.style.color = "red"
        Yscore++
        yscore.innerHTML = Yscore
        return win(player)
        
    }
}

