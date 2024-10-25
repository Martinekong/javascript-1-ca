const menu = document.querySelector(".menu");
const menuBtn = document.getElementById("menu-btn")
const menuExitBtn = document.getElementById("menu-exit");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
})

menuExitBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active")
})