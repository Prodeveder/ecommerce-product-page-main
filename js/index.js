console.log("Testing ....");

// Close The Menu

const closeMenu = document.querySelector(".close__icon");
const openMenu = document.querySelector(".menu__icon");
const Menu = document.querySelector(".mobile__navbar__container");

closeMenu.addEventListener("click", () => {
  Menu.style.display = "none";
});

openMenu.addEventListener("click", () => {
  Menu.style.display = "flex";
});

