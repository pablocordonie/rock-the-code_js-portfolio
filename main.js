import './css/style.css';
import authorData from './data/data.js';
import createHeaderData from './components/Header/header.js';
import createAboutContent from './components/About/about.js';
import createAbilitiesList from './components/Skills/skills.js';
import createContactContent from './components/Contact/contact';

createHeaderData(authorData);
createAboutContent(authorData);
createAbilitiesList(authorData);
createContactContent(authorData);