(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-btn"),
    closeMenuBtn: document.querySelector(".sidebar-menu__btn"),
    menu: document.querySelector(".sidebar-menu"),
  };

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
  }

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
