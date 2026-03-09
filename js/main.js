// ============================================================
// PHOTOS DATA
// Ajouter vos photos ici. Déposer le fichier dans photos/<category>/
// puis ajouter une entrée dans ce tableau.
// ============================================================
const photos = [
  // --- Football ---
  { src: "photos/football/DSC03276.JPEG",  category: "football", title: "Clair-obscur",         date: "2025", location: "" },
  { src: "photos/football/image00001.jpeg", category: "football", title: "Sur le banc",        date: "2026", location: "" },
  { src: "photos/football/image00039.jpeg", category: "football", title: "À terre",            date: "2026", location: "" },
  { src: "photos/football/image00066.jpeg", category: "football", title: "Détermination",      date: "2026", location: "" },
  { src: "photos/football/IMG_1717.JPEG",  category: "football", title: "Accolade",            date: "2025", location: "" },
  { src: "photos/football/DSC03145.JPEG",  category: "football", title: "Contrôle du ballon",  date: "2025", location: "" },
  { src: "photos/football/DSC03230.JPEG",  category: "football", title: "Course en puissance", date: "2025", location: "" },
  { src: "photos/football/IMG_1541.JPEG",  category: "football", title: "Crépuscule",          date: "2025", location: "" },
  { src: "photos/football/IMG_1565.JPEG",  category: "football", title: "Duel intense",        date: "2025", location: "" },
  { src: "photos/football/image00046.jpeg", category: "football", title: "Joie du but",        date: "2026", location: "" },
  { src: "photos/football/IMG_1723.JPEG",  category: "football", title: "Unité",               date: "2025", location: "" },
  { src: "photos/football/image00015.jpeg", category: "football", title: "Focus",              date: "2026", location: "" },
];

// ============================================================
// CATEGORY LABELS (display name for filter buttons)
// ============================================================
const categoryLabels = {
  football:   "Football",
  basketball: "Basketball",
  rugby:      "Rugby",
};

// ============================================================
// DOM REFERENCES
// ============================================================
const galleryGrid   = document.getElementById("gallery-grid");
const filtersContainer = document.getElementById("filters");
const navbar        = document.getElementById("navbar");
const navToggle     = document.querySelector(".nav-toggle");
const navLinks      = document.querySelector(".nav-links");

// Lightbox
const lightbox      = document.getElementById("lightbox");
const lightboxImg   = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev  = document.querySelector(".lightbox-prev");
const lightboxNext  = document.querySelector(".lightbox-next");

let currentFilter = "all";
let currentLightboxIndex = -1;

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  renderGallery();
  setupNavbar();
  setupLightbox();
  setupScrollAnimations();
});

// ============================================================
// FILTERS
// ============================================================
function buildFilters() {
  // Collect unique categories from photos array
  const categories = [...new Set(photos.map(p => p.category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.category = cat;
    btn.textContent = categoryLabels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.addEventListener("click", () => setFilter(cat));
    filtersContainer.appendChild(btn);
  });

  // "Tous" button already in HTML, add event
  filtersContainer.querySelector('[data-category="all"]')
    .addEventListener("click", () => setFilter("all"));
}

function setFilter(category) {
  currentFilter = category;

  // Update active button
  filtersContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  // Show/hide items
  const items = galleryGrid.querySelectorAll(".gallery-item");
  items.forEach(item => {
    const match = category === "all" || item.dataset.category === category;
    item.classList.toggle("hidden", !match);
  });
}

// ============================================================
// GALLERY RENDER
// ============================================================
function renderGallery() {
  galleryGrid.innerHTML = "";

  photos.forEach((photo, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.category = photo.category;
    item.dataset.index = index;

    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h3>${photo.title}</h3>
          <p>${photo.location} — ${photo.date}</p>
        </div>
      </div>
    `;

    item.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(item);
  });

  // Trigger reveal animation
  requestAnimationFrame(() => {
    galleryGrid.querySelectorAll(".gallery-item").forEach((item, i) => {
      setTimeout(() => item.classList.add("visible"), i * 80);
    });
  });
}

// ============================================================
// LIGHTBOX
// ============================================================
function setupLightbox() {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  lightbox.hidden = false;
  // Trigger reflow then add class for transition
  lightbox.offsetHeight;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => { lightbox.hidden = true; }, 300);
}

function navigateLightbox(direction) {
  // Navigate only through visible (filtered) photos
  const visibleIndices = getVisibleIndices();
  const pos = visibleIndices.indexOf(currentLightboxIndex);
  if (pos === -1) return;

  const newPos = (pos + direction + visibleIndices.length) % visibleIndices.length;
  currentLightboxIndex = visibleIndices[newPos];
  updateLightboxContent();
}

function getVisibleIndices() {
  return photos
    .map((p, i) => ({ photo: p, index: i }))
    .filter(({ photo }) => currentFilter === "all" || photo.category === currentFilter)
    .map(({ index }) => index);
}

function updateLightboxContent() {
  const photo = photos[currentLightboxIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.title;
  lightboxCaption.textContent = `${photo.title} — ${photo.location}, ${photo.date}`;
}

// ============================================================
// NAVBAR
// ============================================================
function setupNavbar() {
  // Scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });

  // Mobile toggle
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// ============================================================
// SCROLL ANIMATIONS (IntersectionObserver)
// ============================================================
function setupScrollAnimations() {
  // Add fade-in class to sections
  document.querySelectorAll("#gallery .section-title, #gallery .gallery-filters, #about .about-grid, #contact .section-title, #contact .contact-intro, #contact .contact-grid")
    .forEach(el => el.classList.add("fade-in"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

