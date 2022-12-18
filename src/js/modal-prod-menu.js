(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open7]"),
    closeModalBtn: document.querySelector("[data-modal-close7]"),
    modal: document.querySelector("[data-modal7]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

