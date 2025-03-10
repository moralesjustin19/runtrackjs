function tri(numbers, order) {
    if (order === "asc") {
        // Trie le tableau dans l'ordre ascendant
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        // Trie le tableau dans l'ordre décroissant
        return numbers.sort((a, b) => b - a);
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", retourner une erreur ou tableau non modifié
        console.log("Erreur : l'ordre doit être 'asc' ou 'desc'.");
        return numbers;
    }
}

// Exemples d'utilisation
console.log(tri([5, 3, 8, 1, 4], "asc"));  // Affiche: [1, 3, 4, 5, 8] (ordre ascendant)
console.log(tri([5, 3, 8, 1, 4], "desc")); // Affiche: [8, 5, 4, 3, 1] (ordre décroissant)
console.log(tri([10, 15, 3, 7], "asc"));  // Affiche: [3, 7, 10, 15]
console.log(tri([10, 15, 3, 7], "desc")); // Affiche: [15, 10, 7, 3]
console.log(tri([5, 3, 8, 1, 4], "xyz")); // Affiche: Erreur : l'ordre doit être 'asc' ou 'desc'.
