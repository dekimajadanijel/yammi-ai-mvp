// src/pages/Leaderboard.jsx

import React from "react";

// MOCK PODACI: lista korisnika sa brojem recepata
const users = [
  {
    id: 1,
    name: "Marko Marković",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    recipes: 9,
  },
  {
    id: 2,
    name: "Jovana Petrović",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    recipes: 15,
  },
  {
    id: 3,
    name: "Nikola Nikolić",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    recipes: 5,
  },
  {
    id: 4,
    name: "Ana Anić",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    recipes: 12,
  },
  {
    id: 5,
    name: "Stefan Stević",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    recipes: 8,
  },
];

const getMedal = (index) => {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return null;
};

const Leaderboard = () => {
  // Sortiranje po broju recepata opadajuće
  const sortedUsers = [...users].sort((a, b) => b.recipes - a.recipes);

  return (
    <div className="leaderboard-page" style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#e7666c", marginBottom: 32 }}>
        🏆 Leaderboard
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedUsers.map((user, i) => (
          <li
            key={user.id}
            style={{
              background: i < 3 ? "#fffbe6" : "#fff",
              border: "1px solid #eee",
              borderRadius: 10,
              marginBottom: 18,
              padding: 16,
              display: "flex",
              alignItems: "center",
              boxShadow: i < 3 ? "0 4px 18px rgba(255,214,10,0.08)" : "0 2px 6px rgba(0,0,0,0.04)",
              fontWeight: i < 3 ? 700 : 500,
            }}
          >
            <span style={{ fontSize: 28, marginRight: 20 }}>{getMedal(i) || i + 1}</span>
            <img
              src={user.image}
              alt={user.name}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #e7666c",
                marginRight: 16,
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: 18 }}>{user.name}</span>
            </div>
            <span style={{ fontSize: 20, color: "#e7666c", minWidth: 38, textAlign: "right" }}>
              {user.recipes}
            </span>
            <span style={{ fontSize: 14, color: "#666", marginLeft: 8 }}>recepata</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;