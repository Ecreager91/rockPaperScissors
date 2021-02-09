/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock, paper, scissors]
//const playRock = playRoundRock(rock, computerSelection)
//const playPaper = playRoundPaper(paper, computerSelection)
//const playScissors = playRoundScissors(scissors, computerSelection)
//universal definitions

//code for computer play selection
let computerPlay = function computerSelection() {rPS[Math.floor(Math.random() * rPS.length)];}
console.log(computerPlay)


//player selects rock function
let playRock = function playRoundRock(computerPlay){
if (rPS[0] === computerPlay){
    console.log("Draw")
}
else if (computerPlay === rPS[2]){
    console.log("A winner is you!!")
}
else{
    console.log("You Lose, Try Again")
}
}

//player selects paper function
let playPaper = function playRoundPaper(computerPlay){
if (rPS[1] === computerPlay){
    console.log("Draw")
}
else if (computerPlay === rPS[0]){
    console.log("A winner is you!!")
}
else{
    console.log("You Lose, Try Again")
}
}

//player selects scissors function 
let playScissors = function playRoundScissors(computerPlay){
if (rPS[2] === computerPlay){
    console.log("Draw")
}
else if (computerPlay === rPS[1]){
    console.log("A winner is you!!")
}
else{
    console.log("You Lose, Try Again")
}
}
//code for button
const rockBtn = document.querySelector('#document');
window.addEventListener('click', playRock)

const paperBtn = document.querySelector('#document');
window.addEventListener('click', playPaper)

const scissorsBtn = document.querySelector('#document');
window.addEventListener('click', playScissors)