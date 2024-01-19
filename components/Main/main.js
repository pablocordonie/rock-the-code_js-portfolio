import './main.css'
import createAboutTemplate from './About/about';
import createSkillsTemplate from './Skills/skills';
import createProjectsTemplate from './Projects/projects';
import { addEventToInput } from '../../utils/events';

export const renderAbout = (data) => {
    const main = document.querySelector('main');
    main.innerHTML += createAboutTemplate(data);
    return main;
};

export const renderSkills = (data) => {
    const main = document.querySelector('main');
    main.innerHTML += createSkillsTemplate(data);
    addEventToInput();
    return main;
};

export const renderProjects = (data) => {
    const main = document.querySelector('main');
    main.innerHTML += createProjectsTemplate(data);
    return main;
};