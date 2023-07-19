import renderData from "./modules/renderData.mjs";
import fetchData from "./modules/fetchData.mjs";
import renderError from "./modules/renderError.mjs";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".form__search-input");
const regionInput = document.querySelector(".form__filter");

const renderAllCountries = async function () {
  try {
    const data = await fetchData("https://restcountries.com/v3.1/all");
    data && renderData(data);
  } catch (err) {
    renderError(err.message);
    console.error(err, "🟥🟥🟥");
  }
};

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

const renderByRegion = async function (e) {
  try {
    const region = e.target.options[e.target.selectedIndex].value;
    if (region === "") return renderAllCountries();
    const data = await fetchData(
      `https://restcountries.com/v3.1/region/${region}`
    );
    data & renderData(data);
  } catch (err) {
    console.error(err, "🟥🟥🟥");
    renderError(err.message);
  }
};

const init = function () {
  renderAllCountries();
  form.addEventListener("submit", renderSearchResult);
  regionInput.addEventListener("change", renderByRegion);
};

init();
