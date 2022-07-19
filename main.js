const toogleBtn = document.querySelector('navbar__toogleBtn');
const menus = document.querySelector('navbar__menu');
const icons = document.querySelector('navbar__icons');


toogleBtn.addEventListener('click', ()=>{
    menus.classList.toggle('active');
    icons.classList.toggle('active');
});