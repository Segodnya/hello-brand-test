// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Pop-up
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__container");
let openPopupButton = document.querySelector(".lead__btn");
let closePopupButton = document.querySelector(".popup__close-button");
let inputName = document.querySelector(".popup__input_type_name");
let inputEmail = document.querySelector(".popup__input_type_email");
let inputSpecial = document.querySelector(".popup__input_type_special");

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const data = { name: inputName.value, email: inputEmail.value, special: inputSpecial.value };
  closePopup();
  return data;
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);

// Menu

let menuButton = document.querySelector(".header__menu");
let closeMenuButton = document.querySelector(".menu__close");
let menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
