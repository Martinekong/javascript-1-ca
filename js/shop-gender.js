import { rainydaysApi, loadingSpinner } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

let jackets = [];

const currentPage = window.location.pathname;
const genderFilter = currentPage.includes("shop-female") ? "Female" : "Male";

async function fetchJackets() {
  try {
    loadingSpinner.classList.remove("hidden")
    const response = await fetch(rainydaysApi);
    const { data } = await response.json();
    jackets = data;
    const filteredJackets = jackets.filter(jacket => jacket.gender === genderFilter);
    displayJacketsByGender(filteredJackets)
    console.log(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error);
  } finally {
    loadingSpinner.classList.add("hidden");
  }
}

fetchJackets();

function displayJacketsByGender(jacketsToDisplay) {
  const shopGrid = document.getElementById("shop-grid");

  jacketsToDisplay.forEach((jacket) => {
    const card = createElementWithClass("a", "card");
    card.href = `../shop/products.html?id=${jacket.id}`
  
    const imgDiv = createElementWithClass("div", "img");
    const img = createElement("img");
    img.src = jacket.image.url;
    img.alt = jacket.image.alt;
    imgDiv.appendChild(img);
  
    const textDiv = createElementWithClass("div", "text");
    const name = createElementWithClass("p", "name");
    name.textContent = jacket.title.replace(/^Rainy Days\s*/, "");
  
    const priceDiv = createElement("div");
    const price = createElementWithClass("p", "price");
    price.textContent = `$${jacket.discountedPrice}`;
  
    const oldPrice = createElementWithClass("p", "old-price");
    if (jacket.onSale) {
      oldPrice.textContent = `$${jacket.price}`;
    } else {
      oldPrice.style.display = "none";
    }
  
    priceDiv.appendChild(price);
    priceDiv.appendChild(oldPrice);
    
    textDiv.appendChild(name);
    textDiv.appendChild(priceDiv);
  
    card.appendChild(imgDiv);
    card.appendChild(textDiv);
  
    shopGrid.appendChild(card);
  });  
}