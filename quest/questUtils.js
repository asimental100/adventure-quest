import { getUser, setUser } from '../userUtils.js';

export function renderSection(quest) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.textContent = quest.title;

    const img = document.createElement('img');
    img.src = quest.image;

    const form = document.createElement('form');
    const description = document.createElement('div');
    description.textContent = quest.description;
    form.append(description);
    
    for (let i = 0; i < quest.choices.length; i++) {
        const label = document.createElement('label');
        const labelDiv = document.createElement('div');
        const choice = quest.choices[i];

        labelDiv.textContent = choice.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.value = choice.id;
        input.name = 'choices';

        label.append(labelDiv, input);
        form.append(label);
    }

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.style.marginBottom = '20px';

    button.addEventListener('click', () => {
        button.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const choiceID = formData.get('choices');
        const results = findById(quest.choices, choiceID);

        const user = getUser();

        user.gold += results.gold;
        user.hp += results.hp;
        user.complete[quest.id] = true;

        setUser(user);

        const resultDiv = document.querySelector('#results');
        resultDiv.textContent = results.result;

    });

    form.append(button);
    section.append(div, img, form);
    
    return section;
}

export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.id === idName) {
            return item;
        }
    }
    return null;
}