/* this is where my javascript goes and how to write comments */
/* This will be a console run Rock Paper Scissors game that will become more realized later. 
My goal is to write psuedocode and alogrithms before actually writing code */

//universal definitions
let rock = "ROCK"
let paper = "PAPER"
let scissors = "SCISSORS"
const rPS = [rock , paper , scissors];

//universal definitions


//code for selecting play and storing value case insensitive
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', playerPick (rock), playRound => {
  alert(pwinner);
});
const playerSelection = playerPick.toUpperCase()
console.log(playerSelection)


//player selection



//code for computer play selection
const computerPlay = rPS [Math.floor(Math.random() * rPS.length)];
const computerSelection = computerPlay
alert(computerSelection)

//code for declaring a winner
const winner = playRound(playerSelection, computerSelection)
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection){
    return "Draw"
}
else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
    return "A winner is you!!"
}
else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
    return "A winner is you!!"
}
else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
    return "A winner is you!!"
}
else{
    return "You Lose, Try Again"
}
}


alert(winner);; //code for computer play selection
//change to "return" at end
