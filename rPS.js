/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
let rock = "ROCK"
let paper = "PAPER"
let scissors = "SCISSORS"
var rPS = [rock , paper , scissors]
let playerSelection = [rock , paper , scissors];
//universal definitions


//code for button



//code for computer play selection
const computerPlay = rPS [Math.floor(Math.random() * rPS.length)];
const computerSelection = computerPlay
console.log(computerSelection)

const winner = playRound(playerSelection, computerSelection)
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection){
    return "Draw"
}
else if (playerSelection == rock && computerSelection == scissors){
    return "A winner is you!!"
}
else if (playerSelection == paper && computerSelection == rock){
    return "A winner is you!!"
}
else if (playerSelection == scissors && computerSelection == rock){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}

const rockBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection[rock], function playRound(rock, computerSelection){
  console.log(winner)})

const paperBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection[paper], function playRound(paper, computerSelection){
  console.log(winner)})

const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection[scissors], function playRound(scissors, computerSelection){
  console.log(winner)})

console.log(playerSelection)
//code for declaring a winner
const winner = playRound(playerSelection, computerSelection)
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection){
    return "Draw"
}
else if (rock && computerSelection == scissors){
    return "A winner is you!!"
}
else if (paper && computerSelection == rock){
    return "A winner is you!!"
}
else if (scissors && computerSelection == rock){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}



console.log(winner)
//code for computer play selection

