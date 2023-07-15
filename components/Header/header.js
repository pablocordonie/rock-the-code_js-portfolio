import './header.css';
import sections from '../../data/data.js';

const createHeader = () => {
    const header = document.querySelector('header');

    const createHeaderTemplate = () => `
        <a class ="rtc--cv-header-logo" href="#${sections[0].href.toLowerCase()}">${sections[0].logo}</a>
        <nav>
            <ul>
                <li>
                    <a href="#${sections[1].href.toLowerCase()}">${sections[1].logo} ${sections[1].href}</a>
                </li>
                <li>
                    <a href="#${sections[2].href.toLowerCase()}">${sections[2].logo} ${sections[2].href}</a>
                </li>
            </ul>
        </nav>
    `;

    header.innerHTML += createHeaderTemplate();
    return header;
}

export default createHeader;