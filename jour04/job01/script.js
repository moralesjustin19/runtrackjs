document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const expression = document.getElementById("expression");

    button.addEventListener("click", () => {
        fetch("expression.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement du fichier.");
                }
                return response.text();
            })
            .then(data => {
                expression.textContent = data;
            })
            .catch(error => {
                console.error("Erreur :", error);
            });
    });
});
