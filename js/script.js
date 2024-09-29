// HEADER
const header = document.querySelector("header");

const headerStart = document.createElement("div");
headerStart.classList.add("header-start");
header.appendChild(headerStart);

const headerLogo = document.createElement("a");
headerLogo.href = "/index.html";
headerLogo.classList.add("header-logo");
headerLogo.textContent = "rainydays";
headerStart.appendChild(headerLogo);

const headerCart = document.createElement("i");
headerCart.classList.add("fa-solid", "fa-bag-shopping", "fa-2x");
headerStart.appendChild(headerCart);
// Need to make this a button (go to cart)


const headerEnd = document.createElement("div");
headerEnd.classList.add("header-end");
header.appendChild(headerEnd);

const headerNavBtn = document.createElement("button");
const hamburgerMenu = document.createElement("i");
hamburgerMenu.classList.add("fa-solid", "fa-bars", "fa-2x");
headerNavBtn.appendChild(hamburgerMenu);
headerEnd.appendChild(headerNavBtn);
//Need to make the nav menu

const headerSearchLabel = document.createElement("label")
headerSearchLabel.setAttribute("for", "header-search");

const headerSearchInput = document.createElement("input");
headerSearchInput.setAttribute("type", "search");
headerSearchInput.setAttribute("id", "header-search");
headerSearchInput.setAttribute("placeholder", "search...");

headerEnd.appendChild(headerSearchLabel);
headerEnd.appendChild(headerSearchInput);

const headerSearchBtn = document.createElement("button");
const searchIcon = document.createElement("i");
searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "fa-2x");
headerSearchBtn.appendChild(searchIcon);
headerEnd.appendChild(headerSearchBtn);