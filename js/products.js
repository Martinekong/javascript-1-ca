import { rainydaysApi } from "./constants.js";

const urlParams = new URLSearchParams(window.location.search);
const jacketId = urlParams.get("id")

async function getProductById() {
  try {
    const response = await fetch(`${rainydaysApi}/${jacketId}`);
    const { data } = await response.json();
    console.log(data)
    displayProductById(data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

getProductById()

function displayProductById(product) {
  const productContainer = document.getElementById("product-container");

  const image = document.createElement("img");
  image.src = product.image.url;
  image.alt = product.alt || product.title

  const title = document.createElement("h1");
  title.textContent = product.title.replace(/^Rainy Days\s*/, "");

  const jacketGender = document.createElement("p");
  jacketGender.textContent = product.gender;

  const jacketPrice = document.createElement("div")
  const price = document.createElement("p");
  price.textContent = product.price

  if (product.onSale) {
    const discountedPrice = document.createElement("p")
    discountedPrice.textContent = product.discountedPrice;
    jacketPrice.appendChild(price);
    jacketPrice.appendChild(discountedPrice)
  } else {
    jacketPrice.appendChild(price)
  }

  const jacketDescription = document.createElement("div");

  const descriptionHeading = document.createElement("h2")
  descriptionHeading.textContent = "Description";

  const description = document.createElement("p");
  description.textContent = product.description;

  jacketDescription.appendChild(descriptionHeading);
  jacketDescription.appendChild(description);

  productContainer.appendChild(image)
  productContainer.appendChild(title)
  productContainer.appendChild(jacketGender)
  productContainer.appendChild(jacketPrice)
  productContainer.appendChild(jacketDescription)
}