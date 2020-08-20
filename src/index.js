import homePage from './home';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');
content.onload = homePage();

const homeBtn = document.getElementById('tab1');
homeBtn.addEventListener('click', () => {
  content.innerHTML = '';
  homePage();
});

const menuBtn = document.getElementById('tab2');
menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  menu();
});

const contactBtn = document.getElementById('tab3');
contactBtn.addEventListener('click', () => {
  content.innerHTML = '';
  contact();
});
