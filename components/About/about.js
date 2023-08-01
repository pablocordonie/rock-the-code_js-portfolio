import './about.css';

const createImageTemplate = (data) => `<img class="rtc--cv-main-about-img" src="${data.image}" alt="Foto de ${data.author}">`;
const createTextTemplate = (data) => `<p class="rtc--cv-main-about-description">${data.text}</p>`;
const createDataListTemplate = (data) => `
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
    </ul>
`;

const createImageData = (data) => {
    const imgContainer = document.querySelector('.rtc--cv-main-about-img_container');
    imgContainer.innerHTML += createImageTemplate(data);

    return imgContainer;
};

const createTextData = (data) => {
    const textContainer = document.querySelector('.rtc--cv-main-about-text_container');

    textContainer.innerHTML += createTextTemplate(data);
    textContainer.innerHTML += createDataListTemplate(data);

    return textContainer;
};

const createAboutContent = (data) => {
    const aboutContainer = document.querySelector('.rtc--cv-main-about_container');
    aboutContainer.appendChild(createImageData(data));
    aboutContainer.appendChild(createTextData(data));
};

export default createAboutContent;