const date = new Date();
let year = date.getFullYear();

const copyrightYear = document.getElementById("currentyear");
copyrightYear.innerText = year;

const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");

// declearing the real temperature and wind variables

const real_temperature = 63;
const real_wind = 2;

// popilating it to the html
temperature.innerText = real_temperature;
wind.innerText = real_wind;

// calculating the windchill

function calculateWindChill(temperature, wind) {
  windchill =
    35.74 +
    0.6215 * temperature -
    35.75(wind ** 0.16) +
    0.4275 * temperature(wind ** 0.16);
  return windchill;
}

document.getElementById(
  "lastModifed"
).innerText = `Last Modification: ${document.lastModified}`;
