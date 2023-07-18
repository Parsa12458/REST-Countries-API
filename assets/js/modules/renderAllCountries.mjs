const cardsContainer = document.querySelector(".cards");

export default async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    data.forEach((country) => {
      const html = `
      <div class="card">
          <img src="${country.flags.png}" alt="${
        country.flags.alt
      }" class="card__flag" />
          <h3 class="card__title">${country.name.official}</h3>
          <div class="card__info-container">
            <p class="card-info card__population">
              Population: <span>${country.population.toLocaleString()}</span>
            </p>
            <p class="card-info card__region">Region: <span>${
              country.region
            }</span></p>
            <p class="card-info card__capital">
              Capital: <span>${
                country.capital ? country.capital[0] : "-"
              }</span>
            </p>
          </div>
      </div>
    `;

      cardsContainer.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    console.error(err, "🟥🟥🟥");
  }
}
