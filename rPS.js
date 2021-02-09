/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock, paper, scissors]

//universal definitions

//code for computer play selection
function computerSelection(rPS){
let computerPick = rPS[Math.floor(Math.random() * rPS.length)];
  console.log(computerPick)
  return computerPick
}
let computerPlay = computerSelection(rPS)
  



//player selects rock function
let playRock = function playRoundRock(){
if (rock == computerPlay){
    console.log("Draw")
    return "Draw"
}
else if (computerPlay == scissors){
    console.log("A winner is you!!")
    return "A winner is you!!"
}
else{
    console.log("You Lose, Try Again")
    return "You Lose, Try Again"
}
}

//player selects paper function
let playPaper = function playRoundPaper(){
if (paper == computerPlay){
    console.log("Draw")
    return "Draw"
}
else if (computerPlay == rock){
    console.log("A winner is you!!")
    return "A winner is you!!"
}
else{
    console.log("You Lose, Try Again")
    return "You Lose, Try Again"
}
}

//player selects scissors function 
let playScissors = function playRoundScissors(){
if (scissors == computerPlay){
    console.log("Draw")
    return "Draw"
}
else if (computerPlay == paper){
    console.log("A winner is you!!")
    return "A winner is you!!"
}
else{
    console.log("You Lose, Try Again")
    return "You Lose, Try Again"
}
}
//code for button
const rockBtn = document.querySelector('#document');
window.addEventListener('click', playRock)

const paperBtn = document.querySelector('#document');
window.addEventListener('click', playPaper)

const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playScissors)