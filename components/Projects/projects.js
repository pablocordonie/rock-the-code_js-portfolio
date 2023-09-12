import './projects.css';

const createProjectTemplate = (item) => `
    <li class="rtc--cv-main-projects-item">
        <form>
            <a class="rtc--cv-main-projects-item_link" id="${item.name}_project" href="${item.href}" target="_blank">
                <label class="rtc--cv-main-projects-item_title" for="${item.name}_project">${item.name}</label>
                <img class="rtc--cv-main-projects-item_preview" src="${item.img}" alt="Imagen previa del proyecto ${item.name}">
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

const renderProjects = (data) => {
    const main = document.querySelector('main');
    main.innerHTML += createProjectsTemplate(data);
    return main;
}

export default renderProjects;