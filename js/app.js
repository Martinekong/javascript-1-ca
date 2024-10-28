import { rainydaysApi } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

let jackets = [];

async function fetchJackets() {
  try {
    const response = await fetch(rainydaysApi);
    const { data } = await response.json();
    jackets = data;
    displayJackets(jackets)
    console.log(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error)
  }
}

function displayJackets(jacketsToDisplay) {
  const shopGrid = document.getElementById("shop-grid");
  shopGrid.innerHTML = "";

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

function showFilterOptions() {
  const filterBtn = document.getElementById("filter-btn");
  const filterSection = document.getElementById("filter-section")

  filterBtn.addEventListener("click", () => (
    filterSection.classList.toggle("visible")
  ));
}

function applyFilter() {
  const genderFilter = document.getElementById("gender-filter").value;
  const saleFilter = document.getElementById("sale-filter").checked;

  const filteredJackets = jackets.filter((jacket) => {
    const matchesGender = genderFilter === "all" || jacket.gender === genderFilter;
    const matchesSale = !saleFilter || jacket.onSale;

    return matchesGender && matchesSale;
  });

  displayJackets(filteredJackets);

  document.getElementById("filter-section").classList.remove("visible");
};

showFilterOptions()

const applyFiltersBtn = document.getElementById("apply-filter");
applyFiltersBtn.addEventListener("click", applyFilter) 

fetchJackets();