// src/components/YammiSidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const YammiSidebar = () => (
  <div className="sidebar">
    <h1>Yammi</h1>
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
      <NavLink to="/fridge" className={({ isActive }) => (isActive ? "active" : undefined)}>Fridge</NavLink>
      <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active" : undefined)}>Recipes</NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : undefined)}>Profile</NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : undefined)}>Leaderboard</NavLink>
      <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : undefined)}>Community</NavLink>
      <NavLink to="/communityrecipes" className={({ isActive }) => (isActive ? "active" : undefined)}>Community Recipes</NavLink>
      <NavLink to="/family" className={({ isActive }) => (isActive ? "active" : undefined)}>Family</NavLink>
      <NavLink to="/pets" className={({ isActive }) => (isActive ? "active" : undefined)}>Pets</NavLink>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : undefined)}>Settings</NavLink>
      <NavLink to="/budget" className={({ isActive }) => (isActive ? "active" : undefined)}>Budget</NavLink>
    </nav>
  </div>
);

export default YammiSidebar;