const buttonNew = document.querySelector('.btn--new');
let scoreBoard = [];
let currentScore =0;
let isGameRunning
let activePlayer;

const startGame = () => {
    scoreBoard = [0,0];
    currentScore = 0;
    activePlayer =0;
    isGameRunning = true;
}
startGame();

buttonNew.addEventListener('click', function() {
     startGame();
});