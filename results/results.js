import { getUser } from '../userUtils.js';

const resultsBody = document.getElementById('results-body');
const resetButton = document.getElementById('reset-button');
const resultsHeader = document.getElementById('results-header');
const resultsP = document.getElementById('results-p');

const user = getUser();

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

if (user.hp <= 0) {
    resultsHeader.textContent = `GAME OVER!`;
    resultsHeader.style.borderBottom = 'solid 10px red';
    resultsP.textContent = `You have died and lost all of your gold pieces (${user.gold}).`;
    resultsBody.style.backgroundColor = 'black';
    resultsBody.style.color = 'red';
} else {
    resultsHeader.textContent = `Congratulations!`;
    resultsHeader.style.borderBottom = 'solid 10px blue';
    resultsP.textContent = `You Win and have finished with ${user.hp} HP and ${user.gold} Gold.`;
    resultsBody.style.backgroundColor = 'lightseagreen';
    resultsBody.style.color = 'cornsilk';
}