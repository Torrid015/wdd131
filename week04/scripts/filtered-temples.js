const temples_html = document.querySelector(".temples");
const largeTemples = document.querySelector("#large");
const label = document.querySelector("#label");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Marden, South Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg",
  },
  {
    templeName: "Medford Oregon",
    location: "Central Point, Oregon",
    dedicated: "2000, April, 16",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/medford-oregon-temple/medford-oregon-temple-1583-main.jpg",
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California",
    dedicated: "1964, November, 17",
    area: 80157,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
  },
  {
    templeName: "Reno Nevada",
    location: "Reno , Nevada",
    dedicated: "2000, April, 23",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-5681-main.jpg",
  },
];

createTemples(temples);

// filtering for large temples

// largeTemples.addEventListener("click", (e) => {
//   e.preventDefault();
//   // updateHeading("Large");
//   createTemples(temples.filter((temple) => temple.area > 90000));
// });

function createTemples(filteredTemples) {
  temples_html.innerHTML = "";
  filteredTemples.forEach((temple) => {
    temples_html.innerHTML += `
      <div class="single-temple">
        <div class="details">
          <h3>${temple.templeName}</h3>
          <p><span class="title">Location: </span>${temple.location}</p>
          <p><span class="title">Dedicated: </span>${temple.dedicated}</p>
          <p><span class="title">Size: </span>${temple.area} sq ft</p>
        </div>
        <div class="temple-image">
          <figure>
            <img src="${temple.imageUrl}" alt="${temple.location} Temple" />
          </figure>
        </div>
      </div>
    `;
  });
}

// updating the main heading of each page
function updateHeading(text) {
  label.textContent = text;
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const heading = e.target.textContent.trim();
    updateHeading(heading);

    if (heading == "Large") {
      createTemples(temples.filter((temple) => temple.area > 90000));
    } else if (heading == "Home") {
      createTemples(temples);
    } else if (heading == "Small") {
      createTemples(temples.filter((temple) => temple.area < 10000));
    } else if (heading == "Old") {
      createTemples(
        temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(",")[0]);
          return year < 1990;
        })
      );
    } else {
      createTemples(
        temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(",")[0]);
          return year > 2000;
        })
      );
    }
  });
});

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
