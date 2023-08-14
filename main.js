import authorData from './data/data.js';
import renderHeader from './components/Header/header.js';
import renderAbout from './components/About/about.js';
import renderSkills from './components/Skills/skills.js';
const main = document.querySelector('main');
const logoAnchor = document.querySelector('.rtc--cv-header-logo');
const skillsAnchor = document.querySelector('.rtc--cv-header-nav-skills > a');
const projectsAnchor = document.querySelector('.rtc--cv-header-nav-projects > a');
const contactAnchor = document.querySelector('.rtc--cv-header-nav-contact > a');

renderHeader(authorData);
renderAbout(authorData);

const anchors = [logoAnchor, skillsAnchor, projectsAnchor, contactAnchor];

const handleListener = (event) => {
    event.preventDefault();
    main.innerHTML = '';
    const linkHref = event.target.pathname;

    if (linkHref === '/skills') {
        renderSkills(authorData);
    } else if (linkHref === '/projects') {
        renderProjects(authorData);
    } else if (linkHref === '/contact') {
        renderContact(authorData);
    } else {
        renderAbout(authorData);
    }
};

for (const anchor of anchors) {
    anchor.addEventListener('click', handleListener);
}