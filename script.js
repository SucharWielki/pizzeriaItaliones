class Menu {
    constructor(selector) {
        this.cnt = document.querySelector(selector);
        this.menu = null;
        this.menuItems = null;
        this.nav = null;
        this.menuIcon = null;
        this.closeIcon = null;
        this.menuItemsText = ['O nas', 'Menu', 'Kontakt'];
        this.menuItemsHref = ['#about', '#menu', '#contact'];

        this.generateMenu();
        this.generateIcons();
        this.nav.addEventListener('click', this.toggleMenu.bind(this)); 
    }
    generateMenu() {
        this.menu = document.createElement('div');
        this.menu.classList.add('header__menu');
        
        this.menuItemsText.forEach((itemText, i) => {
        this.menuItems = document.createElement('a');
        this.menuItems.classList.add('menu__item');
        this.menuItems.innerText = itemText;
        this.menuItems.href = this.menuItemsHref[i];
        this.menuItems.addEventListener('click', this.toggleMenu.bind(this));
        this.menu.appendChild(this.menuItems);
        })

        this.cnt.appendChild(this.menu);
    }
    generateIcons() {
        this.nav = document.createElement('nav');
        this.nav.classList.add('header__nav');

        this.menuIcon = document.createElement('span');
        this.menuIcon.innerText = 'menu';
        this.menuIcon.classList.add('material-icons');
        this.menuIcon.classList.add('md-36');
        this.menuIcon.classList.add('menu__icon');
        this.menuIcon.classList.add('white');

        this.closeIcon = document.createElement('span');
        this.closeIcon.innerText = 'close';
        this.closeIcon.classList.add('material-icons');
        this.closeIcon.classList.add('md-36');
        this.closeIcon.classList.add('close__icon');

        this.nav.appendChild(this.menuIcon);
        this.nav.appendChild(this.closeIcon);
        this.cnt.appendChild(this.nav);
    }
    toggleMenu() {
        if (this.menu.classList.contains('showMenu')) {
            this.menu.classList.remove('showMenu');
            this.closeIcon.style.display = 'none';
            this.menuIcon.style.display = 'block';
        } else {
            this.menu.classList.add('showMenu');
            this.closeIcon.style.display = 'block';
            this.menuIcon.style.display = 'none';
        }
    }
}
const menu = new Menu('.header');