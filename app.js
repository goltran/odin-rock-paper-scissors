function computerPlay() {
    let option = ['rock', 'paper', 'scissers'];
    return option[Math.floor(Math.random() * 3)];
}



function playerPlay() {
    let player = prompt('Rock, Paper or Scissors?');
    return player.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    // This function return 1 when player wins, 2 when computer wins and 0 when tie game.
    if ((playerSelection == 'rock' && computerSelection == 'scissers') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 1;
    } else if ((computerSelection == 'rock' && playerSelection == 'scissers') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')) {
        return 2;
    } else {
        return 0;
    }
}

let playerRounds = 0;
let computerRounds = 0;

for (let i = 1; i <= 5; i++) {
    // your code here!
    console.log('Round ' + i);
    const playerSelection = playerPlay();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        console.log('Please select Rock, Paper or Scissors.')
        i--;
        continue;
    }
    const computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);
    switch (round) {
        case 1:
            console.log('You got this!');
            playerRounds++;
            break;
        case 2:
            console.log("Computer win!");
            computerRounds++;
            break;
        default:
            console.log('Tie Game! Repeat');
            i--;
            break;
    }
}
console.log('Fin ' + playerRounds + ' - ' + computerRounds);
if (playerRounds > computerRounds) {
    console.log('You Win this Game!');
} else {
    console.log('Computer Win this Game!');
}