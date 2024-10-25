import { rainydaysApi } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const jacketId = urlParams.get("id")

async function getProductById() {
  try {
    const response = await fetch(`${rainydaysApi}/${jacketId}`);
    const { data } = await response.json();
    console.log(data)
    displayProductById(data);
    chooseSizes(data.sizes);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

getProductById()

function displayProductById(product) {
  const productContainer = document.getElementById("product-container");

  const image = createElement("img");
  image.src = product.image.url;
  image.alt = product.alt || product.title

  const title = createElement("h1");
  title.textContent = product.title.replace(/^Rainy Days\s*/, "");

  const jacketGender = createElement("p");
  jacketGender.textContent = product.gender;

  const jacketPrice = createElement("div")
  const price = createElement("p");
  price.textContent = product.price

  if (product.onSale) {
    const discountedPrice = createElement("p")
    discountedPrice.textContent = product.discountedPrice;
    jacketPrice.appendChild(price);
    jacketPrice.appendChild(discountedPrice)
  } else {
    jacketPrice.appendChild(price)
  }

  const jacketDescription = createElement("div");

  const descriptionHeading = createElement("h2")
  descriptionHeading.textContent = "Description";

  const description = createElement("p");
  description.textContent = product.description;

  jacketDescription.appendChild(descriptionHeading);
  jacketDescription.appendChild(description);

  productContainer.appendChild(image)
  productContainer.appendChild(title)
  productContainer.appendChild(jacketGender)
  productContainer.appendChild(jacketPrice)
  productContainer.appendChild(jacketDescription)
}

function chooseSizes(sizesArray) {
  const sizesContainer = document.getElementById("sizes");

  const groupLabel = createElement("label");
  groupLabel.textContent = "Select Size:";
  sizesContainer.appendChild(groupLabel);

  sizesArray.forEach((size) => {
    const sizeOptionContainer = createElementWithClass("label", "size-option");

    const sizeOption = createElement("input");
    sizeOption.type = "radio";
    sizeOption.name = "size"
    sizeOption.value = size;

    const sizeLabel = createElement("span");
    sizeLabel.textContent = size;

    sizeOptionContainer.appendChild(sizeOption);
    sizeOptionContainer.appendChild(sizeLabel);
    sizesContainer.appendChild(sizeOptionContainer);
  });

  // Toggle visibility on button click
  const sizeBtn = document.getElementById("size-btn");
  sizeBtn.addEventListener("click", () => {
    sizesContainer.classList.toggle("visible");
  });
}