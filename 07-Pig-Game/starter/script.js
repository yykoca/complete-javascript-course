'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('img');
// imgDice.src = `dice-3.png`

const currentScoreP0 = document.getElementById('current--0');
const currentScoreP1 = document.getElementById('current--1');

const showTotalScoreP0 = document.getElementById('score--0');
const showTotalScoreP1 = document.getElementById('score--1');

const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

let totalScoreP0 = 0;
let totalScoreP1 = 0;

showTotalScoreP0.innerText = totalScoreP0;
showTotalScoreP1.innerText = totalScoreP1;


imgDice.setAttribute('hidden', true);
// imgDice.style.visibility = "hidden";


// player1 = {
//     current: 0,
//     score: 0
// }




let currentScore = 0;
let currentPlayer = currentScoreP0;
let score = [0, 0]


btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);

function rollDice() {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    // const randomNumber = Math.ceil(Math.random()*6);
    console.log(randomNumber);
    imgDice.removeAttribute('hidden');
    // imgDice.style.visibility = "visible";
    imgDice.src = `dice-${randomNumber}.png`;

    if (randomNumber === 1) {
        switchPlayer()
    } else {
        currentScore += randomNumber;
        currentPlayer.innerText = currentScore;
    }
}

function switchPlayer() {
    currentScore = 0;
    currentPlayer.innerText = currentScore;
    currentPlayer = (currentPlayer == currentScoreP0) ? currentScoreP1 : currentScoreP0;
    player0Section.classList.toggle('player--active');
    player1Section.classList.toggle('player--active');
}

function holdScore(){
    if (currentPlayer == currentScoreP0) {
        totalScoreP0 += currentScore;
        showTotalScoreP0.innerText = totalScoreP0;
    } else {
        totalScoreP1 += currentScore;        
        showTotalScoreP1.innerText = totalScoreP1;
    }
    switchPlayer()
}