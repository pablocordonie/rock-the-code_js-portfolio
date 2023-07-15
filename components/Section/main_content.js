import './main_content.css';
import sections from '../../data/data.js';

const createAboutTemplate = (section) => `
    <div class="rtc--cv-main-${section.href.toLowerCase()}_container">
        <div class="rtc--cv-main-${section.href.toLowerCase()}-img_container">
            <img src="#" alt="Foto de ${section.author}">
        </div>
        <div class="rtc--cv-main-${section.href.toLowerCase()}-text_container">
            <p>Texto a rellenar</p>
            <ul>
                <li>
                    <p>${section.author}</p>
                </li>
                <li>
                    <p>Actualmente busco empleo para ser ${section.job}</p>
                </li>
                <li>
                    <p>Email: 
                        <a href="mailto:${section.email}">${section.email}</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
`;

const createSectionTemplate = (section) => `
    <section id="${section.href.toLowerCase()}">
        ${createAboutTemplate(section)}
    </section>
`;

const createMainContent = () => {
    const main = document.querySelector('main');

    main.innerHTML += createSectionTemplate(sections[0]);
};

export default createMainContent;