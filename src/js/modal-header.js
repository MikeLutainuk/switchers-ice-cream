(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='header']"),
      closeModalBtn: document.querySelector("[data-modal-close='header']"),
      modal: document.querySelector("[data-modal='header']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();