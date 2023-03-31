const menu = document.querySelector(".menu__item--mobile");
menu.addEventListener("click", () => {
  document
    .querySelector(".menu__item-list--active")
    .classList.toggle("menu__item-list--clicked");
});
