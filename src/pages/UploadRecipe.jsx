import React, { useState } from "react";

const UploadRecipe = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !time || !ingredients) {
      alert("Molimo popunite sva polja!");
      return;
    }
    const recipe = {
      id: Date.now(),
      title,
      time,
      image: image || "https://via.placeholder.com/120x80",
      ingredients: ingredients.split(",").map(s => s.trim()),
      servings
    };
    if (onAddRecipe) onAddRecipe(recipe); // za kasnije povezivanje sa Home-om
    alert("Recept uspešno dodat!");
    // resetuj polja
    setTitle(""); setTime(""); setImage(""); setIngredients(""); setServings(1);
  };

  return (
    <div style={{ maxWidth: 400, margin: "32px auto", background: "#fff", padding: 24, borderRadius: 14 }}>
      <h2>Dodaj novi recept</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Naslov recepta:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <div>
          <label>Vreme pripreme (npr. 20 min):</label>
          <input value={time} onChange={e => setTime(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <div>
          <label>Slika (URL ili prazno za dummy):</label>
          <input value={image} onChange={e => setImage(e.target.value)} style={{ width: "100%" }} />
        </div>
        <div>
          <label>Sastojci (odvoji zarezom):</label>
          <input value={ingredients} onChange={e => setIngredients(e.target.value)} required style={{ width: "100%" }} />
        </div>
        <div>
          <label>Broj osoba:</label>
          <input
            type="number"
            min={1}
            value={servings}
            onChange={e => setServings(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{
          marginTop: 16,
          width: "100%",
          background: "linear-gradient(90deg,#ea455a,#f9d423)",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: 8,
          padding: 10,
          fontSize: 17,
          cursor: "pointer"
        }}>
          Dodaj recept
        </button>
      </form>
    </div>
  );
};

export default UploadRecipe;