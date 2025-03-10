// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) { // Teste les diviseurs jusqu'à la racine carrée de n
        if (n % i === 0) return false; // Si n est divisible par i, ce n'est pas premier
    }
    return true; // Si aucun diviseur n'est trouvé, le nombre est premier
}

// Fonction pour retourner la somme des nombres premiers ou false
function sommeNombresPremiers(a, b) {
    // Vérifie si les deux nombres sont premiers
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Retourne la somme des deux nombres premiers
    } else {
        return false; // Retourne false si l'un des nombres n'est pas premier
    }
}

// Exemples d'utilisation
console.log(sommeNombresPremiers(3, 5)); // Affiche: 8 (3 et 5 sont premiers)
console.log(sommeNombresPremiers(4, 5)); // Affiche: false (4 n'est pas premier)
console.log(sommeNombresPremiers(7, 11)); // Affiche: 18 (7 et 11 sont premiers)
console.log(sommeNombresPremiers(10, 20)); // Affiche: false (ni 10 ni 20 sont premiers)
