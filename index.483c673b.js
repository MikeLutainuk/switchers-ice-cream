!function(){const e=document.querySelectorAll(".customer-reviews__item"),t=document.querySelectorAll(".customer-reviews__nav");let o=0;function l(o){for(let o=0;o<e.length;o++)e[o].classList.remove("active"),t[o].classList.remove("active");e[o].classList.add("active"),t[o].classList.add("active")}for(let e of t)e.onclick=()=>{o=+e.dataset.slide,l(o)};(()=>{const e={openModalBtn:document.querySelector("[data-modal-open='6']"),closeModalBtn:document.querySelector("[data-modal-close='6']"),modal:document.querySelector("[data-modal='6']")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open='111']"),closeModalBtn:document.querySelector("[data-modal-close='111']"),modal:document.querySelector("[data-modal='111']")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e=document.querySelector(".header__sliding-menu"),t=document.querySelectorAll(".header__slider-link"),o=document.querySelector("[data-menu-open]"),l=document.querySelector("[data-menu-close]"),n=document.body;o.addEventListener("click",(()=>{const t="true"===o.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),o.setAttribute("aria-expanded",!t),n.classList.add("overflow")})),l.addEventListener("click",(()=>{const t="false"===o.getAttribute("aria-expanded")||!0;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),n.classList.remove("overflow")})),t.forEach((t=>{t.addEventListener("click",(function(){e.classList.remove("is-open"),n.classList.remove("overflow")}))}))})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),l=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",l),o.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})()}();
//# sourceMappingURL=index.483c673b.js.map