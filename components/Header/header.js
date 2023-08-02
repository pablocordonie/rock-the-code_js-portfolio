import './header.css';

const createLogo = (data) => `<img class="rtc--cv-header-logo-img" src="${data.logo}" alt="Logo de ${data.author}">`;

const createHeaderData = (data) => {
    const logoAnchor = document.querySelector('.rtc--cv-header-logo');

    logoAnchor.innerHTML += createLogo(data);
}

export default createHeaderData;