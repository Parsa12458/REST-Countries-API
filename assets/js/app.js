import renderData from "./modules/renderData.mjs";
import fetchData from "./modules/fetchData.mjs";
import renderError from "./modules/renderError.mjs";

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
// renderAllCountries();

const renderSearchResult = async function (e) {
  try {
    e.preventDefault();
    const data = await fetchData(
      "https://restcountries.com/v3.1/name/",
      searchInput.value
    );
    console.log(data);
    if (data.status === 404)
      throw new Error(
        `No countries found matching "${searchInput.value}". Please try again!`
      );
    else renderData(data);
  } catch (err) {
    renderError(err.message);
    console.error(err, "🟥🟥🟥");
  }
};

form.addEventListener("submit", renderSearchResult);
