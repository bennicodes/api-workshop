import renderCountry from "./renderCountry.js";

renderCountry;
// Selecting elements
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMessage = document.querySelector(".search-form__error-message");

errorMessage.textContent = "";
const fetchCountry = async (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    errorMessage.textContent = "Please select a country";
    return;
  }
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}?fullText=true`
    );

    const data = await response.json();
    const [country] = data;
    console.log(country);

    renderCountry(country);
    searchInput.value = "";
  } catch (error) {
    errorMessage.textContent =
      "An error occurred while fetching data. Please try again.";
  }
};

searchForm.addEventListener("submit", fetchCountry);
