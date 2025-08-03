import React from "react";

const ChallengeCard = ({ recipe }) => (
  <div className="challenge-card" style={{
    background: "#fff",
    borderRadius: "16px",
    padding: "1.2rem",
    boxShadow: "0 4px 18px #0001",
    minWidth: "220px",
    maxWidth: "270px"
  }}>
    <h3 style={{ color: "#ff3d57", marginBottom: "0.2rem" }}>{recipe.title}</h3>
    <div style={{ fontSize: "0.95rem", color: "#222", marginBottom: "0.6rem" }}>
      <span role="img" aria-label="time">⏱</span> {recipe.time} &nbsp; | &nbsp;
      <span role="img" aria-label="people">🏆</span> {recipe.servings} osoba
    </div>
    <div>
      <b>Opis:</b> {recipe.description}
    </div>
  </div>
);

export default ChallengeCard;