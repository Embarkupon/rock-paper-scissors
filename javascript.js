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