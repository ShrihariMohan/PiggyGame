/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
init () ;
function addFunction()
{
    scores[activePlayer] += roundScore ;
    roundScore = 0 ;
    document.getElementById('score-0').textContent = scores[0];
        document.getElementById('score-1').textContent = scores[1];
        if ( scores[activePlayer] >= 20)
        {
            
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;
            document.querySelector('.dice').style.display = 'none' ; // removing dice image ;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
             gamePLay = false ;// removing dice image ;


        }
        else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        document.getElementById('current-0').textContent = '0' ;
        document.getElementById('current-1').textContent = '0' ;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none' ; // removing dice image ;

        }
}

var scores , roundScore , activePlayer , gamePLay  ;
function init (){
gamePLay = true ;
scores = [ 0 ,0] ;
roundScore = 0 ;
activePlayer = 0 ;
//DOM OPerations
document.querySelector('.dice').style.display = 'none' ; // removing dice image ;

// intializing to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0' ;
document.getElementById('current-0').textContent = '0' ;
document.getElementById('current-1').textContent = '0' ;

document.querySelector('#name-0').textContent = 'Player 1' ;
document.querySelector('#name-1').textContent = 'Player 2' ;
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner') ;
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active') ; 



}

//document.querySelector('#current-'+activePlayer).textContent = dice ;


document.querySelector('.btn-roll').addEventListener('click', function(){
   
   if ( gamePLay) {
    // 1 . Random Number 
    var dice = Math.floor(Math.random() * 6 ) + 1 ;
    // 2. Display
    var diceDOM = document.querySelector('.dice') ;
    diceDOM.style.display ='block' ;
    diceDOM.src = 'dice-' + dice + '.png' ;

    // update round score
    if ( dice !== 1){
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {

        addFunction();
    }    
}

}) ; // callback function

document.querySelector('.btn-hold').addEventListener('click', addFunction);
document.querySelector('.btn-new').addEventListener('click', init) ;
   
