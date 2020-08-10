import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/item.hbs';
import AllItemTemplate from './templates/allitems.hbs';
const listRef = document.querySelector('.js-menu');
// const item = itemTemplate(menu);
// listRef.insertAdjacentHTML('afterbegin', item);

function generateMenu(menu) {
  const item = menu.map(el => AllItemTemplate(el)).join('');
  listRef.insertAdjacentHTML('afterbegin', item);
}
generateMenu(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const btn = document.querySelector('.js-switch-input');
const classBody = document.querySelector('body');
btn.addEventListener('click', () => {
  let darkTheme = btn.checked ? true : false;
  localStorage.setItem('theme', darkTheme);
  localStorage.getItem('theme') === 'true'
    ? classBody.classList.add('dark-theme')
    : classBody.classList.remove('dark-theme');
});
localStorage.getItem('theme') === 'true'
  ? classBody.classList.add('dark-theme')
  : classBody.classList.remove('dark-theme');
