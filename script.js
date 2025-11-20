console.log("hello world")

//generate random number 
// if number is less than or equal to 0.33 return rock \ if greater than 0.33 but less than or equal to 0.66 return scissors / 
//if greater than 0.66 and less than or equal to 1 return paper
 

function getComputerChoice () {
    const random = Math.random(); 

    if (random <= 0.33 ) {
        console.log("rock");
    } else if  (random > 0.33 && random <= 0.66) {
        console.log("scissors")
    } else {
        console.log("paper");
    } 
}

getComputerChoice();


// the problem = have user input rock, paper, or scissors. 

//psuedocode: I need a function that returns the users input


function getHumanChoice() {
   let userInput = prompt("Rock, Paper, Scissors, Shoot");
    console.log(userInput);
}

getHumanChoice();