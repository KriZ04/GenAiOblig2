// Marker nav-lenke aktiv basert på synlig seksjon
export function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const links = Array.from(document.querySelectorAll(".topnav .links a.nav-btn"));
    const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const id = e.target.id;
            links.forEach(a => a.classList.remove("active"));
            const link = map.get(id);
            if (link) link.classList.add("active");
        });
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });

    sections.forEach(sec => io.observe(sec));
}
export function initBackToTop() {
    const btn = document.createElement("button");
    btn.className = "backtop";
    btn.textContent = "↑ Topp";
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(btn);
    window.addEventListener("scroll", () => {
        btn.classList.toggle("show", window.scrollY > 400);
    });
}
// kall også denne fra layout:
export function initAll() { initScrollSpy(); initBackToTop(); }
