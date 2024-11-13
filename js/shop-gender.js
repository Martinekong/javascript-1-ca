import { rainydaysApi, loadingSpinner } from "./constants.js";
import { displayJackets, createElement } from "./utils.js";

let jackets = [];

const currentPage = window.location.pathname;
const genderFilter = currentPage.includes("shop-female") ? "Female" : "Male";

async function fetchJacketsbyGender() {
  try {
    loadingSpinner.classList.remove("hidden")
    const response = await fetch(rainydaysApi);
    const { data } = await response.json();
    jackets = data;
    const filteredJackets = jackets.filter(jacket => jacket.gender === genderFilter);
    displayJackets(filteredJackets)
  } catch (error) {
    console.error("Error fetching jackets:", error);
    const shopGrid = document.getElementById("shop-grid");
    const errorMessage = createElement("p")
    errorMessage.textContent = "Unexpected error, please try again";
    shopGrid.appendChild(errorMessage);
  } finally {
    loadingSpinner.classList.add("hidden");
  }
}

fetchJacketsbyGender();