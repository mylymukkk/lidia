window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 50) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
