// Simuler une liste de demandes de présence (Cela devrait idéalement être récupéré d'un backend via API)
const requests = [
    { date: "2024-03-21", email: "etudiant1@laplateforme.io", status: "En attente" },
    { date: "2024-03-22", email: "etudiant2@laplateforme.io", status: "En attente" }
];

// Fonction pour afficher les demandes de présence dans la table
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("requestsTable");
    requests.forEach((req, index) => {
        const row = `<tr>
            <td>${req.date}</td>
            <td>${req.email}</td>
            <td id="status-${index}">${req.status}</td>
            <td>
                <button class="btn btn-success" onclick="updateStatus(${index}, 'Accepté')">Accepter</button>
                <button class="btn btn-danger" onclick="updateStatus(${index}, 'Refusé')">Refuser</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});

// Fonction pour mettre à jour le statut d'une demande
function updateStatus(index, status) {
    document.getElementById(`status-${index}`).innerText = status;
}

// Fonction pour gérer la déconnexion
function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html"; // Rediriger l'utilisateur vers la page d'accueil après la déconnexion
}
