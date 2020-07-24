import quests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    window.location = '../results/index.html';
}

const section = document.querySelector('section');

let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    if (user.complete[quest.id]) {
        completedQuests++;
    }
}

if (completedQuests === quests.length) {
    window.location = '../results/index.html';
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    if (user.complete[quest.id] === true) {
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