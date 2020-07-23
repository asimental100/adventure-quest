console.log('quest page goes here');

import allQuests from '../data.js';
import { findByID, renderSection } from '../quest/questUtils.js';

const main = document.querySelector('main');

const questId = 'dragon';

const questData = findByID(allQuests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);