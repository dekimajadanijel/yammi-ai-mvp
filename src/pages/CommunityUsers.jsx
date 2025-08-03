// CommunityUsers.jsx

import React from "react";

const users = [
  {
    id: 1,
    name: "Jelena",
    city: "Barcelona",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    recipes: 12,
    lastLogin: "2025-07-08 21:30",
  },
  {
    id: 2,
    name: "Danijel",
    city: "Split",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    recipes: 8,
    lastLogin: "2025-07-09 08:15",
  },
  // Dodaj još korisnika po želji
];

export default function CommunityUsers() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Community</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {users.map((user) => (
          <div key={user.id} style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            width: 220,
            padding: 16,
            background: "#fff"
          }}>
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: 70, height: 70, borderRadius: "50%", objectFit: "cover", marginBottom: 12 }}
            />
            <h3 style={{ margin: 0 }}>{user.name}</h3>
            <p style={{ margin: 0, color: "#888" }}>{user.city}</p>
            <p>Recepti: <b>{user.recipes}</b></p>
            <p style={{ fontSize: 13, color: "#aaa" }}>Zadnja prijava: {user.lastLogin}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
