document.addEventListener("DOMContentLoaded", () => {
  const galerieGrid = document.querySelector(".galerie-grid");
  galerieGrid.innerHTML = ""; // on vide d'abord, par sécurité

  const basePath = "/Salle de sport/assets/img/";
  const totalImages = 16;

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `${basePath}galerie-photo-${i}.jpg`;
    img.alt = `Photo ${i} FitZone`;
    img.loading = "lazy";
    img.className = "w-full h-48 object-cover rounded shadow hover:scale-105 transition duration-150";
    galerieGrid.appendChild(img);
  }
});
