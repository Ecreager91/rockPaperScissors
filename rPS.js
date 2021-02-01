/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock , paper , scissors]
let playerSelection = playerchoice
//universal definitions

//code for computer play selection
let computerPlay = rPS [Math.floor(Math.random() * rPS.length)];
let computerSelection = computerPlay
console.log(computerSelection)

//code for button

const rockBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection = rock, function playRound(playerSelection, computerSelection){
  return(victor)})

const paperBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection = paper, function playRound(paper, computerSelection){
  return(victor)})
     
const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playerSelection = scissors, function playRound(scissors, computerSelection){
  return(victor)})
  

//code for declaring a winner
let victor = playRound(playerSelection, computerSelection)
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection){
    return "Draw"
}
else if (rock && (computerSelection == scissors)){
    return "A winner is you!!"
}
else if (paper && (computerSelection == rock)){
    return "A winner is you!!"
}
else if (scissors && (computerSelection == rock)){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}



console.log(victor)
//code for computer play selection

