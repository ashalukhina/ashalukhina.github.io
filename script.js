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
    abstract: "We prove that the Hardy--Littlewood maximal operator $M$ is bounded on the variable Lebesgue space $L^{p(\cdot)}(X,d,\mu)$, with $1<p_-\le p_+<\infty$, over an unbounded space of homogeneous type $(X,d,\mu)$ with a Borel-semiregular measure $\mu$, if and only if the averaging operators $T_\mathcal{Q}$ are bounded on $L^{p(\cdot)}(X,d,\mu)$ uniformly over all families $\mathcal{Q}$ of pairwise disjoint ``cubes'' from a Hyt\"onen--Kairema dyadic system on $X$. This extends Diening's well-known characterization of the boundedness of $M$ on $L^{p(\cdot)}(\mathbb{R}^n)$ to the setting of spaces of homogeneous type, while also providing a slight refinement of the original result.",
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
    abstract: "We establish a self-improving property for the boundedness of the Hardy–Littlewood maximal operator on quasi-Banach lattices over spaces of homogeneous type. Our approach avoids the use of the Muckenhoupt $A_p$ condition, relying instead on structural properties of the lattice and the underlying geometry.",
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
    abstract: "In this paper, we find a necessary condition for the boundedness of the Hardy–Littlewood maximal operator on variable Lebesgue spaces $L^{p(\\cdot)}(X)$ over spaces of homogeneous type $(X,d,\\mu)$ satisfying the reverse doubling condition.",
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

function renderMath(element) {
  if (window.renderMathInElement && element) {
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
  const filterContainerEl = document.getElementById("year-filters");
  if (!filterContainerEl) return;

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
  const pubListEl = document.getElementById("pub-list");
  const pubCountEl = document.getElementById("pub-count");
  if (!pubListEl) return;

  const filtered = PUBLICATIONS
    .filter(p => activeType === "All" || p.type === activeType)
    .filter(p => {
      const text = `${p.title} ${p.authors} ${p.journal || p.venue || ''} ${p.details || ''} ${p.year}`.toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => sortOrder === "desc" ? b.year - a.year : a.year - b.year);

  if (pubCountEl) {
    pubCountEl.textContent = `${filtered.length} publication${filtered.length === 1 ? "" : "s"}`;
  }

  if (filtered.length === 0) {
    pubListEl.innerHTML = `<p style="padding: 2rem 0; color: var(--text-muted);">No publications match the current filter.</p>`;
    return;
  }

  let currentYear = null;

  pubListEl.innerHTML = filtered.map((p, idx) => {
    const isFirstOfYear = p.year !== currentYear;
    currentYear = p.year;

    const journalText = p.journal || p.venue || "";
    let metaText = `${p.authors}&ensp;&middot;&ensp;${journalText}`;
    if (p.details) {
      metaText += `&ensp;&middot;&ensp;${p.details}`;
    }

    const hasAbstract = p.abstract && p.abstract.trim() !== "";

    return `
    <article class="pub-item ${isFirstOfYear ? 'new-year' : 'same-year'}">
      <div class="pub-year">${isFirstOfYear ? p.year : ''}</div>
      
      <div class="pub-content">
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-meta">${metaText}</p>
      <div class="pub-links">
          ${p.doi ? `<a href="${p.doi}" target="_blank" class="pub-badge">DOI ↗</a>` : ""}
          ${p.arxiv ? `<a href="${p.arxiv}" target="_blank" class="pub-badge">arXiv ↗</a>` : ""}
          ${hasAbstract ? `<button class="pub-badge abstract-btn" data-idx="${idx}">Abstract</button>` : ""}
          ${p.bibtex ? `<button class="pub-badge cite-btn" data-idx="${idx}">Cite</button>` : ""}
        </div>
        
        ${hasAbstract ? `
        <div id="abs-${idx}" class="abstract-box" hidden>
          ${p.abstract}
        </div>` : ""}

        ${p.bibtex ? `
        <div id="bib-${idx}" class="bibtex-wrapper" hidden>
          <button class="copy-btn" data-idx="${idx}" title="Copy to clipboard">
            <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <pre class="bibtex-box">${p.bibtex}</pre>
        </div>` : ""}
      </div>
    </article>
  `;
  }).join("");

  // Toggle Abstract
  pubListEl.querySelectorAll(".abstract-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.getElementById(`abs-${btn.dataset.idx}`);
      if (box) {
        box.hidden = !box.hidden;
        btn.classList.toggle("active");
      }
    });
  });

  // Toggle BibTeX
  pubListEl.querySelectorAll(".cite-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.getElementById(`bib-${btn.dataset.idx}`);
      if (box) {
        box.hidden = !box.hidden;
        btn.classList.toggle("active");
      }
    });
  });

  // Copy BibTeX
  pubListEl.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pub = filtered[btn.dataset.idx];
      navigator.clipboard.writeText(pub.bibtex).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<svg class="icon-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        btn.style.color = "var(--accent)";
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.color = "";
        }, 2000);
      });
    });
  });

  renderMath(pubListEl);
}

function initApp() {
  const searchInput = document.getElementById("pub-search");
  const sortSelect = document.getElementById("pub-sort");

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value;
      renderPublications();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      sortOrder = e.target.value;
      renderPublications();
    });
  }

  renderFilters();
  renderPublications();
  renderMath(document.body);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
window.addEventListener("load", () => renderMath(document.body));
