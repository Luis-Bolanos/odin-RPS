//Initialize inputs
let playerInput,
    cpuInput,
    outcome;

game();
            
function playRound (playerInput, cpuInput) {
    outcome = compareInput(playerInput, cpuInput);
    console.log(outcome);
}

//Recursive function that checks for the correct input.
function inputChecker() {
    playerInput = prompt("Welcome to Rock, Paper, Scissors. Please enter Rock, Paper, or Scissors: ");
    if (playerInput.toLowerCase() === "rock" || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissors") {
        console.log("You chose " + playerInput.charAt(0).toUpperCase() + playerInput.slice(1));
    } else {
        console.log("Wrong input. Try again.");
        inputChecker(playerInput);
    }
    return playerInput;
}

//Function that gets random CPU input
function computerPlay() {
    let cpuRNG = Math.floor(Math.random() * 3);
    cpuRNG === 0 ? cpuInput = "Rock" : (cpuRNG === 1 ? cpuInput = "Paper" : (cpuRNG === 2 ? cpuInput = "Scissors" : cpuInput = "Vulcan"));
    console.log("PC chose " + cpuInput);
    return cpuInput;
}

function compareInput(playerInput, cpuInput) {
    if (playerInput.toLowerCase() === cpuInput.toLowerCase()) {
        return outcome = "Whoa! It's a tie!";
    } else if ((playerInput.toLowerCase() === "rock" && cpuInput.toLowerCase() === "scissors") || (playerInput.toLowerCase() === "paper" && cpuInput.toLowerCase() === "rock") || (playerInput.toLowerCase() === "scissors" && cpuInput.toLowerCase() === "paper")) {
        return outcome = "You Win! " + playerInput.charAt(0).toUpperCase() + playerInput.slice(1) + " beats " + cpuInput;
    } else if ((playerInput.toLowerCase() === "scissors" && cpuInput.toLowerCase() === "rock") || (playerInput.toLowerCase() === "rock" && cpuInput.toLowerCase() === "paper") || (playerInput.toLowerCase() === "paper" && cpuInput.toLowerCase() === "scissors")) {
        return outcome = "You Lose! " + cpuInput + " beats " + playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    }
}

//Runs 5 iterations of RPS game
function game() {
    for (let i = 0; i < 5; i++) {
        playerInput = inputChecker();
        cpuInput = computerPlay();
        playRound(playerInput, cpuInput);
    }
}