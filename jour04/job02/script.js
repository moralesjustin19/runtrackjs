// Fonction pour récupérer la valeur d'une clé dans un tableau JSON
async function jsonValueKey(file, index, key) {
  try {
      const response = await fetch(file);
      const data = await response.json();
      
      if (Array.isArray(data) && data[index]) {
          return data[index][key] !== undefined ? data[index][key] : "Clé introuvable";
      } else {
          return "Format JSON incorrect ou index non défini";
      }
  } catch (error) {
      console.error("Erreur lors du chargement du JSON :", error);
      return "Erreur de chargement";
  }
}

// Fonction pour récupérer la clé entrée par l'utilisateur
function searchValue() {
  const key = document.getElementById("keyInput").value;
  jsonValueKey("data.json", 0, key).then(value => {
      const resultElement = document.getElementById("result");
      if (resultElement) {
          resultElement.textContent = "Valeur trouvée : " + value;
      }
  });
}

// Exécution automatique pour afficher la ville au chargement
jsonValueKey("data.json", 0, "city").then(value => {
  const resultElement = document.getElementById("result");
  if (resultElement) {
      resultElement.textContent = "Valeur trouvée : " + value;
  }
});
