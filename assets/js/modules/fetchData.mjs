import renderSpinner from "./renderSpinner.mjs";
export default async function (url, value) {
  try {
    renderSpinner();
    const res = value ? await fetch(`${url}${value}`) : await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err, "🟥🟥🟥");
  }
}
