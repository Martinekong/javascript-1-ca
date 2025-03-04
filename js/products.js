import { rainydaysApi, loadingSpinner } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const jacketId = urlParams.get("id")

async function fetchJacketById() {
  try {
    loadingSpinner.classList.remove("hidden")
    const response = await fetch(`${rainydaysApi}/${jacketId}`);
    const { data } = await response.json();
    displayJacketById(data);
    chooseSizes(data.sizes);
  } catch (error) {
    console.error("Error fetching API:", error);
    const productContainer = document.getElementById("product-container");
    const errorMessage = createElement("p")
    errorMessage.textContent = "Unexpected error, please try again";
    productContainer.appendChild(errorMessage);
  } finally {
    loadingSpinner.classList.add("hidden")
  }
}

function displayJacketById(jacket) {
  const productContainer = document.getElementById("product-container");

  const image = createElement("img");
  image.src = jacket.image.url;
  image.alt = jacket.alt;

  const title = createElement("h1");
  title.textContent = jacket.title.replace(/^Rainy Days\s*/, "");

  const jacketGender = createElement("p");
  jacketGender.textContent = `Gender: ${jacket.gender}`;

  const jacketPrice = createElement("div")
  const price = createElement("p");
  price.textContent = `$${jacket.discountedPrice}`;

  if (jacket.onSale) {
    const discountedPrice = createElementWithClass("p", "old-price")
    discountedPrice.textContent = `$${jacket.price}`;
    jacketPrice.append(price, discountedPrice);
  } else {
    jacketPrice.appendChild(price)
  }

  const jacketDescription = createElement("div");

  const descriptionHeading = createElement("h2")
  descriptionHeading.textContent = "Description";

  const description = createElement("p");
  description.textContent = jacket.description;

  jacketDescription.append(descriptionHeading, description);

  productContainer.append(image, title, jacketGender, jacketPrice, jacketDescription)
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

    sizeOptionContainer.append(sizeOption, sizeLabel)
    sizesContainer.appendChild(sizeOptionContainer);
  });

  const sizeBtn = document.getElementById("size-btn");
  sizeBtn.addEventListener("click", () => {
    sizesContainer.classList.toggle("visible");
  });
}

fetchJacketById()
