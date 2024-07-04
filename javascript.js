
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

//Step 4: initialize game's scoring variables
let humanScore = 0;
let computerScore = 0;

//Step 5: Play a single round given a human choice and computer choice.
function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results");
    const runningScore = document.querySelector("#runningScore");
    if (humanChoice == computerChoice) {
        results.textContent = "It's a draw, no points!";
        //humanScore++;
        //computerScore++;
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            results.textContent = "You win! Rock beats scissors.";
            humanScore++;
        }
        else {
            results.textContent = "You lose. Paper beats rock.";
            computerScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            results.textContent = "You win! Paper beats rock.";
            humanScore++;
        }
        else {
            results.textContent = "You lose. Scissors beats paper.";
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            results.textContent = "You win! Scissors beats paper.";
            humanScore++;
        }
        else {
            results.textContent = "You lose. Rock beats scissors.";
            computerScore++;
        }
    }

    runningScore.textContent = "Your score: " + humanScore + "; Computer's score: " + computerScore;
}

//announce a winner once 5 pts is reached
function announceWinner() {
    if (humanScore == 5 || computerScore == 5) {
        results.style.backgroundColor = "pink";

        if (humanScore == 5 && computerScore == 5) {
            results.textContent = "It's a draw! Your score is: " + humanScore + " and the computer's score is: " + computerScore + ".";
        }
        else if (humanScore == 5) {
            results.textContent = "You win! Your score is: " + humanScore + " and the computer's score is: " + computerScore + ".";
        }
        else if (computerScore == 5) {
            results.textContent = "You lose. Your score is: " + humanScore + " and the computer's score is: " + computerScore + ".";
        }
}
}

//event listener for all choice buttons
const buttons = document.querySelectorAll("button");
    // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(button.id, computerChoice);
    announceWinner();
  });
});

