////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    if(move === null || move === undefined) {
        return getInput();
    }
    else{
        return move;
    }
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    if(move === null || move === undefined){
    return randomPlay()
}
else {
    return move;
}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove){
        winner = 'tie';
    }
    else if (playerMove === 'rock'){
        if (computerMove === 'paper') {
            winner = 'computer';
        }
        else 
            winner = 'player';

    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock') {
            winner = 'player';
        }
        else {
            winner = 'computer'
        }
    else {
        if(computerMove === 'rock') {
            winner = 'computer';
        }
        else{
            winner = 'player';
        }
    }

    }
    else {

    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive(winner) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    if(winner === 'computer'){
        computerWins+=1;
    }
    if(winner === 'player') {
        playerWins+=1;
    }
  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    if (computerWins > 4){
        console.log("It's Over! Computer wins!")
    }
    if(playerWins > 4){
        console.log("It's Over! Player wins!");
    }
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,

  /* YOUR CODE HERE */

    return [playerWins, computerWins];
}










