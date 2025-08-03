import React, { useState } from "react";
import "../index.css";

export default function RecipeCard({ recipe, onDelete, onEdit }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsExpanded(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  // Prikaz samo prve rečenice
  const getShortInstructions = (text) =>
    text ? text.split('\n')[0] : "";

  return (
    <>
      <div
        className="recipe-card"
        tabIndex={0}
        onClick={openModal}
        onKeyPress={(e) => {
          if (e.key === "Enter") openModal(e);
        }}
        role="button"
        style={{ cursor: "pointer" }}
      >
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <p>
          <strong>Vreme pripreme:</strong> {recipe.time} min
        </p>
        <p>
          <strong>Broj osoba:</strong> {recipe.servings}
        </p>
        <p className="short-instructions">
          {getShortInstructions(recipe.instructions)}
        </p>
        <button
          className="edit-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(recipe.id);
          }}
        >
          Izmeni
        </button>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(recipe.id);
          }}
        >
          Obriši
        </button>
      </div>

      {isExpanded && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              × Zatvori
            </button>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>
              <strong>Vreme pripreme:</strong> {recipe.time} min
            </p>
            <p>
              <strong>Broj osoba:</strong> {recipe.servings}
            </p>
            <h4>Uputstvo:</h4>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {recipe.instructions}
            </p>
          </div>
        </div>
      )}
    </>
  );
}