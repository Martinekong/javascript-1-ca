import { displayOverlayMessage, createElementWithClass } from "./utils.js";

// Header
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


// Search
const searchInput = document.getElementById("header-search");
const searchBtn = document.getElementById("search-btn");

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    if (
      window.location.pathname.includes("shop-female.html") || 
      window.location.pathname.includes("shop-male.html") ||
      window.location.pathname.includes ("search-results.html") ||
      window.location.pathname.includes("products.html")) {
      window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    } else if (
      window.location.pathname.includes("about") ||
      window.location.pathname.includes("checkout")) {
      window.location.href = `../shop/search-results.html?q=${encodeURIComponent(query)}`;
    } else {
      window.location.href = `shop/search-results.html?q=${encodeURIComponent(query)}`
    }
  }
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchBtn.addEventListener("click", performSearch);


// Footer
const newsletterBtn = document.getElementById("newsletter-btn");
const footerNewsletterInput = document.getElementById("footer-newsletter-input")

newsletterBtn.addEventListener("click", () => {
  if (footerNewsletterInput.value.includes("@")) {
    displayOverlayMessage("Thank you for subscribing to our newsletter!")
    footerNewsletterInput.value = "";
  } else {
    displayOverlayMessage("Please fill out a valid email!")
  }
})

// Back to top btn
function showBackToTopBtn() {
  const topBtn = createElementWithClass("button", "secondary-btn top-btn");
  topBtn.setAttribute("aria-label", "Back to top");
  const topIcon = createElementWithClass("i", "fa-solid fa-chevron-up");
  topBtn.appendChild(topIcon);
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

showBackToTopBtn();