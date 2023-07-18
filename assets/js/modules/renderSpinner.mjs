export default function (container = document.querySelector(".cards")) {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", `<div class="spinner"></div>`);
}
