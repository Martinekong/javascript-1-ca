function addToCart() {
  const addToCartBtn = document.getElementById("add-to-cart");
  const cartBadge = document.getElementById("cart-count") ;

  let cart = JSON.parse(localStorage.getItem("cart"));
  updateCartBadge(cart) || [];

  const urlParams = new URLSearchParams(window.location.search);
  const jacketId = urlParams.get("id")

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      cart.push(jacketId);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartBadge(cart);
    })
  }
}

function updateCartBadge(cart) {
  const cartBadge = document.getElementById("cart-count");

  if (cart.length === 0) {
    cartBadge.style.display = "none";
  } else {
    cartBadge.style.display = "block";
    cartBadge.textContent = cart.length;
  }
}

addToCart();