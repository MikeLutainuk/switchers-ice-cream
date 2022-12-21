(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='12']"),
      closeModalBtn: document.querySelector("[data-modal-close='12']"),
      modal: document.querySelector("[data-modal='12']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();