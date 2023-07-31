import './header.css';
import authorData from '../../data/data.js';

const createHeaderData = () => {
    const logoAnchor = document.querySelector('.rtc--cv-header-logo');

    logoAnchor.innerText = authorData.logo;
}

export default createHeaderData;