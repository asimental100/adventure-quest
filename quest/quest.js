import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');
const backToMap = document.querySelector('#back-to-map');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

backToMap.addEventListener('click', () => {
    window.location = '../map';
});

main.append(sectionEl);