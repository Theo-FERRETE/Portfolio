// Burger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobile-menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Fermeture du menu mobile après clic sur un lien
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Scroll fluide sur les liens de navigation
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80, // compenser la hauteur du header
          behavior: "smooth"
        });
      }
    });
  });
});
