import quests from '../data.js';

const section = document.querySelector('section');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    const link = document.createElement('a');
    link.href = '/quest/?id=' + quest.id;
    link.textContent = quest.title;

    section.append(link);
}