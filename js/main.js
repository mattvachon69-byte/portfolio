// ============================================================
// PHOTOS DATA
// Ajouter vos photos ici. Déposer le fichier dans photos/<category>/
// puis ajouter une entrée dans ce tableau.
// ============================================================
const photos = [
  // — Page principale (mix tous sports) —
  { src: "photos/principale/DSC03276 (1).JPEG", category: "principale", title: "Clair-obscur",     date: "2026" },
  { src: "photos/principale/DSC03803.JPEG",     category: "principale", title: "Intensité",        date: "2026" },
  { src: "photos/principale/DSC03996.JPEG",     category: "principale", title: "En action",        date: "2026" },
  { src: "photos/principale/DSC04599.JPEG",     category: "principale", title: "Duel",             date: "2026" },
  { src: "photos/principale/DSC04884.JPEG",     category: "principale", title: "Focus",            date: "2026" },
  { src: "photos/principale/DSC05154.JPEG",     category: "principale", title: "Concentration",    date: "2026" },
  { src: "photos/principale/DSC06348 (1).JPEG", category: "principale", title: "Élan",             date: "2026" },
  { src: "photos/principale/DSC06739.JPEG",     category: "principale", title: "Impulsion",        date: "2026" },
  { src: "photos/principale/DSC06842.JPEG",     category: "principale", title: "Puissance",        date: "2026" },
  { src: "photos/principale/DSC07285.JPEG",     category: "principale", title: "Détermination",    date: "2026" },
  { src: "photos/principale/DSC07757.JPEG",     category: "principale", title: "Percussion",       date: "2026" },
  { src: "photos/principale/DSC07791.JPEG",     category: "principale", title: "Engagement",       date: "2026" },
  { src: "photos/principale/IMG_1723 (1).JPEG", category: "principale", title: "Unité",            date: "2026" },

  // — Versailles —
  { src: "photos/versailles/DSC07181 - Copie.JPEG", category: "versailles", title: "Ouverture",    date: "2026" },
  { src: "photos/versailles/DSC07188.JPEG",          category: "versailles", title: "Montée",       date: "2026" },
  { src: "photos/versailles/DSC07238.JPEG",          category: "versailles", title: "Pressing",     date: "2026" },
  { src: "photos/versailles/DSC07383.JPEG",          category: "versailles", title: "Frappe",       date: "2026" },
  { src: "photos/versailles/DSC07417.JPEG",          category: "versailles", title: "Duel aérien",  date: "2026" },
  { src: "photos/versailles/DSC07431.JPEG",          category: "versailles", title: "Contrôle",     date: "2026" },
  { src: "photos/versailles/DSC07454.JPEG",          category: "versailles", title: "Accélération", date: "2026" },
  { src: "photos/versailles/DSC07805.JPEG",          category: "versailles", title: "Percussion",   date: "2026" },
  { src: "photos/versailles/DSC07824.JPEG",          category: "versailles", title: "Célébration",  date: "2026" },

  // — Duchère —
  { src: "photos/duchere/image00001.jpeg", category: "duchere", title: "Coup d'envoi",   date: "2026" },
  { src: "photos/duchere/image00009.jpeg", category: "duchere", title: "Interception",   date: "2026" },
  { src: "photos/duchere/image00011.jpeg", category: "duchere", title: "Relance",        date: "2026" },
  { src: "photos/duchere/image00015.jpeg", category: "duchere", title: "Tacle",          date: "2026" },
  { src: "photos/duchere/image00039.jpeg", category: "duchere", title: "Centre",         date: "2026" },
  { src: "photos/duchere/image00046.jpeg", category: "duchere", title: "Tête",           date: "2026" },
  { src: "photos/duchere/image00050.jpeg", category: "duchere", title: "Contre-attaque", date: "2026" },
  { src: "photos/duchere/image00054.jpeg", category: "duchere", title: "Débordement",    date: "2026" },
  { src: "photos/duchere/image00066.jpeg", category: "duchere", title: "Intensité",      date: "2026" },

  // — Dijon DFCO —
  { src: "photos/dijon/DSC07081.JPEG", category: "dijon", title: "Échauffement",    date: "2026" },
  { src: "photos/dijon/DSC07096.JPEG", category: "dijon", title: "Placement",       date: "2026" },
  { src: "photos/dijon/DSC07267.JPEG", category: "dijon", title: "Transition",      date: "2026" },
  { src: "photos/dijon/DSC07285.JPEG", category: "dijon", title: "Détermination",   date: "2026" },
  { src: "photos/dijon/DSC07327.JPEG", category: "dijon", title: "Dribble",         date: "2026" },
  { src: "photos/dijon/DSC07611.JPEG", category: "dijon", title: "Frappe",          date: "2026" },
  { src: "photos/dijon/DSC07627.JPEG", category: "dijon", title: "Tacle glissé",    date: "2026" },
  { src: "photos/dijon/DSC07638.JPEG", category: "dijon", title: "Pressing haut",   date: "2026" },
  { src: "photos/dijon/DSC07657.JPEG", category: "dijon", title: "Appel en profondeur", date: "2026" },
  { src: "photos/dijon/DSC07757.JPEG", category: "dijon", title: "Duel",            date: "2026" },
  { src: "photos/dijon/DSC07775.JPEG", category: "dijon", title: "Engagement",      date: "2026" },
  { src: "photos/dijon/DSC07782.JPEG", category: "dijon", title: "Récupération",    date: "2026" },
  { src: "photos/dijon/DSC07791.JPEG", category: "dijon", title: "Percussion",      date: "2026" },
  { src: "photos/dijon/DSC07798.JPEG", category: "dijon", title: "Dernière ligne",  date: "2026" },

  // — ASVEL —
  { src: "photos/asvel/DSC05730.JPEG",      category: "asvel", title: "Montée de balle",  date: "2026" },
  { src: "photos/asvel/DSC06010.JPEG",      category: "asvel", title: "Lay-up",           date: "2026" },
  { src: "photos/asvel/DSC06067.JPEG",      category: "asvel", title: "Écran",            date: "2026" },
  { src: "photos/asvel/DSC06098.JPEG",      category: "asvel", title: "Contre",           date: "2026" },
  { src: "photos/asvel/DSC06199.JPEG",      category: "asvel", title: "Pénétration",      date: "2026" },
  { src: "photos/asvel/DSC06348 (1).JPEG",  category: "asvel", title: "Dunk",             date: "2026" },
  { src: "photos/asvel/DSC06405.JPEG",      category: "asvel", title: "Défense",          date: "2026" },
  { src: "photos/asvel/DSC06425.JPEG",      category: "asvel", title: "Rebond",           date: "2026" },
  { src: "photos/asvel/DSC06739.JPEG",      category: "asvel", title: "Transition rapide", date: "2026" },
  { src: "photos/asvel/DSC06772.JPEG",      category: "asvel", title: "Tir extérieur",    date: "2026" },
  { src: "photos/asvel/DSC06842.JPEG",      category: "asvel", title: "Alley-oop",        date: "2026" },
  { src: "photos/asvel/DSC06906.JPEG",      category: "asvel", title: "Célébration",      date: "2026" },
];

