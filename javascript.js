
//Step 2: Get computer choice
//via Math.random to generate a random int between 1-2 (aka >=1 and <3)
//where 0 = "rock", 1 = "paper", 2 = "scissors"
function getComputerChoice() {
    //to get random int between 0-2:
    const min = 0;
    const max = 3;
    randomInt = Math.floor(Math.random() * (max - min) + min);
    
    //return string corresponding to randomInt
    if (randomInt == 0) {
        return "rock";
    }
    else if (randomInt == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Step 3: Get human choice
//via prompt() to return the user inputted string "rock," "paper," or "scissors"
//given that the input is one of the 3 valid string options, otherwise asks again
function getHumanChoice() {
    let flag = 0;
    let inputString = prompt("To make your play, enter 'rock', 'paper', or 'scissors'");
    inputString = inputString.toLowerCase();

    while (flag == 0) {
        if (inputString == "rock" || inputString == "paper" || inputString == "scissors") {
            flag = 1;
            return inputString;
        }
        else {
            inputString = prompt("Invalid play, please enter 'rock', 'paper', or 'scissors'");
        }
    }
}

//Step 4: initialize game's scoring variables
let humanScore = 0;
let computerScore = 0;

//Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw!")
        humanScore++;
        computerScore++;
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else {
            console.log("You lose. Paper beats rock.");
            computerScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else {
            console.log("You lose. Scissors beats paper.");
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else {
            console.log("You lose. Rock beats scissors.");
            computerScore++;
        }
    }
}