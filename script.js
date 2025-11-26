




let userChoice = prompt ("Rock, Paper, Scissors, Shoot!");
let formattedChoice = userChoice.toUpperCase(); // so text input doesn't matter 
let humanScore = 0
let computerScore = 0

//computer choice
const stringArray = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * stringArray.length);
const randomString = stringArray[randomIndex];
const computerMessage = "Computer Chooses " + randomString; 


alert(computerMessage); 


function theGame(); {
 if (formattedChoice == "ROCK" && randomString == "Scissors") {
  console.log("You Win! ")
    ++humanScore;
    --computerScore;
  console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
 } 
else if (formattedChoice == "SCISSORS" && randomString == "Paper") {
console.log("You Win! " + "Score: " + (1 + humanScore));
    ++humanScore;
    --computerScore;
console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
} 
else if (formattedChoice == "PAPER" && randomString == "Rock") {
console.log("You Win! " + "Score: " + (1 + humanScore));
    ++humanScore;
    --computerScore;
console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}
else if (formattedChoice == randomString.toUpperCase) { 
  console.log("No one Wins!!");
  console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}
else {
  console.log("You lose")
    --humanScore;
    ++computerScore;
    console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}

}