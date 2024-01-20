import './about.css';

const createAboutTemplate = (data) => `
    <section class="rtc--cv-main-about_container">
        <div class="rtc--cv-main-about-img_container">
            <img class="rtc--cv-main-about-img" src="${data.image}" alt="Foto de ${data.author}">
            <div class="rtc--cv-main-about-networks_info">
                <a class="rtc--cv-main-about-networks_info-linkedin_img" href="${data.networks[0].href}" target="_blank">
                    <img src="${data.networks[0].img}" alt="Icono de LinkedIn">
                </a>
                <a class="rtc--cv-main-about-networks_info-github_img" href="${data.networks[1].href}" target="_blank">
                    <img src="${data.networks[1].img}" alt="Icono de GitHub">
                </a>
            </div>
        </div>
        <ul class="rtc--cv-main-about-personal_info">
            <li class="rtc--cv-main-about-author_info">
                <p>${data.author}</p>
            </li>
            <li class="rtc--cv-main-about-procedence_info">
                <p>${data.city}, ${data.country}</p>
                </li>
            <li class="rtc--cv-main-about-job_info">
                <p>${data.job}</p>
            </li>
            <li class="rtc--cv-main-about-email_info">
                <p>${data.email}</p>
            </li>
            <li class="rtc--cv-main-about-phone_info">
                <p>${data.phone}</p>
            </li>
            <li class="rtc--cv-main-about-description_info">
                <p>${data.text}</p>
            <li>
        </ul>
    </section>
`;

export default createAboutTemplate;