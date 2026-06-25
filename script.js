document.addEventListener("DOMContentLoaded", () => {

    /* ── TERMINAL ANIMATION ── */
    const lines = [
        { cmd: "whoami", outputs: [
            { id: "t-line1", text: "→ Cheikh Ahmed Tidiane NDIOM", cls: "" },
            { id: "t-line2", text: "→ L3 Systèmes, Réseaux & Télécommunications", cls: "info" },
            { id: "t-line3", text: "→ Passionnée de: la Cybersécurité · l'IA · l'Infrastructure Réseau · du Cloud computing", cls: "info" }
        ]}
    ];

    const typedEl = document.getElementById("typed-text");
    const cmd = lines[0].cmd;
    let i = 0;

    function typeChar() {
        if (i < cmd.length) {
            typedEl.textContent += cmd[i++];
            setTimeout(typeChar, 80 + Math.random() * 40);
        } else {
            // Show outputs after typing
            setTimeout(() => {
                lines[0].outputs.forEach((out, idx) => {
                    setTimeout(() => {
                        const el = document.getElementById(out.id);
                        if (el) {
                            el.textContent = out.text;
                            if (out.cls) el.classList.add(out.cls);
                        }
                    }, idx * 200);
                });
            }, 300);
        }
    }

    setTimeout(typeChar, 800);

    /* ── PARCOURS TIMELINE ── */
    const pList = document.getElementById("list-parcours");
    [...myData.parcours].sort((a, b) => b.id - a.id).forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.titre}</div>
            <div class="timeline-lieu">${item.lieu}</div>
        `;
        pList.appendChild(div);
    });

    /* ── PROJETS GRID ── */
    const projGrid = document.getElementById("list-projets");
    myData.projets.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";
        const techBadges = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");
        card.innerHTML = `
            <div class="project-icon">${p.icon}</div>
            <div class="project-name">${p.nom}</div>
            <div class="project-desc">${p.desc}</div>
            <div class="project-tech">${techBadges}</div>
        `;
        projGrid.appendChild(card);
    });

    /* ── COMPÉTENCES (ACCORDION) ── */
    const skillsGrid = document.getElementById("list-skills");
    myData.competences.forEach(item => {
        const card = document.createElement("div");
        card.className = "skill-card";
        const links = item.documents.map(d =>
            `<a href="${d.url}" target="_blank" class="drive-link">↗ ${d.label}</a>`
        ).join("");
        card.innerHTML = `
            <div class="skill-trigger">
                <span class="skill-icon">${item.icon}</span>
                <span style="flex:1">${item.nom}</span>
                <span class="chevron">+</span>
            </div>
            <div class="skill-panel">
                <p class="skill-detail">${item.details}</p>
                ${links}
            </div>
        `;
        card.querySelector(".skill-trigger").addEventListener("click", () => {
            const isOpen = card.classList.toggle("open");
            card.querySelector(".chevron").textContent = isOpen ? "×" : "+";
        });
        skillsGrid.appendChild(card);
    });

    /* ── CERTIFICATIONS ── */
    const certsGrid = document.getElementById("list-certs");
    myData.certifications.forEach(item => {
        const card = document.createElement("div");
        card.className = "cert-card";
        const links = item.documents.map(d =>
            `<a href="${d.url}" target="_blank" class="drive-link">↗ ${d.label}</a>`
        ).join("");
        card.innerHTML = `
            <div class="cert-issuer">${item.issuer}</div>
            <div class="cert-name">${item.nom}</div>
            <div class="cert-desc">${item.details}</div>
            ${links}
        `;
        certsGrid.appendChild(card);
    });

    /* ── SCROLL REVEAL ── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    /* ── ACTIVE NAV ── */
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-item[data-section]");

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navItems.forEach(n => n.classList.remove("active"));
                const active = document.querySelector(`.nav-item[data-section="${e.target.id}"]`);
                if (active) active.classList.add("active");
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => navObserver.observe(s));
});
