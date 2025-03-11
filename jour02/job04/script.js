document.addEventListener("keydown", function(event) {
    let textarea = document.getElementById("keylogger");
    let key = event.key;

    // Vérifie si la touche pressée est une lettre (a-z)
    if (/^[a-z]$/i.test(key)) {
        // Si le focus est dans le textarea, ajoute deux fois la lettre
        if (document.activeElement === textarea) {
            textarea.value += key + key;
        } else {
            textarea.value += key;
        }
    }
});
