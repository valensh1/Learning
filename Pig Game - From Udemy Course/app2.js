/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*Udemy Challenge
3 Challenges:
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6's in a row. After tha, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property
   in Javascript. This is a good opportunity to use Google to figure this out:)
3. Add another dice to the game, so that there are two dices now. The players loosees his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so
   take a look at the CSS code for the first one.)



*/
let gamePlaying = true;
let activePlayer = 0;
let roundScore = 0;
let scores = [0,0];
init();


diceRolls = []
dice2Rolls = []
previousDiceRoll = 0
let counter = 0

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
    //1. Random number
    let dice = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    
    

    //2. Display the result
    //1st dice
    let diceDOM = document.getElementById('dice1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';

    //2nd dice
    let diceDOM2 = document.getElementById('dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-'+ dice2 + '.png';


    //3. Update the round score IF the rolled number was NOT a 1 or if rolled two 6's in a row
    
        diceRolls.push(dice);
        dice2Rolls.push(dice2);
        counterAdj = counter++ - 1;
        previousDiceRoll = diceRolls[counterAdj];
        previousDice2Roll = dice2Rolls[counterAdj];
        console.log(previousDiceRoll);
        console.log(previousDice2Roll);
      
    if (((dice === 6 && dice === previousDiceRoll)&& dice2 === 6 && dice2 === previousDiceRoll) || dice ===1 || dice2 ===1){
        scores[activePlayer] = 0;
        document.getElementById('score-'+activePlayer).innerHTML = scores[activePlayer]
        nextPlayer();

    } else if (dice !==1 && dice2 !==1) {
        //add score
        roundScore += (dice+dice2)
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
    } 
    else {
        //Next player
        nextPlayer();
    }
}});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
    //Add CURRENT score to GLOBAL score
    scores [activePlayer] += roundScore

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer]>=winningScore){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!'; 
      document.getElementById('dice1').style.display = 'none';
      document.getElementById('dice2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }
    else {
        nextPlayer();
    }
}});

function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
        winningScore = prompt ('Set Winning Score');
        scores = [0,0];
        activePlayer = 0; 
        roundScore = 0;
        gamePlaying = true;
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
     };




 






























