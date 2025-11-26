let userChoice = prompt ("Rock, Paper, Scissors, Shoot!");
let humanScore = 0
let computerScore = 0

//computer choice
const stringArray = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * stringArray.length);
const randomString = stringArray[randomIndex];
const computerMessage = "Computer Chooses " + randomString; 


alert(computerMessage); 


//human choice 
 if (userChoice == "Rock" && randomString == "Scissors") {
  console.log("You Win! ")
    ++humanScore;
    --computerScore;
  console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
 } 
else if (userChoice == "Scissors" && randomString == "Paper") {
console.log("You Win! " + "Score: " + (1 + humanScore));
    ++humanScore;
    --computerScore;
console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
} 
else if (userChoice == "Paper" && randomString == "Rock") {
console.log("You Win! " + "Score: " + (1 + humanScore));
    ++humanScore;
    --computerScore;
console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}
else if (userChoice == randomString) { 
  console.log("No one Wins!!");
  console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}
else {
  console.log("You lose")
    --humanScore;
    ++computerScore;
    console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}

