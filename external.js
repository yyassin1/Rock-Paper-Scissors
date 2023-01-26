function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0)
    {
        return "ROCK";
    }
    else if (choice == 1){
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
let computerScore = 0;
let playerScore = 0;
function playRound(event){
    const computerSelection = getComputerChoice();
    const playerSelection = event;
    const winner = getWinner(playerSelection, computerSelection)
    document.getElementById("player").innerHTML = `Player chose ${playerSelection}`;
    document.getElementById("computer").innerHTML = `Computer chose ${computerSelection}`;
    document.getElementById("winner").innerHTML = `${winner}`;;
    document.getElementById("final").innerHTML = `Computer:${computerScore} <br> Player:${playerScore}`;
}
function getWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore++;
        return "You lose! Rock beats Paper";
    }
    else if (computerSelection == "ROCK" && playerSelection == "PAPER"){ 
        playerScore++;
        return "You Won! Rock beats Paper";
    }
    else if (computerSelection == "PAPER" && playerSelection == "SCISSORS"){
        playerScore++;
        return "You Won! Scissors beats Paper";
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        playerScore++;
        return "You Won! Rock beats Scissors";
    }
    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else {
        return "Incorrect input";
    }
}