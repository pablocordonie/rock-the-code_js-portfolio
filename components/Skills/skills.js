import './skills.css';

const createAbilityTemplate = (data) => `
    <li class="rtc--cv-main-skills-item">
        <p class="rtc--cv-main-skills-item_title">${data.skill}</p>
        <p class="rtc--cv-main-skills-item_level">${data.level}</p>
    </li>
`;

const createAbilitiesList = (data) => {
    for (const ability of data.abilities) {
        const abilitiesList = document.querySelector('.rtc--cv-main-skills_list');
        abilitiesList.innerHTML += createAbilityTemplate(ability);
    }
}

export default createAbilitiesList;