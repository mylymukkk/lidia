(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    switcherToLogin: document.querySelector(".form__switcher--to-login"),
    switcherToRegister: document.querySelector(".form__switcher--to-register"),
    loginForm: document.querySelector(".form--login"),
    registerForm: document.querySelector(".form--register"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.switcherToLogin.addEventListener("click", switchForm);
  refs.switcherToRegister.addEventListener("click", switchForm);
  refs.modal.addEventListener("click", closeOnBackdropClick);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    refs.body.classList.add("no-scroll");
    document.addEventListener("keydown", handleEsc);
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
    document.removeEventListener("keydown", handleEsc);
  }

  function handleEsc(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function closeOnBackdropClick(event) {
    if (event.target === refs.modal) {
      closeModal();
    }
  }

  function switchForm() {
    refs.loginForm.classList.toggle("is-hidden");
    refs.registerForm.classList.toggle("is-hidden");
  }
})();
