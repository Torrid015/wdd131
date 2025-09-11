const date = new Date();
let year = date.getFullYear();

const copyrightYear = document.getElementById("currentyear");
copyrightYear.innerText = year;

console.log(document.lastModified);

document.getElementById(
  "lastModifed"
).innerText = `Last Modification: ${document.lastModified}`;

menu = document.querySelector(".menu");
nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("navigation");
  menu.classList.toggle("hammenu");
});
