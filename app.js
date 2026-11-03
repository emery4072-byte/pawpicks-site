/* Shared rendering: header, footer, product cards. Edit products.js, not this file. */

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderHeader() {
  const cats = Object.values(CATEGORIES)
    .map(c => `<a href="${c.page}">${c.label}</a>`).join("");
  document.getElementById("site-header").innerHTML = `
    <div class="wrap bar">
      <a class="brand" href="index.html">🐾 ${esc(SITE.name)}</a>
      <nav>${cats}<a href="index.html#deals" class="pill">11.11 Deals</a></nav>
    </div>`;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="wrap foot">
      <p><strong>Affiliate disclosure:</strong> ${esc(SITE.name)} participates in the AliExpress affiliate program.
      When you buy through links on this site, we may earn a commission at no extra cost to you.
      <a href="disclosure.html">Learn more</a>.</p>
      <p>Prices and availability change often. Always check the AliExpress listing before buying.</p>
      <p>&copy; ${new Date().getFullYear()} ${esc(SITE.name)} &middot; <a href="mailto:${esc(SITE.email)}">Contact</a></p>
    </div>`;
}

function productCard(p) {
  const media = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`
    : `<span class="emoji" aria-hidden="true">${p.emoji || "🐾"}</span>`;
  return `
    <article class="card">
      <div class="media">${media}</div>
      <div class="body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.blurb)}</p>
        <div class="row">
          <span class="price">${esc(p.price)}</span>
          <a class="btn" href="${esc(p.link)}" target="_blank" rel="sponsored noopener nofollow">View on AliExpress</a>
        </div>
      </div>
    </article>`;
}

function renderProducts(targetId, filterFn) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = PRODUCTS.filter(filterFn);
  el.innerHTML = list.length
    ? list.map(productCard).join("")
    : "<p>No products here yet. Add some in products.js.</p>";
}

function renderCategoryTiles(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = Object.values(CATEGORIES).map(c => `
    <a class="tile" href="${c.page}">
      <span class="big">${c.emoji}</span>
      <h3>${c.label}</h3>
      <p>${esc(c.desc)}</p>
    </a>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-site-name]").forEach(n => n.textContent = SITE.name);
  document.querySelectorAll("[data-tagline]").forEach(n => n.textContent = SITE.tagline);
  if (page === "home") {
    renderCategoryTiles("tiles");
    renderProducts("deals-grid", p => (p.tags || []).includes("deal"));
  } else if (CATEGORIES[page]) {
    renderProducts("grid", p => p.cat === page);
  }
});
