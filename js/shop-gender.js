import { rainydaysApi, loadingSpinner } from "./constants.js";
import { displayJackets } from "./utils.js";

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
    console.log(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error);
  } finally {
    loadingSpinner.classList.add("hidden");
  }
}

fetchJacketsbyGender();