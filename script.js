//the const
const buttonNew = document.querySelector('.btn--new');
const player1Score = document.querySelector('#name--0');
const player2Score = document.querySelector('#name--1');
const current1Score = document.querySelector('#current--0');
const current2Score= document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const player2 = document.querySelector('.player--1');
const player1 =ducument.querySelector('.player--0');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//the let
let scoreBoard = [];
let currentScore =0;
let isGameRunning
let activePlayer;
//the funtion
const startGame = () => {
    scoreBoard = [0,0];
    currentScore = 0;
    activePlayer =0;
    isGameRunning = true;

    player1Score.textContent=0;
    player2Score.textContent=0;
    current1Score.textContent=0;
    current2Score.textContent=0;

    dice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');

}
startGame();

function rollTheDice(){

};

function holdMyScore(){

};

function switchPlayer(){

};
//the button

buttonNew.addEventListener('click', function() {
     startGame();
}); 

buttonRoll.addEventListener('click', function() {
  rollTheDice();
});

buttonHold.addEventListener('click', function(){
    holdMyScore();

});

