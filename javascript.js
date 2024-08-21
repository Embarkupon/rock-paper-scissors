var humanScore = 0;
var computerScore = 0;
var playing = true;

/** while loop calls the playRound function until the player cancels the prompt. */
while(playing) {
    playRound(getHumanChoice(), getComputerChoice());
}

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
 *  IMPLEMENTATION
 *  the user is prompted to choose rock, paper, or scissors. While the answer is
 *  not either rock, paper, or scissors. The user will continue to recieve the prompt
 *  until the answer is rock, paper or scissors. The choice is then returned.
 */
function getHumanChoice() {
    let playerChoice = 'cancel';
    try {
        playerChoice = prompt("Will you play 'Rock', 'Paper' or 'Scissors'?");
        let enumerated = 0;
        while(playerChoice.toLowerCase() != 'rock' && playerChoice.toLowerCase() != 'paper' && playerChoice.toLowerCase() != 'scissors') {
            if (enumerated < 3) {
                playerChoice = prompt("Sorry, I didn't understand.\nWill you play 'Rock', 'Paper' or 'Scissors'?");
            } else {
                playerChoice = prompt("Please type one of the three choices:\n 'Rock', 'Paper' or 'Scissors'.");
            }
            enumerated++;
        }
    } catch (error) {
        playerChoice = 'cancel';
        playing = false;
    }
    return playerChoice;
}

/** The playRound functions plays takes the player's and computer's choices and
 *  compares them to determine who wins. Depending on whether the player wins, loses
 *  or the game ends in a draw, a boolean flag is set and determines the outcome
 *  of the round. At the end of the round (function) the results will be displayed
 *  and the scoreboard will be updated.
*/
function playRound(humanChoice, computerChoice) {
    let playerWon = true;
    let draw = false;
    let play = humanChoice.toLowerCase();
    console.log(`You chose ${play}`);
    if (humanChoice == 'cancel') {
        alert(`Thanks for playing!\nYour final score is ${humanScore}\nComputer's final score is ${computerScore}`);
        console.log('exiting game loop.')
        return;
    } else {
        console.log(`Computer chose ${computerChoice}`);
        switch(computerChoice) {
            case 'rock':
                if (play == 'rock') {       
                    draw = true;
                } else if (play == 'paper') {
                    playerWon = true;
                } else if (play == 'scissors') {
                    playerWon = false;
                }
                break;
            case 'paper':
                if (play == 'rock') {
                    playerWon = false;
                } else if (play == 'paper') {
                    draw = true;
                } else if (play == 'scissors') {
                    playerWon = true;
                }
                break;
            case 'scissors':
                if (play == 'rock') {
                    playerWon = true;
                } else if (play == 'paper') {
                    playerWon = false;
                } else if (play == 'scissors') {
                    draw = true;
                }
                break;
            default:
                break;
        }
    }
    if (playerWon && !draw) {
        humanScore++;
        alert(`You won! ${play} beats ${computerChoice}!\nPlayer got a point!\nYour score is ${humanScore}\nComputer score is ${computerScore}`);
    } else if(draw) {
        alert(`It's a Draw, you both chose ${play}!\nThe score didn't change.\nYour score is ${humanScore}\nComputer score is ${computerScore}`);
    } else {
        computerScore++;
        alert(`You lost! ${computerChoice} beats ${play}.\nComputer got a point!\nYour score is ${humanScore}\nComputer score is ${computerScore}`);
    }
}