import './skills.css';

const createSkillTemplate = (data) => `
    <li class="rtc--cv-main-skills-item">
        <form>
            <label class="rtc--cv-main-skills-item_title" for="skill_level">${data.skill}</label>
            <progress class="rtc--cv-main-skills-item_level" id="skill_level" max="100" value="${data.level}"></progress>
            <span>${data.level}%</span>
        </form>
    </li>
`;

export const createSkillsTemplate = (data) => `
    <section class="rtc--cv-main-skills" id="skills">
        <h2>Skills</h2>
        <form>
            <label class="rtc--cv-main-skills-input_title" for="filter">
          <span role="img">🔍️</span>
            </label>
            <input class="rtc--cv-main-skills-input" type="text" name="filter" id="filter"
          placeholder="Filter by name of the tech skill">
        </form>
        <ul class="rtc--cv-main-skills_list" id="skills-list"></ul>
    </section>
`;

export const createSkillsList = (data) => {
    for (const skill of data.skills) {
        const skillsList = document.querySelector('.rtc--cv-main-skills_list');
        skillsList.innerHTML += createSkillTemplate(skill);
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