/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock, paper, scissors]
let computerPlay = computerSelection(rPS)
let playerGames = 0
let computerWins = 0
//universal definitions^

//code for computer play selection
function computerSelection(rPS){
let computerPick = rPS[Math.floor(Math.random() * rPS.length)];
  console.log(computerPick)
  return computerPick
}

//player selects rock function
let playRock = function playRoundRock(){
if (rock === computerPlay){
  let result = "Draw"
    alert(result)
    return result
}
else if (computerPlay === scissors){
  playerGames++
  let result = `A winner is you!! You've won ${playerGames} times and the computer has won ${computerWins} times`
    alert(result)
    return result
    computerSelection(rPS)
}
else{
    let result = "You Lose, Try Again"
    alert(result)
    return result
}
}

//player selects paper function
let playPaper = function playRoundPaper(){
if (paper === computerPlay){
    let result = "Draw"
    alert(result)
    return result
}
else if (computerPlay === rock){
  playerGames++
  let result = `A winner is you!! You've won ${playerGames} times and the computer has won ${computerWins} times`
    alert(result)
    return result
    computerSelection(rPS)
}
else{
    let result = "You Lose, Try Again"
    alert(result)
    return result
}
}

//player selects scissors function 
let playScissors = function playRoundScissors(){
if (scissors === computerPlay){
  let result = "Draw"
    alert(result)
    return result
}
else if (computerPlay === paper){
  playerGames++
  let result = `A winner is you!! You've won ${playerGames} times and the computer has won ${computerWins} times`
    alert(result)
     return result
  computerSelection(rPS)
   
}
else{
  let result = "You Lose, Try Again"
    alert(result)
    return result
}
}

//code for button

const rockButton = document.getElementById('rockBtn');
rockBtn.addEventListener('click', playRock)

const paperButton = document.getElementById('paperBtn')
paperBtn.addEventListener('click', playPaper)

const scissorsButton = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', playScissors)