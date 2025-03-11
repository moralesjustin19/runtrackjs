// Fonction qui récupère et affiche le texte de l'élément "citation" dans la console
function citation() {
    let texteCitation = document.getElementById("citation").textContent;
    console.log(texteCitation);
}

// Ajout d'un écouteur d'événement sur le bouton
document.getElementById("button").addEventListener("click", citation);
