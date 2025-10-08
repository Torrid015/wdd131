document.addEventListener("DOMContentLoaded", () => {
  const itemCatalog = [
    { code: "pr-101", title: "Quantum Converter", rating: 4.6 },
    { code: "pr-202", title: "Hover Belt", rating: 4.8 },
    { code: "pr-303", title: "Nano Circuits", rating: 3.7 },
    { code: "pr-404", title: "Gravity Module", rating: 4.1 },
    { code: "pr-505", title: "Fusion Stabilizer", rating: 5.0 },
  ];

  const dropdown = document.querySelector("#product-name");
  if (dropdown) {
    for (const item of itemCatalog) {
      const optionTag = document.createElement("option");
      optionTag.value = item.title;
      optionTag.textContent = `${item.title} (${item.rating}★)`;
      dropdown.appendChild(optionTag);
    }
  }

  // Initialize review count if not already stored
  if (!localStorage.getItem("reviewTotal")) {
    localStorage.setItem("reviewTotal", "0");
  }

  // Footer date and modification info
  const yearNow = new Date().getFullYear();
  const lastEdit = document.lastModified;

  const yearTag = document.querySelector("#currentyear");
  const modifiedTag = document.querySelector("#lastModified");

  if (yearTag) {
    yearTag.textContent = yearNow;
  }
  if (modifiedTag) {
    modifiedTag.textContent = `Page last updated: ${lastEdit}`;
  }
});
