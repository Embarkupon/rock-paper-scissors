console.log(getHumanChoice());
console.log(getComputerChoice());
/** function getComputerChoice generates a random number between 1 and 3.
 *  That number is then put through a switch statement, with each case returning
 *  either 'rock', 'paper', or 'scissors' depending on the number.
 */
function getComputerChoice() {
    const min = 1;
    const max = 3;
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("shouldn't be here...");
            break;
    }   
}

/** PSEUDOCODE
 *  1 Prompt user to type their choice/or use buttons with established choices
 *  2 check if user input a valid play, if valid then play it, else ask again until input is valid
 *  3 return user input
 */
function getHumanChoice() {
    let playerChoice = prompt("Will you play 'Rock', 'Paper' or 'Scissors'?");
    let enumerated = 0;
    while(playerChoice.toLowerCase() != 'rock' && playerChoice.toLowerCase() != 'paper' && playerChoice.toLowerCase() != 'scissors') {
        if (enumerated < 3) {
            playerChoice = prompt("Will you play 'Rock', 'Paper' or 'Scissors'?");
        } else {
            playerChoice = prompt("please select 'Rock', 'Paper' or 'Scissors'.");
        }
        enumerated++;
    }
    return playerChoice
}