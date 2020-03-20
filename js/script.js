window.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.querySelectorAll('.menu__item');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', (e) => {
        toggle();
    });

    menu.addEventListener('click', (e) => {
        if (e.target.classList[0] !== 'menu_link') {
            return;
        }
        toggle();
    });

    function toggle() {
        hamburger.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active')
    }
})