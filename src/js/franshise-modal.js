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