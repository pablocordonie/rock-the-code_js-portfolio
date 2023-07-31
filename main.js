import './css/style.css';
import authorData from './data/data.js';
import createHeaderData from './components/Header/header.js';
import createAboutData from './components/Section/main_content.js';

createHeaderData();
createAboutData(authorData);