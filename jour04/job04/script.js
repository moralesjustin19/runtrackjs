document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("updateButton");
    const userTable = document.getElementById("userTable");

    updateButton.addEventListener("click", async () => {
        try {
            const response = await fetch("utilisateur.json");
            const users = await response.json();

            // Vider le tableau avant de le remplir
            userTable.innerHTML = "";

            users.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                userTable.appendChild(row);
            });

        } catch (error) {
            console.error("Erreur lors du chargement des utilisateurs :", error);
        }
    });
});
