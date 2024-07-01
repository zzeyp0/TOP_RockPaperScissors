
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
    flag = 0;
    inputString = prompt("To make your play, enter 'rock', 'paper', or 'scissors'");

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