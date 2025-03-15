document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("data.json"); // Charge le fichier JSON
        const pokemons = await response.json();

        // Remplissage du select avec les types uniques
        const typeSelect = document.getElementById("type");
        const types = new Set(pokemons.map(p => p.type));
        types.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });

        // Gestion du filtrage
        document.getElementById("filterButton").addEventListener("click", () => {
            const id = document.getElementById("id").value.trim();
            const name = document.getElementById("name").value.trim().toLowerCase();
            const type = document.getElementById("type").value;

            // Filtrage des données
            const filtered = pokemons.filter(pokemon => {
                return (!id || pokemon.id.toString() === id) &&
                       (!name || pokemon.name.french.toLowerCase().includes(name)) &&
                       (!type || pokemon.type.includes(type));
            });

            // Affichage des résultats
            const resultsList = document.getElementById("results");
            resultsList.innerHTML = ""; // Efface les anciens résultats
            filtered.forEach(pokemon => {
                const li = document.createElement("li");
                li.textContent = `${pokemon.id} - ${pokemon.name.french} (${pokemon.type})`;
                resultsList.appendChild(li);
            });
        });

    } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
    }
});
