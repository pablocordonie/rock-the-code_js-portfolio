import authorData from './data/data.js';
import createHeaderData from './components/Header/header.js';
import createAboutContent from './components/About/about.js';
import { createAbilitiesList } from './components/Skills/skills.js';
import { addEventToInput } from './components/Skills/skills.js';
import createContactContent from './components/Contact/contact';

createHeaderData(authorData);
createAboutContent(authorData);
createAbilitiesList(authorData);
addEventToInput();
createContactContent(authorData);