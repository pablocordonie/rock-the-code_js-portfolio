import authorData from './data/data.js';
import renderHeader from './components/Header/header.js';
import renderAbout from './components/About/about.js';
const main = document.querySelector('main');

renderHeader(authorData);

if (main.innerHTML === '') {
    renderAbout(authorData);
}