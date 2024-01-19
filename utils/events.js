import authorData from '../data/data';
import { renderAbout, renderSkills, renderProjects } from '../components/Main/main';

const toFilterSkills = (event) => {
    const inputValue = event.target.value.toUpperCase();
    const ul = document.querySelector('.rtc--cv-main-skills_list');
    const li = ul.querySelectorAll('.rtc--cv-main-skills-item');

    for (let i = 0; i < li.length; i++) {
        const form = li[i].children[0];
        const progressLabel = form.children[0].innerText;

        if (progressLabel.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';
        }
    }
};

export const addEventToInput = () => {
    const input = document.querySelector('#filter');
    input.addEventListener('input', toFilterSkills);
};

export const handleListener = (event) => {
    const main = document.querySelector('main');

    event.preventDefault();
    main.innerHTML = '';
    const linkHref = event.target.pathname;

    if (linkHref === '/skills') {
        renderSkills(authorData);
    } else if (linkHref === '/projects') {
        renderProjects(authorData);
    } else {
        renderAbout(authorData);
    }
};