export function createElement(elementType) {
  return document.createElement(elementType)
}

export function createElementWithClass(elementType, className = "") {
  const element = document.createElement(elementType);
  if (className) {
    element.className = className
  };
  return element;
}

export function displayJackets(jacketsToDisplay) {
  const shopGrid = document.getElementById("shop-grid");
  shopGrid.innerHTML = "";

  jacketsToDisplay.forEach((jacket) => {
    const card = createElementWithClass("a", "card");

    if (
      window.location.pathname.includes("shop-female.html") || 
      window.location.pathname.includes("shop-male.html") ||
      window.location.pathname.includes ("search-results.html")) {
      card.href = `products.html?id=${jacket.id}`;
    } else {
      card.href = `shop/products.html?id=${jacket.id}`;
    }

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

    if (jacket.onSale) {
      const oldPrice = createElementWithClass("p", "old-price");
      oldPrice.textContent = `$${jacket.price}`;
      priceDiv.append(price, oldPrice);
    } else {
      priceDiv.appendChild(price)
    }

    textDiv.append(name, priceDiv);
    card.append(imgDiv, textDiv);
    shopGrid.appendChild(card);
  });
}
