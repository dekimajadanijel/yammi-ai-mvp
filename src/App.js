import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YammiSidebar from "./components/YammiSidebar";
import Navbar from "./components/Navbar";
import YammiButton from "./components/YammiButton";
import Home from "./pages/Home";
import Fridge from "./pages/Fridge";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";
import Budget from "./pages/Budget";
import RecipeDetails from "./pages/RecipeDetails";
import { RecipesProvider } from "./context/RecipesContext";
import "./index.css";
import CommunityUsers from "./pages/CommunityUsers";

// Dodaj import za nove stranice:
import CommunityRecipes from "./pages/CommunityRecipes";
import Family from "./pages/Family";
import Pets from "./pages/Pets";

function App() {
  return (
    <RecipesProvider>
      <Router>
        <div className="app-container">
          <YammiSidebar />
          <div className="main-content">
            <Navbar />
            <YammiButton />
            <Routes>
              <Route path="/budget" element={<Budget />} />
              <Route path="/" element={<Home />} />
              <Route path="/fridge" element={<Fridge />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
              <Route path="/community" element={<CommunityUsers />} />

              {/* NOVO: Dodate rute za CommunityRecipes, Family, Pets */}
              <Route path="/communityrecipes" element={<CommunityRecipes />} />
              <Route path="/family" element={<Family />} />
              <Route path="/pets" element={<Pets />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RecipesProvider>
  );
}

export default App;