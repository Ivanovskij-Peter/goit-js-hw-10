import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/item.hbs';
import AllItemTemplate from './templates/allitems.hbs';
const listRef = document.querySelector('.js-menu');

function generateMenu(menu) {
  const item = itemTemplate(menu);
  listRef.insertAdjacentHTML('afterbegin', item);
}
generateMenu(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const btn = document.querySelector('.js-switch-input');
const classBody = document.querySelector('body');
const saveDataLocalStorage = function (key, data) {
  localStorage.setItem(key, data);
};
const removeClasselement = function () {
  classBody.classList.remove('light-theme');
  classBody.classList.remove('dark-theme');
};
const addClassElement = function (newClass) {
  classBody.classList.add(newClass);
};
const update = function (darkTheme) {
  if (darkTheme) {
    addClassElement('dark-theme');
  } else {
    addClassElement('light-theme');
  }
};
btn.addEventListener('click', event => {
  let darkTheme = event.target.checked;
  saveDataLocalStorage('theme', darkTheme);
  removeClasselement();
  Boolean(localStorage.getItem('theme'));
  update(darkTheme);
});
const checkTheme = function () {
  let theme = localStorage.getItem('theme');
  if (theme !== null) {
    let result = theme === 'true' ? true : false;
    update(result);
  }
};
checkTheme();
