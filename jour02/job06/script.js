// Séquence du code Konami
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight"
];

let userInput = []; // Tableau pour stocker les touches pressées
let isKonamiActive = false; // Variable pour suivre l'état du mode Konami

// Écoute des touches pressées
document.addEventListener("keydown", function(event) {
    userInput.push(event.key);

    // Vérifier si la séquence correspond au code Konami
    if (userInput.slice(-konamiCode.length).join("") === konamiCode.join("")) {
        isKonamiActive = !isKonamiActive; // Bascule entre activé et désactivé

        if (isKonamiActive) {
            document.body.classList.add("konami"); // Active le style Konami
        } else {
            document.body.classList.remove("konami"); // Désactive le style
        }
    }
});

