const $ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* menu mobile */
const burger = document.getElementById("burger"), nav = document.getElementById("nav");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

/* lien actif */
const links = $("a", nav);
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
$("main section[id]").forEach(s => spy.observe(s));

/* révélation au scroll avec décalage entre frères */
if (!reduce) {
  const targets = $("h2,.eb,.intro,.about p,.langs,.focus .card,.tl li,.exp .card,.proj,details,.cert,.stats div");
  targets.forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => targets.includes(c));
    el.style.setProperty("--d", Math.min(sibs.indexOf(el), 5) * 0.08 + "s");
    el.classList.add("rv");
  });
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add("in"); io.unobserve(el);
    el.addEventListener("transitionend", () => el.classList.remove("rv", "in"), { once: true });
  }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach(el => io.observe(el));
}

/* compteurs */
$("[data-n]").forEach(el => {
  const end = +el.dataset.n, suf = el.dataset.s || "";
  if (reduce) return;
  el.textContent = "0" + suf;
  new IntersectionObserver(([en], o) => {
    if (!en.isIntersecting) return; o.disconnect();
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1200, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }, { threshold: 1 }).observe(el);
});

/* barre de progression + parallaxe photo */
const bar = document.getElementById("bar"), img = document.querySelector(".hero figure img");
let tick = false;
addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty("--p", max > 0 ? y / max : 0);
    if (!reduce && y < innerHeight) img.style.setProperty("--py", y * 0.08 + "px");
    tick = false;
  });
}, { passive: true });
