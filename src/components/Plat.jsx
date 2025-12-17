import React, { useState } from "react";

const Plat = () => {
  const [plats, setPlats] = useState([
    "Omelette",
    "Poulet rôti",
    "Tomates farcies",
    "Croque-monsieur",
    "Tortilla espagnole",
    "Pizza Margherita",
    "Burger maison",
    "Pancakes",
    "Gratin dauphinois",
    "Pâtes à la carbonara",
    "Salade grecque",
    "Steak frites",
    "Crêpes sucrées",
    "Salade César",
    "Ratatouille",
    "Wraps au poulet",
    "Boulettes de viande",
    "Clafoutis aux cerises",
    "Falafels",
    "Tarte aux légumes",
    "Oeufs brouillés",
    "Pâtes au pesto",
    "Smoothie fruité",
    "Brochettes de poulet",
    "Quiche Lorraine",
    "Boeuf bourguignon",
    "Tarte aux pommes",
    "Gaufres maison",
    "Pommes de terre sautées",
    "Lasagnes à la viande",
  ]);

  const [nouveauPlat, setNouveauPlat] = useState("");

  // Étape 2: Fonction pour ajouter un plat
  const ajouterPlat = () => {
    // Vérifier que le champ n'est pas vide
    if (nouveauPlat.trim() !== "") {
      // Créer un nouveau tableau avec le plat ajouté
      setPlats([...plats, nouveauPlat]);
      // Réinitialiser le champ de saisie
      setNouveauPlat("");
    }
  };

  const supprimerPlat = (index) => {
    // Créer un nouveau tableau sans l'élément à l'index spécifié
    const nouveauxPlats = plats.filter((_, i) => i !== index);
    setPlats(nouveauxPlats);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Section d'ajout de plat */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Ajouter un plat</h2>
        <input
          type="text"
          value={nouveauPlat}
          onChange={(e) => setNouveauPlat(e.target.value)}
          placeholder="Entrez le nom du plat"
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={ajouterPlat}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </div>

      {/* Liste des plats */}
      <div>
        <h2>Liste des plats ({plats.length})</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {plats.map((plat, index) => (
            <li
              key={index}
              style={{
                marginBottom: "8px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {index + 1}. {plat}
              </span>
              <button
                onClick={() => supprimerPlat(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plat;
