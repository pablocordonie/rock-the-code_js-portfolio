import './header.css';

const createLogo = (data) => `<span role="img">${data.logo}</span>`;

const createHeaderData = (data) => {
    const logoAnchor = document.querySelector('.rtc--cv-header-logo');

    logoAnchor.innerHTML += createLogo(data);
}

export default createHeaderData;