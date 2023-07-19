import renderSpinner from "./renderSpinner.mjs";
export default async function (url, value) {
  try {
    renderSpinner();
    const res = await Promise.race([
      value ? fetch(`${url}${value}`) : fetch(url),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Request took too long! Please try again.")),
          5000
        )
      ),
    ]);
    // const res = value ? await fetch(`${url}${value}`) : await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}
