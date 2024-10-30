import { rainydaysApi, loadingSpinner } from "./constants.js";
import { createElement, createElementWithClass } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

if (query) {
  fetchSearchResults(query);
}

async function fetchSearchResults(query) {
  try {
    loadingSpinner.classList.remove("hidden");

    const response = await fetch(`${rainydaysApi}?q=${query}`);
    const { data } = await response.json();

    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.baseColor.toLowerCase().includes(query.toLowerCase()) ||
      item.gender.toLowerCase().includes(query.toLowerCase())
    );
    displaySearchResults(filteredResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
  } finally {
    loadingSpinner.classList.add("hidden")
  }
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementById("search-results");
  const result = createElement("p");

  if (results.length === 0) {
    result.textContent = `No result found for "${query}"`
  } else {
    result.textContent = `Search results for "${query}":`
  }

  resultsContainer.appendChild(result)

  results.forEach((jacket) => {
    const resultItem = createElementWithClass("a", "search-result-item");
    resultItem.href = `../shop/products.html?id=${jacket.id}`;

    const resultImg = createElement("img")
    resultImg.src = jacket.image.url;
    resultImg.alt = jacket.image.alt;

    const resultTitle = createElement("p");
    resultTitle.textContent = jacket.title;

    resultItem.appendChild(resultImg);
    resultItem.appendChild(resultTitle);

    const resultPrice = createElement("p");
    resultPrice.textContent = `$${jacket.discountedPrice}`;

    if (jacket.onSale) {
      const resultOldPrice = createElement("p");
      resultOldPrice.classList.add("old-price");
      resultOldPrice.textContent = `$${jacket.price}`;
      resultItem.appendChild(resultPrice);
      resultItem.appendChild(resultOldPrice);
    } else {
      resultItem.appendChild(resultPrice)
    }

    resultsContainer.appendChild(resultItem);
  });
}