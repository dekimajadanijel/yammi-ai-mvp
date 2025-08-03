// src/context/RecipesContext.js

import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const data = localStorage.getItem("recipes");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};