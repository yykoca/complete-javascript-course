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

const number = Math.ceil(Math.random()*20);
let score = 20;
console.log(number);
document.querySelector('.check').addEventListener('click', () => {
    
    const guessNumber = Number(document.querySelector(".guess").value);
    
    if(guessNumber === 0){
        document.querySelector(".message").textContent = "⛔️ No Number";
    } else if (guessNumber === number) {
        document.querySelector(".message").textContent = "correct";
        document.querySelector(".highscore").textContent = score;
        
        document.querySelector(".number").textContent = number;
        document.querySelector(".number").style.width = "25rem";
        document.querySelector("body").style.backgroundColor = "green";

    } 
    else if (guessNumber > number) {
        document.querySelector(".message").textContent = "too high";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guessNumber < number) {
        document.querySelector(".message").textContent = "too low";
        score--;
        document.querySelector(".score").textContent = score;
    }
})