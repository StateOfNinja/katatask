const burgerBtn = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const continuationBtn = document.querySelectorAll(".continuation");
const aboutText = document.querySelector(".about-us__text-content");
const modalFeedback = document.querySelector(".modal-feedback");
const modalCall = document.querySelector(".modal-call");
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

burgerBtn.addEventListener("click", openSidebar);

function openSidebar() {
  sidebar.classList.add("sidebar--open");
  overlay.classList.add("overlay--active");
}

function closeSidebar() {
  sidebar.classList.remove("sidebar--open");
  overlay.classList.remove("overlay--active");
}

function openModal(modal) {
  modal.classList.add("modal--active");
  overlay.classList.add("overlay--active");
  sidebar.classList.remove("sidebar--open");
}

function closeModal(modal) {
  modal.classList.remove("modal--active");
  overlay.classList.remove("overlay--active");
}

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.closest(".icon--message")) {
    openModal(modalFeedback);
  }
  if (target.closest(".icon--phone")) {
    openModal(modalCall);
  }

  if (target.closest(".icon--close") || target.closest(".overlay--active")) {
    const activeModal = document.querySelector(".modal--active");
    if (activeModal) closeModal(activeModal);
    closeSidebar();
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
