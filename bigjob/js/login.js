document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Vérification de l'email et mot de passe
    if (!email.endsWith("@laplateforme.io")) {
        alert("Seules les adresses @laplateforme.io sont acceptées.");
        return;
    }

    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
    }

    // Charger les utilisateurs depuis le fichier JSON
    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement du fichier JSON.");
            }
            return response.json();
        })
        .then(data => {
            // Chercher l'utilisateur dans le fichier JSON
            const user = data.users.find(user => user.email === email && user.password === password);

            if (user) {
                // Stocker l'utilisateur connecté dans le localStorage
                localStorage.setItem("user", JSON.stringify(user));

                // Rediriger selon le rôle (admin, moderator, user)
                if (user.role === "admin" || user.role === "moderator") {
                    window.location.href = "backoffice.html"; // Page pour admin et modérateur
                } else {
                    window.location.href = "calendar.html"; // Page pour utilisateur normal
                }
            } else {
                alert("Identifiants incorrects !");
            }
        })
        .catch(error => {
            console.error("Erreur lors du chargement des utilisateurs :", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        });
});
