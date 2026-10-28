// ============================================================================
// 1. YOUR PUBLICATIONS DATABASE
// ============================================================================
const PUBLICATIONS = [
{
    id: "AS26endpoints",
    type: "Preprint",
    year: 2026,
    title: "The endpoints $p_-=1$ and $p_+=\\infty$ for the maximal operator on $L^{p(\\cdot)}$ over spaces of homogeneous type",
    authors: "A. Shalukhina",
    journal: "<em>arXiv</em>",
    details: "Preprint",
    arxiv: "https://doi.org/10.48550/arXiv.2610.33792",
    abstract: String.raw`We investigate the boundedness of the Hardy--Littlewood maximal operator $M$ on 
                        variable Lebesgue spaces $L^{p(\cdot)}(\Omega,d,\mu)$ over spaces of homogeneous type, 
                        focusing on the endpoints $p_-=1$ and $p_+=\infty$. At the lower endpoint, we prove that
                        the boundedness of $M$ forces $p_->1$ for all exponents if and only if the
                        space $(\Omega,d,\mu)$ is non-atomic. At the upper endpoint, we generalize
                        the Muckenhoupt--Nekvinda sufficient condition of Adamadze, 
                        Diening, and Kopaliani. On bounded spaces of homogeneous type, whenever $p_->1$, this 
                        yields a boundedness criterion based on the Muckenhoupt condition alone.
                        We also construct an unbounded space where the Muckenhoupt 
                        condition suffices for the maximal operator's boundedness.`,
    bibtex: String.raw`@misc{AS26endpoints,
  AUTHOR = {Shalukhina, Alina},
  TITLE = {The endpoints $p_-=1$ and $p_+=\infty$ for the maximal operator on $L^{p(\cdot)}$ over spaces of homogeneous type},
  HOWPUBLISHED = {Preprint, arXiv:2610.33792},
  YEAR = {2026},
  EPRINT = {2610.33792},
  ARCHIVEPREFIX = {arXiv},
}`
  },
   {
    id: "KST26",
    type: "Journal article",
    year: 2026,
    title: "Maximal operator on $L^{p(\\cdot)}$ spaces over spaces of homogeneous type: Local boundedness",
    authors: "T. Kopaliani, A. Shalukhina, and G. Tephnadze",
    journal: "<em>Georgian Mathematical Journal</em>",
    details: "Published online",
    doi: "https://doi.org/10.1515/gmj-2026-3048",
    abstract: String.raw`We prove the local boundedness of the Hardy--Littlewood maximal operator on 
                        variable Lebesgue spaces $L^{p(\cdot)}(X)$ over spaces of homogeneous type for 
                        exponents $p(\cdot)$ which are bounded away from $1$ and $\infty$ and satisfy a 
                        local Muckenhoupt condition $\mathcal{A}_{\textnormal{loc}}(X)$. 
                        This generalizes a Euclidean theorem of A. K. Lerner. 
                        Our proof utilizes the machinery of adjacent dyadic grids.`,
    bibtex: String.raw`@article{KST26,
  AUTHOR = {Kopaliani, Tengiz and Shalukhina, Alina and Tephnadze, George},
  TITLE = {Maximal operator on $L^{p(\cdot)}$ spaces over spaces of homogeneous type: {L}ocal boundedness},
  JOURNAL = {Georgian Math. J.},
  FJOURNAL = {Georgian Mathematical Journal},
  YEAR = {2026},
  DOI = {10.1515/gmj-2026-3048},
  NOTE = {Published online},
}`
  },
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
    abstract: String.raw`We prove that the Hardy--Littlewood maximal operator $M$ is bounded on the variable 
                      Lebesgue space $L^{p(\cdot)}(X,d,\mu)$, with $1<p_-\le p_+<\infty$, over an unbounded 
                      space of homogeneous type $(X,d,\mu)$ with a Borel-semiregular measure $\mu$, if and 
                      only if the averaging operators $T_\mathcal{Q}$ are bounded on $L^{p(\cdot)}(X,d,\mu)$ 
                      uniformly over all families $\mathcal{Q}$ of pairwise disjoint “cubes” from a 
                      Hytönen--Kairema dyadic system on $X$. This extends Diening's well-known characterization 
                      of the boundedness of $M$ on $L^{p(\cdot)}(\mathbb{R}^n)$ to the setting of spaces of 
                      homogeneous type, while also providing a slight refinement of the original result.`,
   bibtex: String.raw`@article{AS26cubes,
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
    abstract: String.raw`We prove the self-improvement property of the Hardy--Littlewood maximal operator on quasi-Banach lattices with the 
                        Fatou property in the setting of spaces of homogeneous type. Our result is a generalization of the boundedness criterion
                        obtained in 2010 by Lerner and Ombrosi for maximal operators on quasi-Banach function spaces over Euclidean spaces. The
                        specialty of the proof for spaces of homogeneous type lies in using adjacent grids of Hytönen--Kairema dyadic 
                        cubes and studying the maximal operator alongside its “dyadic” version. Then we apply the obtained result to 
                        variable Lebesgue spaces over spaces of homogeneous type.`,
    bibtex: String.raw`@article{AS25improve,
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
    id: "SK25",
    type: "Journal article",
    year: 2025,
    title: "A necessary condition for the boundedness of the maximal operator on $L^{p(\\cdot)}$ over reverse doubling spaces of homogeneous type",
    authors: "O. Karlovych and A. Shalukhina",
    journal: "<em>Analysis Mathematica</em>",
    details: "51.1, 241–248",
    doi: "https://doi.org/10.1007/s10476-024-00053-6",
    abstract: String.raw`Let $(X,d,\mu)$ be a space of homogeneous type and $p(\cdot):X\to[1,\infty]$
                        be a variable exponent. We show that if the measure $\mu$ is Borel-semiregular
                        and reverse doubling, then the condition 
                        $\operatornamewithlimits{ess\,inf}\limits_{x\in X}p(x)>1$ 
                        is necessary for the boundedness of the Hardy--Littlewood maximal operator $M$ 
                        on the variable Lebesgue space $L^{p(\cdot)}(X,d,\mu)$.`,
    bibtex: String.raw`@article{SK25,
  AUTHOR = {Karlovych, Oleksiy and Shalukhina, Alina},
  TITLE = {A necessary condition for the boundedness of the maximal operator on $L^{p(\cdot)}$ over reverse doubling spaces of homogeneous type},
  JOURNAL = {Anal. Math.},
  FJOURNAL = {Analysis Mathematica},
  VOLUME = {51},
  NUMBER = {1},
  PAGES = {241--248},
  YEAR = {2025},
  DOI = {10.1007/s10476-024-00053-6},
}`
  },
  {
    id: "AS22",
    type: "Journal article",
    year: 2022,
    title: "On the extension of the reverse Hölder inequality for power functions on the real axis",
    authors: "A. Shalukhina",
    journal: "<em>Real Analysis Exchange</em>",
    details: "47.2, 425–434",
    doi: "https://doi.org/10.14321/realanalexch.47.2.1653382423",
    abstract: String.raw`We consider the class of all nonnegative on $\mathbb{R}_+$ functions such that 
                        each of them satisfies the reverse Hölder inequality uniformly over all intervals 
                        with some constant, the minimum value of which can be regarded as the corresponding 
                        “norm” of a function. We compare this “norm” with the “norm” of the even extension 
                        of a function from $\mathbb{R}_+$ on $\mathbb{R}$. In this paper, an upper estimate 
                        for the ratio of such “norms” has been obtained. For the special case of power 
                        functions on $\mathbb{R}_+$, we give the precise value of the “norm” increase caused 
                        by even extension. This value is a lower estimate for the analogous quantity in the 
                        case of arbitrary functions. It has been shown that the obtained upper and lower 
                        estimates for the general case are asymptotically sharp.`,
    bibtex: String.raw`@article{AS22,
  AUTHOR = {Shalukhina, Alina},
  TITLE = {On the extension of the reverse {H}{\"o}lder inequality for power functions on the real axis},
  JOURNAL = {Real Anal. Exch.},
  FJOURNAL = {Real Analysis Exchange},
  VOLUME = {47},
  NUMBER = {2},
  PAGES = {425--434},
  YEAR = {2022},
  DOI = {10.14321/realanalexch.47.2.1653382423},
}`
  },
 {
    id: "AS26interp",
    type: "Book chapter",
    year: 2026,
    title: "On interpolation of variable Lebesgue spaces over spaces of homogeneous type",
    authors: "A. Shalukhina",
    journal: "<em>Tbilisi Analysis and PDE Seminar</em> (Trends in Mathematics 20, Birkhäuser)",
    details: "To appear",
    doi: "https://link.springer.com/book/9783032218063",
    abstract: String.raw`We show that the Hardy--Littlewood maximal operator $M$ is bounded on a variable 
                        Lebesgue space $L^{p(\cdot)}(X)$, $1<p_-\le p_+<\infty$, over a space of homogeneous type
                        $X$ if and only if, for every $q\in(1,\infty)$, the exponent $p(\cdot)$ can be represented
                        as $\frac1{p(x)}=\frac{\theta}{q}+\frac{1-\theta}{r(x)}$, $x\in X$, so that $M$ is bounded
                        on $L^{r(\cdot)}(X)$ for all sufficiently small $\theta>0$. This is an extension of the 
                        analogous result by Diening, Karlovych and Shargorodsky from the Euclidean spaces to spaces
                        of homogeneous type.`,
    bibtex: String.raw`@incollection{AS26interp,
  AUTHOR = {Shalukhina, Alina},
  TITLE = {On interpolation of variable {L}ebesgue spaces over spaces of homogeneous type},
  BOOKTITLE = {Tbilisi Analysis and PDE Seminar},
  EDITOR = {Duduchava, Roland and Shargorodsky, Eugene and Tephnadze, George},
  SERIES = {Trends in Mathematics},
  VOLUME = {20},
  PUBLISHER = {Birkh{\"a}user},
  ADDRESS = {Cham},
  YEAR = {2026},
  NOTE = {To appear},
}`
  },
  {
    id: "KS24khvedelidze",
    type: "Book chapter",
    year: 2024,
    title: "Maximal noncompactness of singular integral operators on $L^2$ spaces with some Khvedelidze weights",
    authors: "O. Karlovych and A. Shalukhina",
    journal: "<em>Operator and Matrix Theory, Function Spaces, and Applications</em> (Operator Theory: Advances and Applications 295, Birkhäuser)",
    details: "279–295",
    doi: "https://doi.org/10.1007/978-3-031-50613-0_12",
    abstract: String.raw`Let $\Gamma$ be a contour in the complex plane consisting of a finite
                        number of circular arcs joining the endpoints $-1$ and $1$, possibly 
                        including the segment $[-1,1]$. We consider the singular integral operator 
                        $A=aI+bS_\Gamma$ with constant coefficients $a,b\in\mathbb{C}$, where 
                        $S_\Gamma$ is the Cauchy singular integral operator over $\Gamma$. We provide 
                        a detailed proof of the maximal noncompactness of the operator $A$ on $L^2$ 
                        spaces with the Khvedelidze weights $\varrho(t)=|t-1|^\beta |t+1|^{-\beta}$ 
                        satisfying $-1<\beta<1$. This result was announced by Naum Krupnik 
                        in 2010, but its proof has never been published.`,
    bibtex: String.raw`@incollection{KS24khvedelidze,
  AUTHOR = {Karlovych, Oleksiy and Shalukhina, Alina},
  TITLE = {Maximal noncompactness of singular integral operators on {$L^2$} spaces with some {K}hvedelidze weights},
  BOOKTITLE = {Operator and Matrix Theory, Function Spaces, and Applications},
  EDITOR = {Ptak, Marek and Woerdeman, Hugo J. and Wojtylak, Micha{\l}},
  SERIES = {Operator Theory: Advances and Applications},
  VOLUME = {295},
  PAGES = {279--295},
  PUBLISHER = {Birkh{\"a}user},
  ADDRESS = {Cham},
  YEAR = {2024},
  DOI = {10.1007/978-3-031-50613-0_12},
}`
  },
  {
    id: "KS24power",
    type: "Book chapter",
    year: 2024,
    title: "Maximal noncompactness of singular integral operators on $L^p$ spaces with power weights",
    authors: "O. Karlovych and A. Shalukhina",
    journal: "<em>Tbilisi Analysis and PDE Seminar</em> (Trends in Mathematics 7, Birkhäuser)",
    details: "87–97",
    doi: "https://doi.org/10.1007/978-3-031-62894-8_9",
    abstract: String.raw`We consider the singular integral operator $A = aI + bS_\Gamma$ with constant 
                        coefficients $a,b \in \mathbb{C}$, where $S_\Gamma$ is the Cauchy singular integral 
                        operator over a curve $\Gamma$ in the complex plane. We discuss two situations 
                        when the operator $A$ is maximally noncompact on the space $L^p(\Gamma, \varrho)$ 
                        with $1<p<\infty$ and a power weight $\varrho$, that is, when its norm is equal 
                        to its essential norm and to its Hausdorff measure of noncompactness. Our results 
                        extend two results by Naum Krupnik obtained in early 1980s and in 2010.`,
    bibtex: String.raw`@incollection{KS24power,
  AUTHOR = {Karlovych, Oleksiy and Shalukhina, Alina},
  TITLE = {Maximal noncompactness of singular integral operators on {$L^p$} spaces with power weights},
  BOOKTITLE = {Tbilisi Analysis and PDE Seminar},
  EDITOR = {Duduchava, Roland and Shargorodsky, Eugene and Tephnadze, George},
  SERIES = {Trends in Mathematics},
  VOLUME = {7},
  PAGES = {87--97},
  PUBLISHER = {Birkh{\"a}user},
  ADDRESS = {Cham},
  YEAR = {2024},
  DOI = {10.1007/978-3-031-62894-8_9},
}`
  }
];

// ============================================================================
// 2. INTERACTIVE ENGINE
// ============================================================================
let activeType = "All";
let searchQuery = "";
let sortOrder = "desc";

function formatAbstractHTML(str) {
  if (!str) return "";
  // Prevents "<" in math (like "$1 < p$") from being eaten as an HTML tag, while keeping <em> tags intact
  return str
    .replace(/<(?![\/]?em\b)/gi, "&lt;")
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/''/g, "”")
    .replace(/\\"{o}|\\"o/g, "ö");
}

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
          ${formatAbstractHTML(p.abstract)}
        </div>` : ""}

        ${p.bibtex ? `
        <div id="bib-${idx}" class="bibtex-wrapper" hidden>
          <button class="copy-btn" data-idx="${idx}" title="Copy to clipboard">
            <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <pre class="bibtex-box">${p.bibtex.trim().split('\n').map(line => `<span class="bib-line">${line.replace(/</g, '&lt;')}</span>`).join('')}</pre>
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
        if (!box.hidden) renderMath(box);
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
