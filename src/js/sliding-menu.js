(() => {
    const mobileMenu = document.querySelector(".header__sliding-menu");
    const menuLink = document.querySelectorAll(".header__slider-link");   
    const menuBtnOpen = document.querySelector("[data-menu-open]");
    const menuBtnClose = document.querySelector('[data-menu-close]');
    const body = document.body;
    menuBtnOpen.addEventListener("click", () => {
        // console.log(mobileMenu);
        const expanded = menuBtnOpen.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.classList.toggle("is-open");
        menuBtnOpen.setAttribute("aria-expanded", !expanded);
        body.classList.add('overflow');
    });
    menuBtnClose.addEventListener('click', () => {
        const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'false' || true;
        menuBtnOpen.classList.toggle('is-open');
        menuBtnOpen.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('is-open');
        body.classList.remove('overflow');
    });

    menuLink.forEach(item => {
        item.addEventListener('click', function () {
            mobileMenu.classList.remove('is-open');
                    body.classList.remove('overflow');
        });
    });
})();