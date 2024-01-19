import authorData from './data/data.js';
import renderHeader from './components/Header/header.js';
import { renderAbout } from './components/Main/main.js';
import renderFooter from './components/Footer/footer.js';
import { handleListener } from './utils/events.js';

renderHeader(authorData);
renderAbout(authorData);
renderFooter();

const logoAnchor = document.querySelector('.rtc--cv-header-logo-img');
const skillsAnchor = document.querySelector('.rtc--cv-header-nav-skills-link');
const projectsAnchor = document.querySelector('.rtc--cv-header-nav-projects-link');

const anchors = [logoAnchor, skillsAnchor, projectsAnchor];

for (const anchor of anchors) {
    anchor.addEventListener('click', handleListener);
}