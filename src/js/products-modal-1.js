(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-products]'),
      closeModalBtn: document.querySelector('[data-modal-close-products]'),
      modal: document.querySelector('[data-modal-products]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);


    function toggleModal() {
      refs.modal.classList.toggle('products-modal__hidden');
    }
  })();

