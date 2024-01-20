import './projects.css';

const createProjectTemplate = (item) => `
    <li class="rtc--cv-main-projects-item">
        <form>
            <a class="rtc--cv-main-projects-item_link" href="${item.href}" target="_blank">
                <h3 class="rtc--cv-main-projects-item_title">${item.name}</h3>
                <img class="rtc--cv-main-projects-item_preview" src="${item.src}" alt="Imagen previa del proyecto ${item.name}">
            </a>
        </form>
    </li>
`;

const createProjectsListTemplate = (data) => {
    let currentTemplate = '';
    for (const item of data.projects) {
        currentTemplate += createProjectTemplate(item);
    }
    return currentTemplate;
};

const createProjectsTemplate = (data) => `
    <section class="rtc--cv-main-projects" id="projects">
        <h2>Projects</h2>
        <ul class="rtc--cv-main-projects_list" id="projects-list">${createProjectsListTemplate(data)}</ul>
    </section>
`;

export default createProjectsTemplate;