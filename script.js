const buttonNew = document.querySelector('.btn--new');
const player1Score = document.querySelector('#name--0');
const player2Score = document.querySelector('#name--1');
const current1Score = document.querySelector('#current--0');
const current2Score= document.querySelector('#current--1');
let scoreBoard = [];
let currentScore =0;
let isGameRunning
let activePlayer;

const startGame = () => {
    scoreBoard = [0,0];
    currentScore = 0;
    activePlayer =0;
    isGameRunning = true;
    player1Score.textContent=0;
    player2Score.textContent=0;
    current1Score.textContent=0;
    current2Score.textContent=0;
}
startGame();

buttonNew.addEventListener('click', function() {
     startGame();
});