import { createElement } from "./utils.js";
import { rainydaysApi, loadingSpinner } from "./constants.js";

const cartSummaryContainer = document.getElementById("cart-summary")
const cartItems = JSON.parse(localStorage.getItem("cart") || "[]"); 

async function fetchCartItems() {
  cartSummaryContainer.innerHTML = "";

  for (const itemId of cartItems) {
    try {
      loadingSpinner.classList.remove("hidden")
      const response = await fetch(`${rainydaysApi}/${itemId}`);
      const data = await response.json();
      const itemData = data.data
      console.log(itemData)

      const cartDiv = createElement("div");
      cartDiv.classList.add("cart-item");

      const img = createElement("img");
      img.src = itemData.image.url;
      img.alt = itemData.image.alt;

      const name = createElement("p");
      name.textContent = itemData.title.replace(/^Rainy Days\s*/, "");



      const price = createElement("p");
      price.textContent = `$${itemData.discountedPrice}`;

      cartDiv.appendChild(img);
      cartDiv.appendChild(name);
      cartDiv.appendChild(price);

      cartSummaryContainer.appendChild(cartDiv);
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      loadingSpinner.classList.add("hidden")
    }
  }
}

fetchCartItems();
