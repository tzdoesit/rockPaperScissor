console.log("Welcome to a game of Rock, Paper, Scissor!");

function getComputerChoice() {
    choiceNumber = Math.floor(Math.random() * 100);
    let selection = null;
    console.log(choiceNumber);

    if (0 <= choiceNumber && choiceNumber < 33) {
        selection = "Rock";
    }

    else if (33 <= choiceNumber && choiceNumber < 66) {
        selection = "Paper"
    }

    else {
        selection = "Scissor"
    }
    
    return selection;
}

function getPlayerChoice() {
    let playerHand = prompt("Enter your selection: Rock, Paper, or Scissor");

    if (playerHand === "Rock" || playerHand === "rock" || playerHand === "ROCK") {
        return "Rock";
    }

    else if (playerHand === "Paper" || playerHand === "paper" || playerHand === "PAPER") {
        return "Paper";
    }

    else if (playerHand === "Scissor" || playerHand === "scissor" || playerHand === "SCISSOR") {
        return "Scissor";
    }

    else {
        getPlayerChoice();
    }
}

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("Player Wins!")
    }

    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player Wins!")
    }

    else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        console.log("Player Wins!")
    }

    else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        console.log("Computer Wins!")
    }

    else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        console.log("Computer Wins!")
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer Wins!")
    }

    else {
        console.log("No winner/tie.")
    }

}

//for loop to play game 5 times
let i;
for (i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerHand = getComputerChoice();
    playRound (playerChoice, computerHand);
}