const cardsContainer = document.querySelector(".cards");
export default function (dataArr) {
  const spinner = document.querySelector(".spinner");
  if (spinner) spinner.remove();

  const data = dataArr[0];
  const html = `
    <div class="modal">
        <span class="btn btn--close">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Back</span>
        </span>

        <div class="modal-container">
          <img src="${data.flags.png}" alt="${
    data.flags.alt
  }" class="modal__flag" />

          <div class="modal__textbox">
            <h3 class="modal__title">${data.name.official}</h3>

            <div class="modal__info-container">
              <div>
                <p class="modal-info modal-info--name">
                  Native Name: <span>${
                    Object.values(data.name.nativeName)[0].official
                  }</span>
                </p>
                <p class="modal-info modal-info--population">
                  Population: <span>${data.population.toLocaleString()}</span>
                </p>
                <p class="modal-info modal-info--region">
                  Region: <span>${data.region}</span>
                </p>
                <p class="modal-info modal-info--sub-region">
                  Sub Region: <span>${data.subregion}</span>
                </p>
                <p class="modal-info modal-info--capital">
                  Capital: <span>${data.capital[0]}</span>
                </p>
              </div>
              <div>
                <p class="modal-info modal-info--domain">
                  Top Level Domain: <span>${data.tld.join(", ")}</span>
                </p>
                <p class="modal-info modal-info--currency">
                  Currencies: <span>${
                    Object.values(data.currencies)[0].name
                  }</span>
                </p>
                <p class="modal-info modal-info--language">
                  Languages: <span>${Object.values(data.languages).join(
                    ", "
                  )}</span>
                </p>
              </div>
            </div>

            <div class="modal__border">
              <h4>Border Countries:</h4>
              <div>
                <span class="btn">France</span>
                <span class="btn">Germany</span>
                <span class="btn">Netherlands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  cardsContainer.insertAdjacentHTML("beforeend", html);
}
