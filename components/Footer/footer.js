import './footer.css'

const renderFooter = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML += `
        <p class="rtc--cv-footer_p">@2023 Rock{theCode} Todos los derechos reservados</p>
    `;
};

export default renderFooter;