import { rainydaysApi } from "./constants.js";

async function fetchJackets() {
  try {
    const response = await fetch(rainydaysApi);
    const { data: jackets } = await response.json();
    displayJackets(jackets)
    console.log(jackets)
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

  jackets.forEach((jacket) => {
    // Create card container
    const card = createElement("a", "card");
    card.href = `../shop/products.html?id=${jacket.id}`

    // Image container with button
    const imgDiv = createElement("div", "img");
    const img = createElement("img");
    img.src = jacket.image.url;
    img.alt = jacket.image.alt || jacket.title;
    // The images doesnt have alt text ...

    const addToCartButton = createElement("button");
    addToCartButton.setAttribute("id", "add-to-cart");
    addToCartButton.innerHTML = `<i class="fa-solid fa-bag-shopping fa-2x"></i>`;

    addToCartButton.addEventListener("click", () => {
      event.preventDefault();
      cartCount++;
      updateCartBadge();
    });

    imgDiv.appendChild(img);
    imgDiv.appendChild(addToCartButton);

    // Text container
    const textDiv = createElement("div", "text");
    const name = createElement("p", "name");
    name.textContent = jacket.title.replace(/^Rainy Days\s*/, "");

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


const cartBadge = document.getElementById("cart-badge");
let cartCount = 0;

// Function to update the cart badge
function updateCartBadge() {
  cartBadge.textContent = cartCount;
  cartBadge.style.display = cartCount > 0 ? "flex" : "none";
}

// Redirect to cart/checkout when clicking the cart button
const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", () => {
  window.location.href = "checkout.html"; // Adjust the path as needed
});

// Initialize badge visibility on page load
updateCartBadge();