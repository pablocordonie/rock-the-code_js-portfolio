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

const createAbilitiesList = (data) => {
    for (const ability of data.abilities) {
        const abilitiesList = document.querySelector('.rtc--cv-main-skills_list');
        abilitiesList.innerHTML += createAbilityTemplate(ability);
    }
}

export default createAbilitiesList;