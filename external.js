let playerSelection = prompt("please enter your choice: Rock, Paper, or Scissors.");
playerSelection = playerSelection.toUpperCase();
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
    {
        return "Rock";
    }
    else if (choice == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toUpperCase();
console.log(computerSelection);
console.log(playerSelection);
let player = 0 , computer = 0;
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";
    }
    else if (computerSelection == "PAPER" && playerSelection == "ROCK") 
    {
        return "You lose! Rock beats Paper";
        computer = computer + 1;
    }
    else if (computerSelection == "ROCK" && playerSelection == "PAPER"){
        return "You Won! Rock beats Paper";
        player = player + 1;
    }
    else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") 
    {
        return "You Won! Scissors beats Paper";
        player = player + 1;
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        return "You lose! Scissors beats Paper";
        computer = computer + 1;
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") 
    {
        return "You Won! Rock beats Scissors";
        player = player + 1;
    }
    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        return "You lose! Rock beats Scissors";
        computer = computer + 1;
    }
    else {
        return "Incorrect input";
    }
}
function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
}
if (computer < player){
    return "You Won! congrates";
}
else if (computer > player){
    return "Sorry, You lose";
}
else {
    return "Tie";
}

//document.write(playRound(playerSelection, computerSelection));
