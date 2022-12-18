(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='333']"),
      closeModalBtn: document.querySelector("[data-modal-close='333']"),
      modal: document.querySelector("[data-modal='333']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();