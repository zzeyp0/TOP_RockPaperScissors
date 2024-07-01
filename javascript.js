
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