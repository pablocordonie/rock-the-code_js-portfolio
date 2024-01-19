import './header.css';
import renderLogo from './Logo/logo';
import renderMenu from './Menu/menu';

const renderHeader = (data) => {
    const header = document.querySelector('header');

    header.innerHTML += `
        ${renderLogo(data)}
        ${renderMenu()}
    `;

    return header;
};

export default renderHeader;