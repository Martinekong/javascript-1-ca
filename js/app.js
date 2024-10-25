import { rainydaysApi } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

async function fetchJackets() {
  try {
    const response = await fetch(rainydaysApi);
    const { data: jackets } = await response.json();
    displayJackets(jackets)
    console.log(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error)
  }
}

function displayJackets(jackets) {
  const shopGrid = document.getElementById("shop-grid");

  jackets.forEach((jacket) => {
    const card = createElementWithClass("a", "card");
    card.href = `../shop/products.html?id=${jacket.id}`

    const imgDiv = createElementWithClass("div", "img");
    const img = createElement("img");
    img.src = jacket.image.url;
    img.alt = jacket.image.alt || jacket.title;

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

fetchJackets();