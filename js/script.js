const API_BASE = `https://v2.api.noroff.dev`
const rainydaysApi = `${API_BASE}/rainy-days`

async function fetchJackets() {
  try {
    const response = await fetch(rainydaysApi);
    const { data: jackets } = await response.json();
    displayJackets(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error)
  } finally {
    // use this for cleanup, f.eks turn off loading spinner
  }
}

function createElement(elementType, className = "") {
  const element = document.createElement(elementType);
  if (className) element.className = className;
  return element;
}

function displayJackets(jackets) {
  const shopGrid = document.getElementById("shop-grid");
  shopGrid.innerHTML = ""; // Clear previous content if any

  jackets.forEach((jacket) => {
    // Create card container
    const card = createElement("a", "card");
    card.href = "#";

    // Image container with button
    const imgDiv = createElement("div", "img");
    const img = createElement("img");
    img.src = jacket.image.url;
    img.alt = jacket.image.alt || jacket.title;

    const addToCartButton = createElement("button", "add-to-cart");
    addToCartButton.innerHTML = `<i class="fa-solid fa-bag-shopping fa-2x"></i>`;

    imgDiv.appendChild(img);
    imgDiv.appendChild(addToCartButton);

    // Text container
    const textDiv = createElement("div", "text");
    const name = createElement("p", "name");
    name.textContent = jacket.title;

    const priceDiv = createElement("div");
    const price = createElement("p", "price");
    price.textContent = `$${jacket.discountedPrice}`;

    const oldPrice = createElement("p", "old-price");
    if (jacket.onSale) {
      oldPrice.textContent = `$${jacket.price}`;
    } else {
      oldPrice.style.display = "none"; // Hide if not on sale
    }

    // Append everything to the card
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