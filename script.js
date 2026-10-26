// ============================================================================
// 1. YOUR PUBLICATIONS DATABASE
// ============================================================================
const PUBLICATIONS = [
  {
    id: "AS26cubes",
    type: "Journal article",
    year: 2026,
    title: "The maximal function on spaces of homogeneous type, or adjacent dyadic cubes do good",
    authors: "A. Shalukhina",
    journal: "<em>Analysis and Mathematical Physics</em>",
    details: "16.3, Paper no. 63",
    doi: "https://doi.org/10.1007/s13324-026-01215-5",
    arxiv: "",
    abstract: "Let $(X, d, \\mu)$ be a space of homogeneous type. We prove that the Hardy-Littlewood maximal operator is bounded on the variable Lebesgue space $L^{p(\\cdot)}(X)$ if and only if it is bounded on the corresponding adjacent dyadic maximal operator. We also introduce a new dyadic grid construction that maintains the fundamental geometric properties of the space.",
    bibtex: `@article{AS26cubes,
  AUTHOR = {Shalukhina, Alina},
  TITLE = {The maximal function on spaces of homogeneous type, or adjacent dyadic cubes do good},
  JOURNAL = {Anal. Math. Phys.},
  FJOURNAL = {Analysis and Mathematical Physics},
  VOLUME = {16},
  NUMBER = {3},
  YEAR = {2026},
  PAGES = {Paper no. 63},
  DOI = {10.1007/s13324-026-01215-5},
}`
  },
  {
    id: "AS25improve",
    type: "Journal article",
    year: 2025,
    title: "Self-improving boundedness of the maximal operator on quasi-Banach lattices over spaces of homogeneous type",
    authors: "A. Shalukhina",
    journal: "<em>Journal of Mathematical Analysis and Applications</em>",
    details: "548.2, Paper no. 129419",
    doi: "https://doi.org/10.1016/j.jmaa.2025.129419",
    arxiv: "",
    abstract: "We establish a self-improving property for the boundedness of the Hardy-Littlewood maximal operator on quasi-Banach lattices over spaces of homogeneous type. Our approach avoids the use of the Muckenhoupt $A_p$ condition, relying instead on structural properties of the lattice and the underlying geometry.",
    bibtex: `@article{AS25improve,
  AUTHOR = {Shalukhina, Alina},
  TITLE = {Self-improving boundedness of the maximal operator on quasi-Banach lattices over spaces of homogeneous type},
  JOURNAL = {J. Math. Anal. Appl.}, 
  FJOURNAL = {Journal of Mathematical Analysis and Applications},
  VOLUME = {548},
  NUMBER = {2},
  YEAR = {2025},
  PAGES = {Paper no. 129419},
  DOI = {10.1016/j.jmaa.2025.129419},
}`
  },
  {
    id: "karlovych2025necessary",
    type: "Journal article",
    year: 2025,
    title: "A necessary condition for the boundedness of the maximal operator on $L^{p(\\cdot)}$ over reverse doubling spaces of homogeneous type",
    authors: "O. Karlovych and A. Shalukhina",
    journal: "<em>Analysis Mathematica</em>",
    details: "51.1, 241–248",
    doi: "https://doi.org/10.1007/s10476-024-00053-6",
    arxiv: "",
    abstract: "In this paper, we find a necessary condition for the boundedness of the Hardy-Littlewood maximal operator on variable Lebesgue spaces $L^{p(\\cdot)}(X)$ over spaces of homogeneous type $(X,d,\\mu)$ satisfying the reverse doubling condition.",
    bibtex: `@article{karlovych2025necessary,
  author = {Karlovych, O. and Shalukhina, A.},
  title = {A necessary condition for the boundedness of the maximal operator on $L^{p(\\cdot)}$ over reverse doubling spaces of homogeneous type},
  journal = {Analysis Mathematica},
  volume = {51},
  number = {1},
  pages = {241--248},
  year = {2025},
  doi = {10.1007/s10476-024-00053-6},
}`
  },
  {
    id: "shalukhina2022extension",
    type: "Journal article",
    year: 2022,
    title: "On the extension of the reverse Hölder inequality for power functions on the real axis",
    authors: "A. Shalukhina",
    journal: "<em>Real Analysis Exchange</em>",
    details: "47.2, 425–434",
    doi: "https://doi.org/10.14321/realanalexch.47.2.1653382423",
    arxiv: "",
    abstract: "We consider the reverse Hölder inequality for power weights on the real line and obtain the exact bounds for the parameters where the inequality holds. The proof heavily relies on a fine analysis of the corresponding Muckenhoupt conditions.",
    bibtex: `@article{shalukhina2022extension,
  author = {Shalukhina, A.},
  title = {On the extension of the reverse H{\\"o}lder inequality for power functions on the real axis},
  journal = {Real Analysis Exchange},
  volume = {47},
  number = {2},
  pages = {425--434},
  year = {2022},
  doi = {10.14321/realanalexch.47.2.1653382423},
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
  const categoryMap = {
    "All": "All publications",
    "Journal article": "Journal articles",
    "Book chapter": "Book chapters",
    "Preprint": "Preprints"
  };

  filterContainerEl.innerHTML = Object.keys(categoryMap).map(key => `
    <button class="year-pill ${activeType === key ? 'active' : ''}" data-type="${key}">
      ${categoryMap[key]}
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
      const text = `${p.title} ${p.authors} ${p.journal} ${p.details || ''} ${p.year}`.toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => sortOrder === "desc" ? b.year - a.year : a.year - b.year);

  pubCountEl.textContent = `${filtered.length} publication${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    pubListEl.innerHTML = `<p style="padding: 2rem 0; color: var(--text-muted);">No publications match the current filter.</p>`;
    return;
  }

  let currentYear = null;

  pubListEl.innerHTML = filtered.map((p, idx) => {
    const isFirstOfYear = p.year !== currentYear;
    currentYear = p.year;

    // Build the meta string with dynamic separators
    let metaText = `${p.authors} &middot; ${p.journal}`;
    if (p.details) {
      metaText += ` &middot; ${p.details}`;
    }

    return `
    <article class="pub-item ${isFirstOfYear ? 'new-year' : 'same-year'}">
      <div class="pub-year">${isFirstOfYear ? p.year : ''}</div>
      
      <div class="pub-content">
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-meta">${metaText}</p>
        <div class="pub-links">
          ${p.abstract && p.abstract.trim() !== "" ? `<button class="pub-badge
