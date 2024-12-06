// Fonction d'animation typewriter pour l'accueil
document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector('.typewriter h1');
    let text = typewriterElement.innerHTML;
    typewriterElement.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
    
    // Animation d'apparition des sections
    const elements = document.querySelectorAll(".section");
    window.addEventListener("scroll", function() {
        elements.forEach(function(el) {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("visible");
            }
        });
    });
});
