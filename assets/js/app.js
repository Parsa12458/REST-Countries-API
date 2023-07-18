import renderData from "./modules/renderData.mjs";
import fetchData from "./modules/fetchData.mjs";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".form__search-input");

const renderAllCountries = async function () {
  try {
    const data = await fetchData("https://restcountries.com/v3.1/all");
    renderData(data);
  } catch (err) {
    console.error(err, "🟥🟥🟥");
  }
};
renderAllCountries();

const renderSearchResult = async function (e) {
  try {
    e.preventDefault();
    const data = await fetchData(
      "https://restcountries.com/v3.1/name/",
      searchInput.value
    );

    renderData(data);
  } catch (err) {
    console.error(err, "🟥🟥🟥");
  }
};

form.addEventListener("submit", renderSearchResult);
