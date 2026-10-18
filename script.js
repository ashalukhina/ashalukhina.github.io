// ============================================================================
// 1. YOUR PUBLICATIONS DATABASE
// ============================================================================
const PUBLICATIONS = [
  {
    type: "Journal Article",
    year: 2026,
    title: "The maximal function on spaces of homogeneous type, or adjacent dyadic cubes do good",
    authors: "A. Shalukhina",
    venue: "<em>Analysis and Mathematical Physics</em> 16.3, Paper no. 63",
    pdf: "#", // <-- Added placeholder so PDF button appears first!
    arxiv: "",
    doi: "https://doi.org/10.1007/s13324-026-01215-5",
    bibtex: `@article{shalukhina2026maximal,
  author = {Shalukhina, A.},
  title = {The maximal function on spaces of homogeneous type, or adjacent dyadic cubes do good},
  journal = {Analysis and Mathematical Physics},
  volume = {16},
  number = {3},
  year = {2026},
  note = {Paper no. 63},
  doi = {10.1007/s13324-026-01215-5}
}`
  },
  {
    type: "Journal Article",
    year: 2025,
    title: "Self-improving boundedness of the maximal operator on quasi-Banach lattices over spaces of homogeneous type",
    authors: "A. Shalukhina",
    venue: "<em>Journal of Mathematical Analysis and Applications</em> 548.2, Paper no. 129419",
    pdf: "#", // Replace "#" with your actual PDF file paths later
    arxiv: "",
    doi: "https://doi.org/10.1016/j.jmaa.2025.129419",
    bibtex: `@article{shalukhina2025selfimproving,
  author = {Shalukhina, A.},
  title = {Self-improving boundedness of the maximal operator on quasi-Banach lattices over spaces of homogeneous type},
  journal = {Journal of Mathematical Analysis and Applications},
  volume = {548},
  number = {2},
  year = {2025},
  note = {Paper no. 129419},
  doi = {10.1016/j.jmaa.2025.129419}
}`
  },
  {
    type: "Journal Article",
    year: 2025,
    title: "A necessary condition for the boundedness of the maximal operator on $L^{p(\\cdot)}$ over reverse doubling spaces of homogeneous type",
    authors: "O. Karlovych and A. Shalukhina",
    venue: "<em>Analysis Mathematica</em> 51.1, 241–248",
    pdf: "#",
    arxiv: "",
    doi: "https://doi.org/10.1007/s10476-024-00053-6",
    bibtex: `@article{karlovych2025necessary,
  author = {Karlovych, O. and Shalukhina, A.},
  title = {A necessary condition for the boundedness of the maximal operator on $L^{p(\\cdot)}$ over reverse doubling spaces of homogeneous type},
  journal = {Analysis Mathematica},
  volume = {51},
  number = {1},
  pages = {241--248},
  year = {2025},
  doi = {10.1007/s10476-024-00053-6}
}`
  },
  {
    type: "Journal Article",
    year: 2022,
    title: "On the extension of the reverse Hölder inequality for power functions on the real axis",
    authors: "A. Shalukhina",
    venue: "<em>Real Analysis Exchange</em> 47.2, 425–434",
    pdf: "#",
    arxiv: "",
    doi: "https://doi.org/10.14321/realanalexch.47.2.1653382423",
    bibtex: `@article{shalukhina2022extension,
  author = {Shalukhina, A.},
  title = {On the extension of the reverse H{\\"o}lder inequality for power functions on the real axis},
  journal = {Real Analysis Exchange},
  volume = {47},
  number = {2},
  pages = {425--434},
  year = {2022},
  doi = {10.14321/realanalexch.47.2.1653382423}
}`
  }
];

// ============================================================================
// 2. INTERACTIVE ENGINE
// ============================================================================
let activeType = "All";
let searchQuery = "";
let sortOrder = "desc";

const pubListEl = document.getElementById("pub-list");
const filterContainerEl = document.getElementById("year-filters"); 
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

function renderFilters() {
  const types = ["All", ...new Set(PUBLICATIONS.map(p => p.type))].filter(Boolean);
  
  filterContainerEl.innerHTML = types.map(t => `
    <button class="year-pill ${activeType === t ? 'active' : ''}" data-type="${t}">
      ${t === "All" ? "All publications" : t}
    </button>
  `).join("");

  filterContainerEl.querySelectorAll(".year-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeType = btn.dataset.type;
      renderFilters();
      renderPublications();
    });
  });
}

function renderPublications() {
  const filtered = PUBLICATIONS
    .filter(p => activeType === "All" || p.type === activeType)
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
        ${p.bibtex ? `
        <div id="bib-${idx}" class="bibtex-wrapper" hidden>
          <button class="copy-btn" data-idx="${idx}">Copy</button>
          <pre class="bibtex-box">${p.bibtex}</pre>
        </div>` : ""}
      </div>
    </article>
  `).join("");

  // Toggle the Cite drawer
  pubListEl.querySelectorAll(".cite-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.getElementById(`bib-${btn.dataset.idx}`);
      box.hidden = !box.hidden;
    });
  });

  // Copy to clipboard logic
  pubListEl.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pub = filtered[btn.dataset.idx];
      navigator.clipboard.writeText(pub.bibtex).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = "Copy", 2000); // Changes back after 2 seconds
      });
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

window.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderPublications();
  renderMath(document.body);
});
