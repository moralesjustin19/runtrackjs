function jourTravaille(date) {
    // Tableau des jours fériés en 2024
    const joursFeries2024 = [
        new Date('2024-01-01'), // Jour de l'An (1er janvier)
        new Date('2024-04-01'), // Lundi de Pâques (1er avril)
        new Date('2024-05-01'), // Fête du Travail (1er mai)
       
    ];

    // Vérification si la date est un jour férié
    for (let i = 0; i < joursFeries2024.length; i++) {
        // Comparer l'année, le mois et le jour de la date pour éviter les erreurs d'heure
        if (date.getDate() === joursFeries2024[i].getDate() &&
            date.getMonth() === joursFeries2024[i].getMonth() &&
            date.getFullYear() === joursFeries2024[i].getFullYear()) {
            console.log(`Le ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un jour férié.`);
            return;
        }
    }

    // Vérifier si la date est un samedi ou dimanche
    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un week-end.`);
        return;
    }

    // Si ce n'est ni un jour férié, ni un week-end, c'est un jour travaillé
    console.log(`Oui, ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un jour travaillé.`);
}

// Exemples de tests
jourTravaille(new Date('2024-01-01')); 
jourTravaille(new Date('2024-04-06')); 
jourTravaille(new Date('2024-04-10')); 
