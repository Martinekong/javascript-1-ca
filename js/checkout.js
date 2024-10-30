import { createElement, createElementWithClass } from "./utils.js";
import { rainydaysApi, loadingSpinner } from "./constants.js";

const cartSummaryContainer = document.getElementById("cart-summary");
let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

async function fetchCartItems() {
  cartSummaryContainer.innerHTML = "";
  let totalPrice = 0;

  for (const cartItem of cartItems) {
    const { id: itemId, quantity: itemQuantity, size } = cartItem;
    try {
      loadingSpinner.classList.remove("hidden");
      const response = await fetch(`${rainydaysApi}/${itemId}`);
      const data = await response.json();
      const itemData = data.data;
      console.log(itemData);

      const cartDiv = createElement("div");
      cartDiv.classList.add("cart-item");

      const img = createElement("img");
      img.src = itemData.image.url;
      img.alt = itemData.image.alt;

      const name = createElement("p");
      name.textContent = itemData.title.replace(/^Rainy Days\s*/, "");

      const sizeText = createElement("p");
      sizeText.textContent = `Size: ${size}`

      const itemPrice = itemData.discountedPrice * itemQuantity;
      totalPrice += itemPrice;

      const price = createElement("p");
      price.textContent = `$${itemPrice.toFixed(2)}`

      const quantityContainer = createElementWithClass("div", "quantity-container");

      const minusBtn = createElementWithClass("button", "minus-btn");
      minusBtn.classList.add("fa-solid");
      minusBtn.classList.add("fa-minus")
      minusBtn.addEventListener("click", () => adjustQuantity(itemId, -1, size));

      const quantityDisplay = createElement("span");
      quantityDisplay.textContent = itemQuantity;
      quantityDisplay.classList.add("quantity-display");

      const plusBtn = createElementWithClass("button", "plus-btn");
      plusBtn.classList.add("fa-solid");
      plusBtn.classList.add("fa-plus")
      plusBtn.addEventListener("click", () => adjustQuantity(itemId, 1, size));

      quantityContainer.appendChild(minusBtn);
      quantityContainer.appendChild(quantityDisplay);
      quantityContainer.appendChild(plusBtn);

      cartDiv.appendChild(img);
      cartDiv.appendChild(name);
      cartDiv.appendChild(sizeText)
      cartDiv.appendChild(price);
      cartDiv.appendChild(quantityContainer);

      cartSummaryContainer.appendChild(cartDiv);
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      loadingSpinner.classList.add("hidden");
    }
  }

  updateTotalPrice(totalPrice);
}

function updateTotalPrice(totalPrice) {
  const cartTotal = document.getElementById("cart-total");
  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function adjustQuantity(itemId, adjustment, size) {
  const itemIndex = cartItems.findIndex((item) => item.id === itemId && item.size === size);
  
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += adjustment;

    if (cartItems[itemIndex].quantity <= 0) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartBadge(cartItems);
    fetchCartItems();
  }
}

function updateCartBadge(cartItems) {
  const cartBadge = document.getElementById("cart-count");
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (totalQuantity === 0) {
    cartBadge.style.display = "none";
  } else {
    cartBadge.style.display = "block";
    cartBadge.textContent = totalQuantity;
  }
}

fetchCartItems();