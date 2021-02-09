/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock, paper, scissors]
let computerPlay = computerSelection(rPS)
//code for computer play selection
function computerSelection(rPS){
let computerPick = rPS[Math.floor(Math.random() * rPS.length)];
  console.log(computerPick)
  return computerPick
}
//universal definitions^
//player selects rock function
let playRock = function playRoundRock(){
if (rock === computerPlay){
  let result = "Draw"
    console.log(result)
    return result
}
else if (computerPlay === scissors){
  let result = "A winner is you!!"
    console.log(result)
    return result
}
else{
    let result = "You Lose, Try Again"
    console.log(result)
    return result
}
}

//player selects paper function
let playPaper = function playRoundPaper(){
if (paper === computerPlay){
    let result = "Draw"
    console.log(result)
    return result
}
else if (computerPlay === rock){
   let result = "A winner is you!!"
    console.log(result)
    return result
}
else{
    let result = "You Lose, Try Again"
    console.log(result)
    return result
}
}

//player selects scissors function 
let playScissors = function playRoundScissors(){
if (scissors === computerPlay){
  let result = "Draw"
    console.log(result)
    return result
}
else if (computerPlay === paper){
    let result = "A winner is you!!"
    console.log(result)
    return result
}
else{
  let result = "You Lose, Try Again"
    console.log(result)
    return result
}
}

//code for button
const rockBtn = document.querySelector('#document');
window.addEventListener('click', playRock)

const paperBtn = document.querySelector('#document');
window.addEventListener('click', playPaper)

const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playScissors)