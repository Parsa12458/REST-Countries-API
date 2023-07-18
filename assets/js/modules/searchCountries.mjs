export default async function (countryName) {
  try {
    // https://restcountries.com/v3.1/name/{name}
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err, "🟥🟥🟥");
  }
}
