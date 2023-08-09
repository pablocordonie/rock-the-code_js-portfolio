import './skills.css';

const createAbilityTemplate = (data) => `
    <li class="rtc--cv-main-skills-item">
        <form>
            <label class="rtc--cv-main-skills-item_title" for="skill_level">${data.skill}</label>
            <progress class="rtc--cv-main-skills-item_level" id="skill_level" max="100" value="${data.level}"></progress>
            <span>${data.level}%</span>
        </form>
    </li>
`;

export const createAbilitiesList = (data) => {
    for (const ability of data.abilities) {
        const abilitiesList = document.querySelector('.rtc--cv-main-skills_list');
        abilitiesList.innerHTML += createAbilityTemplate(ability);
    }
}

export const addEventToInput = () => {
    const input = document.querySelector('#filter');
    input.addEventListener('input', toFilterSkills);
}

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
}