// ============================================================================
// 1. YOUR PUBLICATIONS DATABASE
// Add your papers here! You can use standard LaTeX ($...$) in titles.
// Put uploaded PDFs in your repository (e.g. "pdf/paper1.pdf").
// ============================================================================
const PUBLICATIONS = [
  {
    year: 2026,
    title: "Boundedness of the Maximal Operator on Variable Lebesgue Spaces $L^{p(\\cdot)}(X)$ over Spaces of Homogeneous Type",
    authors: "Alina Shalukhina",
    venue: "Preprint / Doctoral Thesis Research",
    pdf: "pdf/maximal-operator.pdf",
    arxiv: "https://arxiv.org/",
    doi: "",
    bibtex: `@misc{shalukhina2026maximal,
  author = {Shalukhina, Alina},
  title = {Boundedness of the Maximal Operator on Variable Lebesgue Spaces over Spaces of Homogeneous Type},
  year = {2026}
}`
  },
  {
    year: 2025,
    title: "Weighted Norm Inequalities for Singular Integrals in Variable Exponent Spaces $L^{p(\\cdot)}(\\Omega, w)$",
    authors: "Alina Shalukhina",
    venue: "Journal of Mathematical Analysis (Sample Entry — Edit in script.js)",
    pdf: "",
    arxiv: "https://arxiv.org/",
    doi: "https://doi.org/",
    bibtex: `@article{shalukhina2025weighted,
  author = {Shalukhina, Alina},
  title = {Weighted Norm Inequalities for Singular Integrals in Variable Exponent Spaces},
  year = {2025}
}`
  }
];

// ============================================================================
// 2. INTERACTIVE ENGINE (Search, Year Pills, Sort, Cite Drawer, KaTeX)
// ============================================================================
let activeYear = "All";
let searchQuery = "";
let sortOrder = "desc";

const pubListEl = document.getElementById("pub-list");
const yearFiltersEl = document.getElementById("year-filters");
const searchInput = document.getElementById("pub-search");
const sortSelect = document.getElementById("pub-sort");
const pubCountEl = document.getElementById("pub-count");

function renderMath(element) {
  if (window.renderMathInElement) {
    window.renderMathInElement(element, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function renderYearPills() {
  const years = ["All", ...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a);
  yearFiltersEl.innerHTML = years.map(y => `
    <button class="year-pill ${String(activeYear) === String(y) ? 'active' : ''}" data-year="${y}">
      ${y === "All" ? "All years" : y}
    </button>
  `).join("");

  yearFiltersEl.querySelectorAll(".year-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeYear = btn.dataset.year;
      renderYearPills();
      renderPublications();
    });
  });
}

function renderPublications() {
  const filtered = PUBLICATIONS
    .filter(p => activeYear === "All" || String(p.year) === String(activeYear))
    .filter(p => {
      const text = `${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => sortOrder === "desc" ? b.year - a.year : a.year - b.year);

  pubCountEl.textContent = `${filtered.length} publication${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    pubListEl.innerHTML = `<p style="padding: 2rem 0; color: var(--text-muted);">No publications match the current filter.</p>`;
    return;
  }

  pubListEl.innerHTML = filtered.map((p, idx) => `
    <article class="pub-item">
      <div class="pub-year">${p.year}</div>
      <div>
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-meta">${p.authors} · <em>${p.venue}</em></p>
        <div class="pub-links">
          ${p.pdf ? `<a href="${p.pdf}" target="_blank" class="pub-badge">PDF ↗</a>` : ""}
          ${p.arxiv ? `<a href="${p.arxiv}" target="_blank" class="pub-badge">arXiv</a>` : ""}
          ${p.doi ? `<a href="${p.doi}" target="_blank" class="pub-badge">DOI</a>` : ""}
          ${p.bibtex ? `<button class="pub-badge cite-btn" data-idx="${idx}">Cite</button>` : ""}
        </div>
        ${p.bibtex ? `<pre id="bib-${idx}" class="bibtex-box" hidden>${p.bibtex}</pre>` : ""}
      </div>
    </article>
  `).join("");

  pubListEl.querySelectorAll(".cite-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.getElementById(`bib-${btn.dataset.idx}`);
      box.hidden = !box.hidden;
    });
  });

  renderMath(pubListEl);
}

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  renderPublications();
});

sortSelect.addEventListener("change", e => {
  sortOrder = e.target.value;
  renderPublications();
});

// Theme Toggle (Light Editorial <-> Sleek Dark Mode)
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
});

window.addEventListener("DOMContentLoaded", () => {
  renderYearPills();
  renderPublications();
  renderMath(document.body);
});
