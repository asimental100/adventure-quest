import quests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('GAME OVER!\nYou have died!\nYou had ' + user.gold + 'gold.');
    window.location('../index.html');
}

const section = document.querySelector('section');

let completedQuests = 0;


for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'line-through';
        section.append(span);
    } else {
        const link = document.createElement('a');
        link.href = '/quest/?id=' + quest.id;
        link.textContent = quest.title;
    
        section.append(link);
    }
    
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    if (user.completed[quest.id]) {
        completedQuests++;
    }

    if (completedQuests === quests.length) {
        alert('Well Done! You have won the game and finished with ' + user.gold + ' gold!');
        localStorage.clear();
        window.location('../index.html');
    }
}