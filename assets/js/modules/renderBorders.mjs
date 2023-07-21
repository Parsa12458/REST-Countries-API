import fetchData from "./fetchData.mjs";
import renderError from "./renderError.mjs";

export default async function (bordersArr) {
  try {
    const data = await Promise.all(
      bordersArr.map(async function (borderCode) {
        return fetchData(
          `https://restcountries.com/v3.1/alpha/`,
          borderCode,
          false
        );
      })
    );

    const bordersData = data.flat().map((border) => {
      return {
        name: border.name.common,
        code: border.cca3,
      };
    });

    const html = bordersData
      .map(
        (
          border
        ) => `<a class="btn" href="?country=${border.code}">${border.name}</a> 
      `
      )
      .join("");
    return html;
  } catch (err) {
    renderError(err.message);
  }
}
