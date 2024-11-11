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

const searchInput = document.getElementById("header-search");
const searchBtn = document.getElementById("search-btn");

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    if (window.location.pathname.includes("index.html")) {
      window.location.href = `shop/search-results.html?q=${encodeURIComponent(query)}`;
    } else if (
      window.location.pathname.includes("shop-female.html") || window.location.pathname.includes("shop-male.html") ||
      window.location.pathname.includes ("search-results.html")) {
      window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    } else {
      window.location.href = `../shop/search-results.html?q=${encodeURIComponent(query)}`;
    }
  }
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchBtn.addEventListener("click", performSearch);