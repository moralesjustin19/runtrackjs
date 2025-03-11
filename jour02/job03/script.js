function addOne() {
    let compteur = document.getElementById("compteur");
    let valeur = parseInt(compteur.textContent); // Convertit le texte en nombre
    compteur.textContent = valeur + 1; // Incrémente et met à jour le texte
}

// Ajout d'un écouteur d'événement sur le bouton
document.getElementById("button").addEventListener("click", addOne);
