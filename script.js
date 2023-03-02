class HamburgerMenu {
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
        this.nav.classList.add('fadeIn');

        this.menuIcon = document.createElement('span');
        this.menuIcon.innerText = 'menu';
        this.menuIcon.classList.add('material-icons', 'md-36', 'menu__icon', 'white');

        this.closeIcon = document.createElement('span');
        this.closeIcon.innerText = 'close';
        this.closeIcon.classList.add('material-icons', 'md-36', 'close__icon');

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
class MenuList {
    constructor(selector) {
        this.cont = document.querySelector(selector);
        this.btns = this.cont.querySelectorAll('.menu__button');
        this.pizzaMenu = this.cont.querySelector('.menu__list--pizza');
        this.kebabMenu = this.cont.querySelector('.menu__list--kebab');
        this.drinksMenu = this.cont.querySelector('.menu__list--drink');

        this.hideAllMenus();
        this.pizzaMenu.style.display = 'flex';
        for (const btn of this.btns) {
            btn.addEventListener('click', this.changeMenuList.bind(this));
        }
    }

    hideAllMenus() {
        this.pizzaMenu.style.display = 'none';
        this.kebabMenu.style.display = 'none';
        this.drinksMenu.style.display = 'none';
    }
    changeMenuList(e) {
            this.hideAllMenus()
            switch (e.target.value) {
                case 'pizza':
                    this.pizzaMenu.style.display = 'flex';
                    this.pizzaMenu.classList.add('fadeInLeft');
                    break;
                case 'kebab':
                    this.kebabMenu.style.display = 'flex';
                    this.kebabMenu.classList.add('fadeInLeft');
                    break;
                case 'drinks':
                    this.drinksMenu.style.display = 'flex';
                    this.drinksMenu.classList.add('fadeInLeft');
                    break;
            }
    }
}
class Slider {
    constructor(elemSelector) {
        this.currentSlide = 0;
        this.sliderSelector = elemSelector;
        this.elem = null;
        this.slider = null;
        this.slides = null;
        this.prev = null;
        this.next = null;
        this.time = null;
        
        this.generateSlider();
        this.changeSlide(this.currentSlide);
        this.handleMouseEnter();
    }
    generateSlider() {
        this.slider = document.querySelector(this.sliderSelector);
        this.slider.classList.add('slider');
        const slidesCnt = document.createElement('div');
        slidesCnt.classList.add('slider-slides-cnt');
        this.slides = this.slider.children;

        while (this.slides.length) {
            this.slides[0].classList.add('slider-slide');
            slidesCnt.append(this.slides[0]);
        }
        this.slides = slidesCnt.querySelectorAll('.slider-slide');
        this.slider.append(slidesCnt);

        this.createPrevNext();
    }
    slidePrev() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        this.changeSlide(this.currentSlide);
    }

    slideNext() {
        this.currentSlide++;
        if (this.currentSlide > this.slides.length - 1) {
            this.currentSlide = 0;
        }
        this.changeSlide(this.currentSlide);
    }

    changeSlide(index) {
        this.slides.forEach(slide => {
            slide.classList.remove('slider-slide-active');
            slide.setAttribute('aria-hidden', true);
        });
        this.slides[index].classList.add('slider-slide-active');
        this.slides[index].setAttribute('aria-hidden', false);

        this.currentSlide = index;

        clearTimeout(this.time);
        this.time = setTimeout(() => this.slideNext(), 8000);
    }
    handleMouseEnter() {
        this.slider.addEventListener('mouseenter', () => {
            clearTimeout(this.time);
        })
        this.slider.addEventListener('mouseout', () => {
            clearTimeout(this.time);
            this.time = setTimeout(() => this.slideNext(), 8000);
        })
    }
    createPrevNext() {
        this.prev = document.createElement('div');
        this.prev.type = "button";
        this.prev.innerText = "Previous";
        this.prev.classList.add('slider-button');
        this.prev.classList.add('slider-button-prev');
        this.prev.addEventListener('click', this.slidePrev.bind(this));

        this.next = document.createElement('div');
        this.next.type = "button";
        this.next.innerText = "Next";
        this.next.classList.add('slider-button');
        this.next.classList.add('slider-button-next');
        this.next.addEventListener('click', this.slideNext.bind(this));

        const nav = document.createElement('div');
        nav.classList.add('slider-nav');
        nav.appendChild(this.prev);
        nav.appendChild(this.next);

        this.slider.appendChild(nav);
    }
}

const menu = new HamburgerMenu('.header');
const slide = new Slider('#slider1');
const menuList = new MenuList('.main__menu');