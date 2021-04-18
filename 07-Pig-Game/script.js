'use strict';
// 3 Buttons Selector
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Image Selector
const imgDice = document.querySelector('img');

const P0 = document.getElementById('current--0');
const P1 = document.getElementById('current--1');

const P0totalScore = document.getElementById('score--0');
const P1totalScore = document.getElementById('score--1');

const P0Section = document.querySelector('.player--0');
const P1Section = document.querySelector('.player--1');

// INIT FUNCTION
let currentScore, currentPlayer, score, playing;

function init() {
    currentScore = 0;
    currentPlayer = P0;
    score = [0, 0];
    playing = true;
    P0totalScore.innerText = score[0];
    P1totalScore.innerText = score[1];
    imgDice.setAttribute('hidden', true);
    // imgDice.style.visibility = "hidden";
    P0Section.classList.add("player--active");
    P1Section.classList.remove("player--active");
    P1Section.classList.remove('player--winner');
    P0Section.classList.remove('player--winner');
}
init();

// EVENT LISTENER
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);

// FUNCTIONS
function rollDice() {
    if (playing) {
        const randomNumber = Math.trunc(Math.random() * 6) + 1; // Math.ceil(Math.random()*6);
        imgDice.removeAttribute('hidden'); // imgDice.style.visibility = "visible";
        imgDice.src = `dice-${randomNumber}.png`;
        if (randomNumber === 1) {
            switchPlayer()
        } else {
            currentScore += randomNumber;
            currentPlayer.innerText = currentScore;
        }
    }
}

function switchPlayer() {
    currentScore = 0;
    currentPlayer.innerText = currentScore;
    currentPlayer = (currentPlayer == P0) ? P1 : P0;
    P0Section.classList.toggle('player--active');
    P1Section.classList.toggle('player--active');
}

function holdScore() {
    if (playing) {
        if (currentPlayer == P0) {
            score[0] += currentScore;
            P0totalScore.innerText = score[0];
            if (score[0] >= 100) {
                P0Section.classList.add('player--winner');
                P1Section.classList.remove('player--active');
                playing = false;
                return;
            }
        } 
        if (currentPlayer == P1) {
            score[1] += currentScore;
            P1totalScore.innerText = score[1];
            if (score[1] >= 100) {
                P1Section.classList.add('player--winner');
                playing = false;
                return;
            }
        }
        switchPlayer()
    }
}