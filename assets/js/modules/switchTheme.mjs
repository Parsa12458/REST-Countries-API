export default function (e) {
  let dark;
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    dark = true;
    document.querySelector(".dark-mode ion-icon").name = "moon";
  } else {
    dark = false;
    document.querySelector(".dark-mode ion-icon").name = "moon-outline";
  }

  localStorage.setItem("darkMode", dark);
}
