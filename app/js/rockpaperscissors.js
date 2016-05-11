////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
console.log("Please type 'playToFive();' to play a Best of 5 match against the computer.");

function getPlayerMove(move) {
    if(move === null || move === undefined) {
        playerMove = getInput();
        console.log("Player throws " + playerMove);
        return playerMove;
    }
    else {
        return move;
    } 
}

function getComputerMove(move) {
    if(move === null || move === undefined){
        computerMove = randomPlay();
        console.log("Computer throws " +computerMove);
        return computerMove;
    }
    else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove) {
        winner = 'tie';
    }
    else if(playerMove === 'rock') {
        if(computerMove === 'paper'){
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    else if(playerMove === 'paper') {
        if(computerMove === 'scissors'){
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5) {
        var playerToFive = getPlayerMove();
        var computerToFive = getComputerMove();
        var winnerToFive = getWinner(playerToFive, computerToFive);
        if(winnerToFive === 'player') {
            playerWins = playerWins + 1;
            console.log("Player gets a point! Player: " + playerWins + " Computer: " + computerWins);
        }
        if(winnerToFive === 'computer') {
            computerWins = computerWins + 1;
            console.log("Computer gets a point! Player: "+ playerWins + " Computer: " + computerWins);
        }
        if(winnerToFive === 'tie') {
            console.log("It was a tie, no points!");
        }
        if(computerToFive === null || playerToFive === null) {
            console.log("Something went wrong! Exiting the game now. :(");
            break;
        }
    }    
    return "The winner is the " + winnerToFive + ". Final score! Player " + playerWins + " and Computer " + computerWins;
}