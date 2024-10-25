const menu = document.querySelector(".menu");
const menuBtn = document.getElementById("menu-btn")
const menuExitBtn = document.getElementById("menu-exit");

let menuActive = false;

menuBtn.addEventListener("click", (event) => {
  menu.classList.toggle("menu-active");
  menuActive = true;
  event.stopPropagation();
})

menuExitBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  menuActive = false;
})

document.addEventListener("click", (event) => {
  if (menuActive && !menu.contains(event.target)) {
    event.preventDefault();
    menu.classList.remove("menu-active");
    menuActive = false;
  }
});