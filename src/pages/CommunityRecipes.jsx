import React, { useState } from "react";

// MOCK PODACI ZA PRIMER — možeš koristiti svoje podatke ili kasnije povezati sa bazom
const MOCK_COMMUNITY_RECIPES = [
  {
    id: 1,
    name: "Porodična musaka",
    author: "Maja",
    description: "Tradicija na tanjiru!",
    ingredients: [
      { name: "krompir", quantity: 1, unit: "kg" },
      { name: "mleveno meso", quantity: 500, unit: "g" }
    ]
  },
  {
    id: 2,
    name: "Veganski burger",
    author: "Nikola",
    description: "Za sve koji vole povrće.",
    ingredients: [
      { name: "pasulj", quantity: 200, unit: "g" },
      { name: "leblebije", quantity: 100, unit: "g" }
    ]
  }
];

const CommunityRecipes = () => {
  // State za prikazivanje recepata (za sada koristi mock podatke)
  const [recipes] = useState(MOCK_COMMUNITY_RECIPES);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Community Recipes</h2>
      <p>Ovde su prikazani recepti koje su dodali korisnici iz zajednice.</p>

      <button
        style={{
          background: "#FF914D",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 22px",
          fontWeight: "bold",
          margin: "16px 0"
        }}
        onClick={() => alert("Dodavanje recepta funkcija dolazi uskoro!")}
      >
        + Dodaj recept
      </button>

      <div style={{ marginTop: 24 }}>
        {recipes.length === 0 ? (
          <p style={{ color: "#999" }}>Trenutno nema community recepata.</p>
        ) : (
          recipes.map((r) => (
            <div
              key={r.id}
              style={{
                background: "#fff3e9",
                borderRadius: "14px",
                padding: "18px",
                marginBottom: "18px",
                boxShadow: "0 2px 12px #ffb34724"
              }}
            >
              <h3 style={{ margin: 0 }}>{r.name}</h3>
              <div>
                <span style={{ fontWeight: 600 }}>Autor:</span> {r.author}
              </div>
              <div style={{ margin: "8px 0" }}>{r.description}</div>
              <b>Sastojci:</b>
              <ul>
                {r.ingredients.map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity} {item.unit}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommunityRecipes;