import React from "react";
import recipesMockData from "../mockData";

function RecipeDetails({ recipeId }) {
  const recipe = recipesMockData.find(r => r.id === recipeId);

  if (!recipe) return <div>Recept nije pronađen.</div>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>
            {ing.name} – {ing.quantity} {ing.unit}
          </li>
        ))}
      </ul>
      {recipe.videoUrl ? (
        <a
          href={recipe.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "8px 20px",
            margin: "16px 0",
            background: "#ff9900",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Pogledaj video
        </a>
      ) : (
        <div>Video nije dostupan za ovaj recept.</div>
      )}
      <b>Uputstvo za pripremu:</b>
      <p style={{ whiteSpace: "pre-wrap", marginBottom: 8 }}>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;