const burgerBtn = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const continuationBtn = document.querySelectorAll(".continuation");
const aboutText = document.querySelector(".about-us__text-content");

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
