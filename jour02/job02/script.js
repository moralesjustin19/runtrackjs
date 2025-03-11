function showhide() {
    let article = document.getElementById("citation");

    if (article) {
        // Si l'article existe, on le supprime
        article.remove();
    } else {
        // Sinon, on le crée et on l'ajoute à la page
        article = document.createElement("article");
        article.id = "citation"; // Ajout d'un ID pour faciliter la suppression
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article); // Ajout à la fin du body
    }
}

// Ajout d'un écouteur d'événement sur le bouton
document.getElementById("button").addEventListener("click", showhide);

