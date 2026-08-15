document.addEventListener("DOMContentLoaded", () => {

  /* ── FORMATION ── */
  const pList = document.getElementById("list-parcours");
  [...myData.parcours].sort((a, b) => b.id - a.id).forEach(item => {
    const div = document.createElement("div");
    div.className = "tl-item";
    div.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-title">${item.titre}</div>
      <div class="tl-lieu">${item.lieu}</div>`;
    pList.appendChild(div);
  });

  /* ── À PROPOS — cards ── */
  const ac = document.getElementById("about-cards");
  if (ac) {
    myData.about.forEach(item => {
      const div = document.createElement("div");
      div.className = "ab";
      div.innerHTML = `
        <div class="ab-icon">${item.icon}</div>
        <div class="ab-body">
          <strong>${item.titre}</strong>
          <span>${item.desc}</span>
        </div>`;
      ac.appendChild(div);
    });
  }

  /* ── PROJETS ── */
  const pg = document.getElementById("list-projets");
  myData.projets.forEach(p => {
    const card = document.createElement("div");
    card.className = "proj-card";
    card.innerHTML = `
      <div class="proj-top">
        <div class="proj-ico">${p.icon}</div>
        <div class="proj-meta">
          <div class="proj-ctx">${p.ctx}</div>
          <div class="proj-name">${p.nom}</div>
        </div>
      </div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tech">${p.tech.map(t => `<span class="t-tag">${t}</span>`).join("")}</div>`;
    pg.appendChild(card);
  });

  /* ── COMPÉTENCES accordion ── */
  const sg = document.getElementById("list-skills");
  myData.competences.forEach(item => {
    const card = document.createElement("div");
    card.className = "sk-card";
    const links = item.documents.map(d =>
      `<a href="${d.url}" target="_blank" class="drive-link">↗ ${d.label}</a>`
    ).join("");
    card.innerHTML = `
      <div class="sk-trigger">
        <span class="sk-icon">${item.icon}</span>
        <span class="sk-label">${item.nom}</span>
        <span class="sk-plus">+</span>
      </div>
      <div class="sk-body">
        <div class="sk-inner">
          <p class="sk-detail">${item.details}</p>
          ${links}
        </div>
      </div>`;
    card.querySelector(".sk-trigger").addEventListener("click", () => {
      const open = card.classList.toggle("open");
      card.querySelector(".sk-plus").textContent = open ? "×" : "+";
    });
    sg.appendChild(card);
  });

  /* ── CERTIFICATIONS ── */
  const cg = document.getElementById("list-certs");
  myData.certifications.forEach(item => {
    const card = document.createElement("div");
    card.className = "cert-card";
    const links = item.documents.map(d =>
      `<a href="${d.url}" target="_blank" class="drive-link">↗ ${d.label}</a>`
    ).join("");
    card.innerHTML = `
      <div class="cert-issuer">${item.issuer}</div>
      <div class="cert-name">${item.nom}</div>
      <div class="cert-desc">${item.desc}</div>
      ${links}`;
    cg.appendChild(card);
  });

  /* ── SCROLL REVEAL ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

  /* ── NAV ACTIVE ── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".sn[data-s]");
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(n => n.classList.remove("active"));
        const active = document.querySelector(`.sn[data-s="${e.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => navObs.observe(s));

  /* ── MOBILE MENU ── */
  const btn     = document.getElementById("mobBtn");
  const sidebar = document.getElementById("sidebar");
  btn.addEventListener("click", () => sidebar.classList.toggle("open"));
  navLinks.forEach(n => n.addEventListener("click", () => sidebar.classList.remove("open")));

});
