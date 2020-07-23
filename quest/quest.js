import allQuests from '../data.js';
import { findById, renderSection } from '../quest/questUtils.js';

const main = document.querySelector('main');

const questId = 'monsters';

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);