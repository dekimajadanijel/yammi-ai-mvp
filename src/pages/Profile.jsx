import React, { useEffect, useState } from "react";

// Dummy user data
const dummyUser = {
  img: "https://randomuser.me/api/portraits/men/32.jpg", // Možeš da staviš bilo koju sliku
  name: "Marko Marković",
  city: "Beograd",
  email: "marko.markovic@email.com",
};

function getRecipeCount() {
  try {
    const stored = localStorage.getItem("recipes");
    if (stored) {
      const recipes = JSON.parse(stored);
      return Array.isArray(recipes) ? recipes.length : 0;
    }
    return 0;
  } catch (e) {
    return 0;
  }
}

const Profile = () => {
  const [recipeCount, setRecipeCount] = useState(0);

  useEffect(() => {
    setRecipeCount(getRecipeCount());
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src={dummyUser.img}
          alt="User"
          className="profile-image"
        />
        <h2>{dummyUser.name}</h2>
        <p><strong>Grad:</strong> {dummyUser.city}</p>
        <p><strong>Email:</strong> {dummyUser.email}</p>
        <p><strong>Broj objavljenih recepata:</strong> {recipeCount}</p>
      </div>
    </div>
  );
};

export default Profile;