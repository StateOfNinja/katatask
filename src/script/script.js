const burgerBtn = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const continuationBtn = document.querySelectorAll(".continuation");
const aboutText = document.querySelector(".about-us__text-content");
const icons = document.querySelectorAll(".icon");
const modalFeedback = document.querySelector(".modal-feedback");
const modalCall = document.querySelector(".modal-call");
const iconClose = document.querySelector(".icon--close");
const modal = document.querySelector(".modal");

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

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("header__burger--active");
  sidebar.classList.toggle("sidebar--open");
  overlay.classList.toggle("overlay--active");
});

function openModal(modal) {
  modal.classList.add("modal--active");
  overlay.classList.add("overlay--active");
  closeBurger();
}

function closeModal(modal) {
  console.log("1");
  modal.classList.remove("modal--active");
  overlay.classList.remove("overlay--active");
}

function closeBurger() {
  burgerBtn.classList.remove("header__burger--active");
  sidebar.classList.remove("sidebar--open");
}

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".icon--message")) {
    openModal(modalFeedback);
  }
  if (target.closest(".icon--phone")) {
    openModal(modalCall);
  }
  if (
    target.classList.contains("icon--close") ||
    (overlay.classList.contains("overlay--active") &&
      !target.closest(".modal") &&
      !target.closest(".icon"))
  ) {
    console.log("2");
    closeModal(modalFeedback);
    closeModal(modalCall);
  }
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
