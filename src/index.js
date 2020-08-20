import homePage from './home';
import menu from './menu';
import contact from './contact';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

const homeBtn = document.getElementById('tab1');
homeBtn.addEventListener('click', () => {
  clearContent();
  homePage();
});

const menuBtn = document.getElementById('tab2');
menuBtn.addEventListener('click', () => {
  clearContent();
  menu();
});

const contactBtn = document.getElementById('tab3');
contactBtn.addEventListener('click', () => {
  clearContent();
  contact();
});

console.log('Hello');
