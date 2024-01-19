import './skills.css';

const createSkillTemplate = (item) => `
    <li class="rtc--cv-main-skills-item">
        <form>
            <label class="rtc--cv-main-skills-item_title" for="skill_level">${item.skill}</label>
            <progress class="rtc--cv-main-skills-item_level" id="skill_level" max="100" value="${item.level}"></progress>
            <span>${item.level}%</span>
        </form>
    </li>
`;

const createSkillsListTemplate = (data) => {
    let currentTemplate = '';
    for (const item of data.skills) {
        currentTemplate += createSkillTemplate(item);
    }
    return currentTemplate;
};

const createSkillsTemplate = (data) => `
    <section class="rtc--cv-main-skills" id="skills">
        <h2>Skills</h2>
        <form>
            <label class="rtc--cv-main-skills-input_title" for="filter">
                <span role="img">🔍️</span>
            </label>
            <input class="rtc--cv-main-skills-input" type="text" name="filter" id="filter" placeholder="Filter by name of the tech skill">
        </form>
        <ul class="rtc--cv-main-skills_list" id="skills-list">${createSkillsListTemplate(data)}</ul>
    </section>
`;

export default createSkillsTemplate;