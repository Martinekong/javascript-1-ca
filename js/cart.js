function addToCart() {
  const addToCartBtn = document.getElementById("add-to-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartBadge(cart);

  const urlParams = new URLSearchParams(window.location.search);
  const jacketId = urlParams.get("id");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const selectedSize = document.querySelector('input[name="size"]:checked');

      if (!selectedSize) {
        alert("Please select a size before adding to cart.");
        return;
      }

      const size = selectedSize.value;

      const existingItem = cart.find((item) => item.id === jacketId && item.size === size);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id: jacketId, quantity: 1, size });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartBadge(cart);

      addToCartBtn.textContent = "added to cart";
      setTimeout(() => {
        addToCartBtn.textContent = "add to cart";
      }, 2000);
    });
  }
}

function updateCartBadge(cart) {
  const cartBadge = document.getElementById("cart-count");
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 0) {
    cartBadge.style.display = "none";
  } else {
    cartBadge.style.display = "block";
    cartBadge.textContent = totalQuantity;
  }
}

addToCart();

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("order-confirmed.html")) {
    localStorage.removeItem("cart");

    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
      cartBadge.style.display = "none";
    }
  }
});