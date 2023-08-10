import './about.css';

const createAboutTemplate = (data) => `
    <section class="rtc--cv-main-about" id="about">
        <div class="rtc--cv-main-about_container">
            <div class="rtc--cv-main-about-img_container">
                <img class="rtc--cv-main-about-img" src="${data.image}" alt="Foto de ${data.author}">
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
                <li class="rtc--cv-main-about-school_info">
                    <p>${data.school}</p>
                </li>
                <li class="rtc--cv-main-about-description_info">
                    <p>${data.text}</p>
                <li>
            </ul>
        </div>
    </section>
`;

const renderAbout = (data) => {
    const main = document.querySelector('main');
    main.innerHTML += createAboutTemplate(data);
    return main;
};

export default renderAbout;