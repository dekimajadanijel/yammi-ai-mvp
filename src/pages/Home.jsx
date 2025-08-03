import React, { useState, useEffect } from "react";

// Helper: Vraća indeks prvog prikazanog recepta za današnji dan
function getTodayRecipeIndex(recipesLength) {
  const now = new Date();
  const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  return recipesLength === 0 ? 0 : daysSinceEpoch % recipesLength;
}

export default function Home() {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fi = JSON.parse(localStorage.getItem("fridge_items") || "[]");
    setFridgeItems(fi);
    const rec = JSON.parse(localStorage.getItem("recipes_v1") || "[]");
    setRecipes(rec);
  }, []);

  // Pravi niz koji sadrži najviše 3 različita recepta
  let recommendedRecipes = [];
  if (recipes.length > 0) {
    const index = getTodayRecipeIndex(recipes.length);
    // Uzimamo MIN između 3 i broja recepata
    const showCount = Math.min(3, recipes.length);
    for (let i = 0; i < showCount; i++) {
      recommendedRecipes.push(recipes[(index + i) % recipes.length]);
    }
  }

  return (
    <div className="home-page">
      <h2>Preporučeni recepti</h2>
      <div className="recommended-recipes">
        {recommendedRecipes.length === 0 && (
          <p style={{ color: "#999" }}>Nema recepata.</p>
        )}
        {recommendedRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <p>
              <strong>Vreme pripreme:</strong> {recipe.time} {recipe.timeUnit}
            </p>
            <p>
              <strong>Broj osoba:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Prvo uputstvo:</strong> {recipe.instructions.split(".")[0]}
            </p>
          </div>
        ))}
      </div>

      <h2>Sadržaj frižidera</h2>
      <div className="fridge-summary">
        {fridgeItems.length === 0 && (
          <p style={{ color: "#999" }}>Frižider je prazan.</p>
        )}
        {fridgeItems.map(item => (
          <div key={item.id} className="fridge-item-card">
            <h4>{item.name}</h4>
            <p>
              Količina: {item.quantity} {item.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


