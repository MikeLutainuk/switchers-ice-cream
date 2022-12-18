(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='111']"),
      closeModalBtn: document.querySelector("[data-modal-close='111']"),
      modal: document.querySelector("[data-modal='111']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();