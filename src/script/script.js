const burgerBtn = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const continuationBtn = document.querySelectorAll(".continuation");
const aboutText = document.querySelector(".about-us__text-content");

// burgerBtn.addEventListener("click", () => {
//   burgerBtn.classList.toggle("header__burger--active");
//   sidebar.classList.toggle("sidebar--open");
//   overlay.classList.toggle("overlay--active");
// });

// document.addEventListener("click", (e) => {
//   if (
//     burgerBtn.classList.contains("header__burger--active") &&
//     !sidebar.contains(e.target) &&
//     !burgerBtn.contains(e.target)
//   ) {
//     burgerBtn.classList.remove("header__burger--active");
//     sidebar.classList.remove("sidebar--open");
//     overlay.classList.remove("overlay--active");
//   }
// });

if (window.innerWidth < 768) {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    speed: 900,
    effect: "slider",
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 16,
  });
}

document.addEventListener("click", (e) => {
  const target = e.target;
  let className = target.dataset.toggleClass;
  if (!className) return;

  let elem = document.querySelector(`.${className}`);

  if (elem) {
    elem.classList.toggle("content--expanded");

    target.classList.toggle("continuation--expanded");

    if (target.classList.contains("continuation--expanded")) {
      target.textContent = "Скрыть";
    } else {
      target.textContent = "Показать все";
    }
  }
});
