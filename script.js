const menu = document.querySelector('.header__menu');
const menuItems = document.querySelectorAll('.menu__item');
const nav = document.querySelector('.header__nav');
const closeIcon = document.querySelector('.close__icon');
const menuIcon = document.querySelector('.menu__icon');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

nav.addEventListener('click', toggleMenu)

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    }
)