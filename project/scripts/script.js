// ======== Data: projects array (objects) ========
const projects = [
  {
    id: "p1",
    title: "Portfolio Website (Ecommerce)",
    type: "Web",
    img: "images/web project.jpg",
    alt: "Screenshot of portfolio",
    desc: "A responsive portfolio demonstrating HTML, CSS and JavaScript skills.",
  },
  {
    id: "p2",
    title: "Fashion Lookbook — Mini Collection",
    type: "Fashion",
    img: "images/Fashion Model 1.jpg",
    alt: "Model wearing lookbook outfit",
    desc: "A mini lookbook showcasing seasonal garments and mood boards.",
  },
];

// ======== Utility functions ========
function el(selector) {
  return document.querySelector(selector);
}
function selectAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}

// Insert current year
function insertYear(ids = ["#year", "#year-2", "#year-3", "#year-4"]) {
  const y = new Date().getFullYear();
  ids.forEach((id) => {
    const year = document.querySelector(id);
    if (year) year.textContent = y;
  });
}

// Toggle nav for small screens
function setupNavToggles() {
  selectAll("#nav-toggle, #nav-toggle-2").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const navId =
        btn.getAttribute("aria-controls") ||
        (btn.id === "nav-toggle" ? "main-nav" : "main-nav-2");
      const nav = document.getElementById(navId);
      if (nav) nav.setAttribute("aria-expanded", String(!expanded));
    });
  });
}

// Build HTML for a project card (uses template literal exclusively)
function projectCardMarkup(p) {
  return `
    <article class="card" data-id="${p.id}" tabindex="0"> 
     <div class="card-images">
      <img loading="lazy" src="${p.img}" alt="${p.alt}" width="600" height="360">
     </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p><strong>Type:</strong> ${p.type}</p>
      
    </article>
    `;
}

// Render projects into a container (demonstrates array methods)
function renderProjects(containerSelector) {
  const container = el(containerSelector);
  if (!container) return;
  // sort by type then map to markup
  const sorted = projects.slice().sort((a, b) => a.type.localeCompare(b.type));
  container.innerHTML = sorted.map(projectCardMarkup).join("");
  // add click handlers using event delegation
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const id = card.dataset.id;
    const project = projects.find((p) => p.id === id);
    if (project) showProjectDetails(project);
  });
}

// Show an alert-like details (demonstrates conditional branching)
function showProjectDetails(project) {
  if (!project) return;
  const body = document.body;
  const exists = document.getElementById("detail-panel");
  if (exists) exists.remove();
  const panel = document.createElement("div");
  panel.id = "detail-panel";
  panel.className = "card";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.innerHTML = `
    <button id="close-detail" aria-label="Close">Close</button>
    <h2>${project.title}</h2>
    <img loading="lazy" src="${project.img}" alt="${project.alt}" />
    <p>${project.desc}</p>
  `;
  body.appendChild(panel);
  document
    .getElementById("close-detail")
    .addEventListener("click", () => panel.remove());
}

// ======== Contact form + localStorage ========
function setupContactForm() {
  const form = el("#contact-form");
  if (!form) return;
  const storageKey = "torrid_contact_submissions_v1";
  function getSaved() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveSubmission(sub) {
    const cur = getSaved();
    cur.push(sub);
    localStorage.setItem(storageKey, JSON.stringify(cur));
  }
  function renderSaved() {
    const list = el("#submissions-list");
    if (!list) return;
    const items = getSaved();
    if (items.length === 0) {
      list.innerHTML = "<li>No saved messages</li>";
      return;
    }
    list.innerHTML = items
      .map(
        (s, i) => `
      <li><strong>${s.name}</strong> — ${s.email}<br>${
          s.message
        }<br><small>${new Date(s.at).toLocaleString()}</small></li>
    `
      )
      .join("");
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = el("#name").value.trim();
    const email = el("#email").value.trim();
    const message = el("#message").value.trim();
    // validation: simple conditional branching
    if (name.length < 2) {
      el("#form-msg").textContent = "Please enter your name.";
      return;
    }
    if (!/.+@.+\..+/.test(email)) {
      el("#form-msg").textContent = "Please enter a valid email.";
      return;
    }
    if (message.length < 10) {
      el("#form-msg").textContent = "Message should be at least 10 characters.";
      return;
    }
    const submission = { name, email, message, at: Date.now() };
    saveSubmission(submission);
    el("#form-msg").textContent = "Message saved locally. Thank you!";
    form.reset();
    renderSaved();
  });
  // Render existing saved submissions when page loads
  renderSaved();
}

// ======== Init run (multiple functions called) ========
function init() {
  insertYear();
  setupNavToggles();
  renderProjects("#featured-list");
  renderProjects("#projects-grid");
  setupContactForm();
}

// Wait for DOM content loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
