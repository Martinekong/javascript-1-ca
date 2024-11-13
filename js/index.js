import { rainydaysApi, loadingSpinner } from "./constants.js";
import { displayJackets, createElement } from "./utils.js";

let jackets = [];

async function fetchJackets() {
  try {
    loadingSpinner.classList.remove("hidden")
    const response = await fetch(rainydaysApi);
    const { data } = await response.json();
    jackets = data;
    displayJackets(jackets)
  } catch (error) {
    console.error("Error fetching jackets:", error)
    const shopGrid = document.getElementById("shop-grid")
    const errorMessage = createElement("p")
    errorMessage.textContent = "Unexpected error, please try again"
    shopGrid.appendChild(errorMessage)
  } finally {
    loadingSpinner.classList.add("hidden")
  }
}

function showFilterOptions() {
  const filterBtn = document.getElementById("filter-btn");
  const filterSection = document.getElementById("filter-section")

  filterBtn.addEventListener("click", () => (
    filterSection.classList.toggle("visible")
  ));
}

function applyFilter() {
  const genderFilter = document.getElementById("gender-filter").value;
  const saleFilter = document.getElementById("sale-filter").checked;

  const filteredJackets = jackets.filter((jacket) => {
    const matchesGender = genderFilter === "all" || jacket.gender === genderFilter;
    const matchesSale = !saleFilter || jacket.onSale;

    return matchesGender && matchesSale;
  });

  displayJackets(filteredJackets);

  document.getElementById("filter-section").classList.remove("visible");
};

showFilterOptions()

const applyFiltersBtn = document.getElementById("apply-filter");
applyFiltersBtn.addEventListener("click", applyFilter) 

fetchJackets();