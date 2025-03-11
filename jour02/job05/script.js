window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY; // Nombre de pixels déjà défilés
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale scrollable
    let scrollPercent = (scrollTop / scrollHeight) * 100; // Calcul du pourcentage

    // Conversion du pourcentage de scroll en couleur (du noir au rouge)
    let redValue = Math.round((scrollPercent / 100) * 255);
    document.getElementById("footer").style.backgroundColor = `rgb(${redValue}, 0, 0)`;
});
