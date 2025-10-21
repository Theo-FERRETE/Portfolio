// Gestion du thème clair/sombre
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobileHeader = document.getElementById('theme-toggle-mobile-header');
  const body = document.body;
  
  // Icônes desktop
  const iconDark = document.getElementById('theme-icon-dark');
  const iconLight = document.getElementById('theme-icon-light');
  
  // Icônes mobile header
  const iconDarkMobileHeader = document.getElementById('theme-icon-dark-mobile-header');
  const iconLightMobileHeader = document.getElementById('theme-icon-light-mobile-header');
  
  // Vérifier le thème sauvegardé dans localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateIcons(true);
  }
  
  // Fonction pour mettre à jour les icônes
  function updateIcons(isLight) {
    if (isLight) {
      iconDark.classList.add('hidden');
      iconLight.classList.remove('hidden');
      iconDarkMobileHeader.classList.add('hidden');
      iconLightMobileHeader.classList.remove('hidden');
    } else {
      iconDark.classList.remove('hidden');
      iconLight.classList.add('hidden');
      iconDarkMobileHeader.classList.remove('hidden');
      iconLightMobileHeader.classList.add('hidden');
    }
  }
  
  // Fonction pour basculer le thème
  function toggleTheme() {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateIcons(isLight);
  }
  
  // Écouteurs d'événements
  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobileHeader.addEventListener('click', toggleTheme);
});
