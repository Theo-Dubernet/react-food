import { useState } from 'react';

function ListIngredient() {
  const [ingredients, setIngredients] = useState([
    "Oeuf","Sel","Poivre","Huile","Poulet entier","Herbe","Tomate",
    "Viande hachée","Riz","Oignon","Pain de mie","Jambon","Fromage"
  ]);

  const [nouvelIngredient, setNouvelIngredient] = useState("");
  const [erreur, setErreur] = useState(""); // Pour le message d'erreur

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const ajouterIngredient = () => {
    const nom = capitalize(nouvelIngredient.trim());
    if (nom === "") return;

    // Vérifier si l'ingrédient existe déjà (insensible à la casse)
    if (ingredients.some(i => i.toLowerCase() === nom.toLowerCase())) {
      setErreur("Cet ingrédient est déjà présent !");
      return;
    }

    setIngredients([...ingredients, nom]);
    setNouvelIngredient("");
    setErreur(""); // Réinitialiser le message
  };

  const supprimerIngredient = (indexSupprimer) => {
    setIngredients(ingredients.filter((_, index) => index !== indexSupprimer));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titre}>Liste des Ingrédients</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={nouvelIngredient}
          onChange={(e) => setNouvelIngredient(e.target.value)}
          placeholder="Ajouter un ingrédient"
          style={styles.input}
        />
        <button onClick={ajouterIngredient} style={styles.ajouterBtn}>Ajouter</button>
      </div>

      {/* Message d'erreur */}
      {erreur && <div style={styles.erreur}>{erreur}</div>}

      <ul style={styles.liste}>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={styles.item}>
            {ingredient}
            <button
              onClick={() => supprimerIngredient(index)}
              style={styles.supprimerBtn}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9"
  },
  titre: { textAlign: "center", color: "#333" },
  inputContainer: { display: "flex", marginBottom: "10px", gap: "10px" },
  input: { flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" },
  ajouterBtn: { padding: "8px 12px", border: "none", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", cursor: "pointer" },
  erreur: { color: "#f44336", marginBottom: "10px", textAlign: "center" },
  liste: { listStyle: "none", padding: 0 },
  item: { display: "flex", justifyContent: "space-between", padding: "6px 10px", marginBottom: "6px", borderRadius: "5px", backgroundColor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
  supprimerBtn: { backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", padding: "4px 8px", cursor: "pointer" }
};

export default ListIngredient;
