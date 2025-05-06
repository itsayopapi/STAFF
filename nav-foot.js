// include.js (or wherever you're loading navbar)
document.querySelectorAll("[data-include]").forEach(async (el) => {
  const file = el.getAttribute("data-include");
  const res = await fetch(file);
  el.innerHTML = await res.text();

  // Now re-initialize your sticky logic
  initStickyNavbar(); // <- your function for sticky behavior
});

function initStickyNavbar() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled-down"); // Add custom class if needed
    } else {
      navbar.classList.remove("scrolled-down");
    }
  });
}
