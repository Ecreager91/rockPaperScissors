/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock , paper , scissors]
let playerSelection = [rock, paper, scissors]
//universal definitions

//code for computer play selection
let computerPlay = rPS [Math.floor(Math.random() * rPS.length)];
let computerSelection = computerPlay
console.log(computerSelection)

//code for declaring a winner

function playRoundRock(computerSelection){
if (rock == computerSelection){
    return "Draw"
}
else if (computerSelection == scissors){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}

function playRoundPaper(computerSelection){
if (paper == computerSelection){
    return "Draw"
}
else if (computerSelection == rock){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}

function playRoundScissors(computerSelection){
if (scissors == computerSelection){
    return "Draw"
}
else if (computerSelection == paper){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}
const playRock = playRoundRock(rock, computerSelection)
const playPaper = playRoundPaper(paper, computerSelection)
const playScissors = playRoundScissors(scissors, computerSelection)


//code for button
const rockBtn = document.querySelector('#document');
window.addEventListener('click', playRock)
const paperBtn = document.querySelector('#document');
window.addEventListener('click', playPaper)
     
const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playScissors)



