'use strict';

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
*/

const number = Math.ceil(Math.random() * 20);
let score = 20;
console.log(number);
let guessArray = [];
document.querySelector('.check').addEventListener('click', checkNumber);
document.addEventListener('keydown', (e) => (e.code === "Enter") ? checkNumber() : null);

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function checkNumber() {
    const guessNumber = Number(document.querySelector(".guess").value);
    document.querySelector(".guess").value = null;
    if (guessNumber === 0) {
        displayMessage("⛔️ No Number");
    } else if (guessNumber === number) {
        document.querySelector(".highscore").textContent = score;
        displayMessage("🎉 Correct Number!");
        
        document.querySelector(".number").textContent = number;
        document.querySelector(".number").style.width = "25rem";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (guessNumber < 0 || guessNumber > 20){
        displayMessage("Wrong entry!");
    } else if (guessNumber > number && !guessArray.includes(guessNumber)) {
        score--;
        document.querySelector(".score").textContent = score;
        displayMessage("📈 Too high !!");
        guessArr(guessNumber);
    } else if (guessNumber < number && !guessArray.includes(guessNumber)) {
        score--;
        document.querySelector(".score").textContent = score;
        displayMessage("📉 Too low !!");
        guessArr(guessNumber);
    } else if (guessArray.includes(guessNumber)) {
        displayMessage("Same number !!");
    }
    console.log(guessArray);
}

function guessArr(number){
        guessArray.push(number);
}