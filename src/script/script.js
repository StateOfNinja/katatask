const burgerBtn = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("header__burger--active");
  sidebar.classList.toggle("sidebar--open");
  overlay.classList.toggle("overlay--active");
});

document.addEventListener("click", (e) => {
  if (
    burgerBtn.classList.contains("header__burger--active") &&
    !sidebar.contains(e.target) &&
    !burgerBtn.contains(e.target)
  ) {
    burgerBtn.classList.remove("header__burger--active");
    sidebar.classList.remove("sidebar--open");
    overlay.classList.remove("overlay--active");
  }
});
