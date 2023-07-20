import renderData from "./modules/renderData.mjs";
import fetchData from "./modules/fetchData.mjs";
import renderError from "./modules/renderError.mjs";
import renderDetail from "./modules/renderDetail.mjs";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".form__search-input");
const regionInput = document.querySelector(".form__filter");
const cardsContainer = document.querySelector(".cards");

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

    searchInput.value = "";
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

const closeModal = function () {
  renderAllCountries();
  history.back();
  console.log("CLOSE-BUTTON");
};

const renderDetailModal = async function (e) {
  try {
    // Fetch data for clicked country
    const card = e.target.closest(".card");
    if (!card) return;
    const { code } = card.dataset;
    const data = await fetchData(`https://restcountries.com/v3.1/alpha/`, code);
    console.log(data);

    // Render the detail page for clicked country
    renderDetail(data);

    // Update the URL
    history.pushState(null, "", `?country=${code}`);

    // Attach event handler for close button
    document.querySelector(".btn--close").addEventListener("click", closeModal);
  } catch (err) {
    console.error(err, "🟥🟥🟥");
    renderError(err.message);
  }
};

const loadDetailByURL = async function () {
  try {
    // Parse the query parameter and show details about the selected country
    const countryCode = new URLSearchParams(window.location.search).get(
      "country"
    );
    if (countryCode) {
      renderDetail(
        await fetchData(`https://restcountries.com/v3.1/alpha/`, countryCode)
      );
      document
        .querySelector(".btn--close")
        .addEventListener("click", closeModal);
    } else {
      renderAllCountries();
    }
  } catch (err) {
    console.error(err, "🟥🟥🟥");
    renderError(err.message);
  }
};

const init = function () {
  loadDetailByURL();
  form.addEventListener("submit", renderSearchResult);
  regionInput.addEventListener("change", renderByRegion);
  cardsContainer.addEventListener("click", renderDetailModal);
  window.addEventListener("popstate", function () {
    loadDetailByURL();
  });
};

init();
