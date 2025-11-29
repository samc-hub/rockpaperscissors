


let userChoice; 
let formattedChoice;
let humanScore = 0;
let computerScore = 0;

 //initializing array
const stringArray = ['Rock', 'Paper', 'Scissors'];
let randomIndex = Math.floor(Math.random() * stringArray.length);
let randomString = stringArray[randomIndex];



function getComputerChoice() {
const stringArray = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * stringArray.length);
 randomString = stringArray[randomIndex];
let computerMessage = "Computer Chooses " + randomString; 
alert(computerMessage);
}


function getUserChoice() {
  userChoice = prompt("Rock, Paper, Scissors, Shoot!"); 
  formattedChoice = userChoice.toUpperCase();
  return formattedChoice;
}

function playRound() {
  getUserChoice();
  getComputerChoice();
  if (formattedChoice == "ROCK" && randomString == "Scissors") {
      alert("You Win This Round!")
        ++humanScore;
        --computerScore;
      console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
    } 
    else if (formattedChoice == "SCISSORS" && randomString == "Paper") {
    alert("You Win This Round!");
        ++humanScore;
        --computerScore;
    console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
    } 
    else if (formattedChoice == "PAPER" && randomString == "Rock") {
    alert("You Win This Round!");
        ++humanScore;
        --computerScore;
    console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
    }
    else if (formattedChoice == randomString.toUpperCase()) { 
      alert("It's A Draw This Round");
      console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
    }
    else {
      alert("You Lost This Round!")
        --humanScore;
        ++computerScore;
        console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
    }

    
}

function playGame() {
playRound();
playRound();
playRound();
playRound();
playRound();

function declareWinner() {
  if (humanScore > computerScore) {
    console.log("You have won the game!");
  } else if (computerScore > humanScore) {
    console.log("You have lost the game")
  }
}
declareWinner();
}

playGame();