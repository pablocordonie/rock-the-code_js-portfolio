import './contact.css';

const createContactTemplate = (data) => `
    <a href="mailto:${data.email}" class="rtc--cv-main-contact-email">
        <p>${data.email}</p>
    </a>
    <a href="tel:${data.phone}" class="rtc--cv-main-contact-phone_number">
        <p>${data.phone}</p>
    </a>
    <a href="${data.cv}" class="rtc--cv-main-contact-cv_file" download="cv">
        <p>Download my CV</p>
    </a>
`;

const createContactContent = (data) => {
    const contactContainer = document.querySelector('.rtc--cv-main-contact_container');
    contactContainer.innerHTML += createContactTemplate(data);
};

export default createContactContent;