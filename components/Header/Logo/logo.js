import './logo.css'

const renderLogo = (data) => {
    const logoContainer = document.createElement('div');
    logoContainer.className = 'rtc--cv-header-logo';

    const logoAnchor = document.createElement('a');
    logoAnchor.className = 'rtc--cv-header-logo-link';
    logoAnchor.href = '/';

    const logo = document.createElement('img');
    logo.className = 'rtc--cv-header-logo-img';
    logo.src = `${data.logo}`;
    logo.alt = `Logo de ${data.author}`;

    logoAnchor.appendChild(logo);
    logoContainer.appendChild(logoAnchor);
    return logoContainer.outerHTML;
};

export default renderLogo;