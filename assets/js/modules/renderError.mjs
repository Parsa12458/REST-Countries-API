export default function (
  message,
  container = document.querySelector(".cards")
) {
  container.innerHTML = `<p class="error">${message}</p>`;
}
