

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='6']"),
    closeModalBtn: document.querySelector("[data-modal-close='6']"),
    modal: document.querySelector("[data-modal='6']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll('[data-modal-open]'),
//     closeModalBtn: document.querySelectorAll('[data-modal-close]'),
//     modal: document.querySelectorAll('[data-modal]'),
//     body: document.body,
//   };
//   // console.log(refs.openModalBtn);
//   // console.log(refs.closeModalBtn);
//   // console.log(refs.modal);
//   let index = 0;

//   for (let openBtn of refs.openModalBtn) {
//     openBtn.onclick = () => {
//       index = +openBtn.dataset.modalOpen;
//       openSomeModal(index);
//     };

//     function openSomeModal(num) {
//       for (let i = 0; i < refs.modal.length; i++) {
//         refs.modal[i].classList.add('is-hidden');
//       }
//       refs.modal[num].classList.remove('is-hidden');
//       refs.body.classList.add('overflow');
//     }
//   }

//   for (let closeBtn of refs.closeModalBtn) {
//     closeBtn.onclick = () => {
//       index = +closeBtn.dataset.modalClose;
//       closeSomeModal(index);
//     };

//     function closeSomeModal(num) {
//       refs.modal[num].classList.add('is-hidden');
//       refs.body.classList.remove('overflow');
//     }
//   }
// })();

// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open='21']"),
//       closeModalBtn: document.querySelector("[data-modal-close='21']"),
//       modal: document.querySelector("[data-modal='21']"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//   function toggleModal() {
//      refs.modal.classList.toggle("is-hidden");
//     }
//   })();