// ============================================================
// CATEGORY LABELS (display name for filter buttons)
// ============================================================
const categoryLabels = {
  principale: "Tous",
  versailles: "Versailles",
  duchere:    "Duchère",
  dijon:      "Dijon DFCO",
  asvel:      "ASVEL",
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

let currentFilter = "principale";
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
  // Clear existing buttons
  filtersContainer.innerHTML = "";

  // Build buttons from categoryLabels to control order
  Object.entries(categoryLabels).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (key === "principale" ? " active" : "");
    btn.dataset.category = key;
    btn.textContent = label;
    btn.addEventListener("click", () => setFilter(key));
    filtersContainer.appendChild(btn);
  });
}

function setFilter(category) {
  currentFilter = category;

  // Update active button
  filtersContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  // Re-render gallery with filtered photos
  renderGallery();
}

// ============================================================
// GALLERY RENDER
// ============================================================
function renderGallery() {
  galleryGrid.innerHTML = "";

  const filtered = currentFilter === "principale"
    ? photos.filter(p => p.category === "principale")
    : photos.filter(p => p.category === currentFilter);

  filtered.forEach((photo, i) => {
    const realIndex = photos.indexOf(photo);
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.dataset.category = photo.category;
    item.dataset.index = realIndex;

    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h3>${photo.title}</h3>
        </div>
      </div>
    `;

    item.addEventListener("click", () => openLightbox(realIndex));
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
  // Navigate only through current filter's photos
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
    .filter(({ photo }) => currentFilter === "principale"
      ? photo.category === "principale"
      : photo.category === currentFilter)
    .map(({ index }) => index);
}

function updateLightboxContent() {
  const photo = photos[currentLightboxIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.title;
  lightboxCaption.textContent = photo.title;
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
  document.querySelectorAll("#gallery .section-title, #gallery .gallery-filters, #about .about-grid, #contact .section-title, #contact .contact-intro, #contact .contact-info-centered")
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
