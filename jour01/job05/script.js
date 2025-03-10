function afficherJoursSemaines() {
    // Création d'un tableau contenant les jours de la semaine
    const joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle for pour afficher chaque jour
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]); // Affiche chaque jour dans la console
    }
}

// Appel de la fonction
afficherJoursSemaines();
