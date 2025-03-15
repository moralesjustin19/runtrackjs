document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    function showError(input, message) {
        const errorMsg = input.nextElementSibling;
        errorMsg.textContent = message;
        errorMsg.style.color = "red";
    }

    function clearError(input) {
        const errorMsg = input.nextElementSibling;
        errorMsg.textContent = "";
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    }

    function validateName(name) {
        return name.length >= 3;
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            const prenom = document.getElementById("prenom");
            const nom = document.getElementById("nom");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirm_password");

            // Vérification prénom
            if (!validateName(prenom.value)) {
                showError(prenom, "La taille de votre prénom est trop petite (min 3 caractères)");
                isValid = false;
            } else {
                clearError(prenom);
            }

            // Vérification nom
            if (!validateName(nom.value)) {
                showError(nom, "La taille de votre nom est trop petite (min 3 caractères)");
                isValid = false;
            } else {
                clearError(nom);
            }

            // Vérification email
            if (!validateEmail(email.value)) {
                showError(email, "Email non valide");
                isValid = false;
            } else {
                clearError(email);
            }

            // Vérification mot de passe
            if (!validatePassword(password.value)) {
                showError(password, "Format du mot de passe incorrect (8 caractères min, 1 majuscule, 1 chiffre)");
                isValid = false;
            } else {
                clearError(password);
            }

            // Vérification confirmation du mot de passe
            if (password.value !== confirmPassword.value) {
                showError(confirmPassword, "Les mots de passe ne correspondent pas");
                isValid = false;
            } else {
                clearError(confirmPassword);
            }

            if (isValid) {
                alert("Inscription réussie !");
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;
            const email = document.getElementById("email");
            const password = document.getElementById("password");

            // Vérification email
            if (!validateEmail(email.value)) {
                showError(email, "Email invalide");
                isValid = false;
            } else {
                clearError(email);
            }

            // Vérification mot de passe
            if (!validatePassword(password.value)) {
                showError(password, "Mot de passe incorrect (8 caractères min, 1 majuscule, 1 chiffre)");
                isValid = false;
            } else {
                clearError(password);
            }

            if (isValid) {
                alert("Connexion réussie !");
            }
        });
    }
});
