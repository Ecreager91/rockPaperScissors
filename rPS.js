/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
const rock = "ROCK"
const paper = "PAPER"
const scissors = "SCISSORS"
const rPS = [rock , paper , scissors]
//const playRock = playRoundRock(rock, computerSelection)
//const playPaper = playRoundPaper(paper, computerSelection)
//const playScissors = playRoundScissors(scissors, computerSelection)
//universal definitions

//code for computer play selection
let computerPlay = rPS[Math.floor(Math.random() * rPS.length)];
let computerSelection = computerPlay



//player selects rock function
let playRock = function playRoundRock(computerSelection){
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

//player selects paper function
let playPaper = function playRoundPaper(computerSelection){
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

//player selects scissors function 
let playScissors = function playRoundScissors(computerSelection){
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
