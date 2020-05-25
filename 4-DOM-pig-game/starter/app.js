/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

function rollDice() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).innerHTML = roundScore
    } else {
        nextPlayer()
    }
    checkWhoWon()
}

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer()
    
});


function nextPlayer() {
    
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none'
}

function checkWhoWon(){
    if (scores[0] > 100) {
        document.querySelector('#name-0').innerHTML = "Winner!"
    } else if (scores[1] > 100) {
        document.querySelector('#name-1').innerHTML = "Winner!"
    }
}

function init(){
    scores  = [0,0];
    roundScore  = 0
    activePlayer = 0;

    document.querySelector('#name-0').textContent = "Player 1"
    document.querySelector('#name-1').textContent = "Player 2"

    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
}