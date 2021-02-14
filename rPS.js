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
  let result = `Computer chose rock. It's a Draw. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
}
else if (computerPlay === scissors){
  playerGames++
  let result = `Computer chose scissors. A winner is you!! You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
    
}
else{
  computerWins++
    let result = `Computer chose paper. You Lose, Try Again. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
}
}

//player selects paper function
let playPaper = function playRoundPaper(){
if (paper === computerPlay){
    let result = `Computer chose paper. It's a Draw. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
}
else if (computerPlay === rock){
  playerGames++
  let result = `Computer chose rock. A winner is you!! You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
   
}
else{
    computerWins++
    let result = `Computer chose scissors. You Lose, Try Again. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
    return result
}
}

//player selects scissors function 
let playScissors = function playRoundScissors(){
if (scissors === computerPlay){
  let result = `Computer chose scissors.It's a Draw. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    computerPlay = computerSelection(rPS)
    return result
}
else if (computerPlay === paper){
  playerGames++
  let result = `Computer chose paper. A winner is you!! You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)//
    computerPlay = computerSelection(rPS)
     return result
   
}
else{
  computerWins++
    let result = `Computer chose: Rock. You Lose, Try Again. You've won ${playerGames} time(s) and the computer has won ${computerWins} time(s)`
    alert(result)
    computerPlay = computerSelection(rPS)
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