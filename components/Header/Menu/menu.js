import './menu.css'

const renderMenu = () => {
    const nav = document.createElement('nav');
    nav.className = 'rtc--cv-header-nav';

    const menuList = document.createElement('ul');
    menuList.className = 'rtc--cv-header-nav-list';

    const skillsItem = document.createElement('li');
    const projectsItem = document.createElement('li');
    skillsItem.className = 'rtc--cv-header-nav-skills';
    projectsItem.className = 'rtc--cv-header-nav-projects';

    const skillsAnchor = document.createElement('a');
    skillsAnchor.innerText = 'Skills';
    skillsAnchor.className = 'rtc--cv-header-nav-skills-link';
    skillsAnchor.href = '/skills';

    const projectsAnchor = document.createElement('a');
    projectsAnchor.innerText = 'Projects';
    projectsAnchor.className = 'rtc--cv-header-nav-projects-link';
    projectsAnchor.href = '/projects';

    skillsItem.appendChild(skillsAnchor);
    projectsItem.appendChild(projectsAnchor);
    menuList.appendChild(skillsItem);
    menuList.appendChild(projectsItem);
    nav.appendChild(menuList);

    return nav.outerHTML;
};

export default renderMenu;