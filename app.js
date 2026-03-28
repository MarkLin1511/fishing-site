const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("nav-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const filterGrid = document.querySelector("[data-filter-grid]");

if (filterButtons.length && filterGrid) {
  const cards = filterGrid.querySelectorAll(".spot-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const tags = card.dataset.tags || "";
        const shouldShow = filter === "all" || tags.includes(filter);
        card.hidden = !shouldShow;
      });
    });
  });
}
