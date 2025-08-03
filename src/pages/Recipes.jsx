import React, { useState, useEffect } from "react";
const LS_KEY = "recipes_v1";

export default function Recipes() {
  // Inicijalizacija iz localStorage ili sa mock podacima
  const initialRecipes = JSON.parse(localStorage.getItem(LS_KEY)) || [
    {
      id: 1,
      name: "Jaje na oko",
      description: "Prženo jaje na ulju",
      instructions: "Razbiti jaje na vruće ulje, pržiti nekoliko minuta.",
      time: 5,
      timeUnit: "min",
      servings: 1,
      ingredients: [
        { name: "Jaje", quantity: 1, unit: "kom" },
        { name: "Ulje", quantity: 10, unit: "ml" }
      ],
      videoUrl: "https://www.youtube.com/watch?v=GgJ0vmKCO3o"
    },
    {
      id: 2,
      name: "Pasta",
      description: "Klasična testenina sa sosom.",
      instructions: "Skuvati pastu, dodati sos, poslužiti toplo.",
      time: 20,
      timeUnit: "min",
      servings: 2,
      ingredients: [
        { name: "Pasta", quantity: 200, unit: "g" },
        { name: "Sos", quantity: 100, unit: "ml" }
      ]
      // Ovaj nema videoUrl
    }
  ];

  const [recipes, setRecipes] = useState(initialRecipes);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [openedId, setOpenedId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    instructions: "",
    time: "",
    timeUnit: "min",
    servings: "",
    ingredients: [],
  });

  const [ingredient, setIngredient] = useState({ name: "", quantity: "", unit: "kom" });

  // Čuvanje u localStorage svaki put kad se promeni recipes
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(recipes));
  }, [recipes]);

  // Forma - handle promene
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.name && ingredient.quantity) {
      setForm((f) => ({
        ...f,
        ingredients: [...f.ingredients, ingredient],
      }));
      setIngredient({ name: "", quantity: "", unit: "kom" });
    }
  };

  const handleEdit = (recipe) => {
    setForm({
      name: recipe.name,
      description: recipe.description,
      instructions: recipe.instructions,
      time: recipe.time,
      timeUnit: recipe.timeUnit,
      servings: recipe.servings,
      ingredients: recipe.ingredients || [],
    });
    setEditingId(recipe.id);
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    if (window.confirm("Da li ste sigurni da želite da obrišete recept?")) {
      setRecipes(recipes.filter((r) => r.id !== id));
      if (openedId === id) setOpenedId(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.instructions) return;

    if (editingId) {
      setRecipes((prev) =>
        prev.map((r) =>
          r.id === editingId
            ? { ...form, id: editingId }
            : r
        )
      );
      setEditingId(null);
    } else {
      setRecipes([
        ...recipes,
        { ...form, id: Date.now() }
      ]);
    }
    setForm({
      name: "",
      description: "",
      instructions: "",
      time: "",
      timeUnit: "min",
      servings: "",
      ingredients: [],
    });
    setShowForm(false);
  };

  return (
    <div className="recipes-page">
      <h2>Recepti</h2>
      <button className="add-recipe-btn" onClick={() => {
        setShowForm((s) => !s);
        setEditingId(null);
        setForm({
          name: "",
          description: "",
          instructions: "",
          time: "",
          timeUnit: "min",
          servings: "",
          ingredients: [],
        });
      }}>
        {showForm ? "Otkaži" : "Dodaj recept"}
      </button>

      {showForm && (
        <form className="recipe-form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              name="name"
              placeholder="Naziv recepta"
              value={form.name}
              onChange={handleFormChange}
              required
            />
            <input
              name="description"
              placeholder="Kratak opis"
              value={form.description}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              name="time"
              placeholder="Vreme pripreme"
              type="number"
              min="1"
              value={form.time}
              onChange={handleFormChange}
              required
              style={{ width: 120 }}
            />
            <select
              name="timeUnit"
              value={form.timeUnit}
              onChange={handleFormChange}
              style={{ width: 80 }}
            >
              <option value="min">min</option>
              <option value="h">h</option>
            </select>
            <input
              name="servings"
              placeholder="Broj osoba"
              type="number"
              min="1"
              value={form.servings}
              onChange={handleFormChange}
              required
              style={{ width: 120 }}
            />
          </div>
          <div className="form-row ingredients-row">
            <b>Potrebni artikli:</b>
            <input
              name="name"
              placeholder="Naziv artikla"
              value={ingredient.name}
              onChange={handleIngredientChange}
              style={{ width: 140 }}
            />
            <input
              name="quantity"
              placeholder="Količina"
              value={ingredient.quantity}
              onChange={handleIngredientChange}
              style={{ width: 70 }}
            />
            <select
              name="unit"
              value={ingredient.unit}
              onChange={handleIngredientChange}
              style={{ width: 70 }}
            >
              <option value="kom">kom</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="kg">kg</option>
              <option value="l">l</option>
            </select>
            <button className="add-ingredient-btn" onClick={addIngredient} type="button">
              + Dodaj artikal
            </button>
          </div>
          <div className="form-row">
            <ul className="ingredients-list">
              {form.ingredients.map((item, i) => (
                <li key={i}>
                  {item.name} — {item.quantity} {item.unit}
                </li>
              ))}
            </ul>
          </div>
          <textarea
            name="instructions"
            placeholder="Uputstvo za pripremu"
            value={form.instructions}
            onChange={handleFormChange}
            required
            style={{ width: "100%" }}
          />
          <button className="submit-recipe-btn" type="submit">
            Sačuvaj recept
          </button>
        </form>
      )}

      {/* GRID KARTICE */}
      <div className="recipe-list-grid">
        {recipes.map((rec) => (
          <div
            className={`recipe-card${openedId === rec.id ? " open" : ""}`}
            key={rec.id}
            onClick={() => setOpenedId(openedId === rec.id ? null : rec.id)}
            style={{ cursor: "pointer" }}
          >
            <h3>{rec.name}</h3>
            <p className="recipe-desc">{rec.description}</p>
            <p><b>🕒</b> {rec.time} {rec.timeUnit} &nbsp; <b>👤</b> {rec.servings}</p>
            <b>Sastojci:</b>
            <ul>
              {rec.ingredients?.map((item, i) => (
                <li key={i}>{item.name} — {item.quantity} {item.unit}</li>
              ))}
            </ul>
            {openedId === rec.id && (
              <>
                <b>Uputstvo za pripremu:</b>
                <p style={{ whiteSpace: "pre-wrap", marginBottom: 8 }}>{rec.instructions}</p>

                {/* VIDEO DUGME */}
                {rec.videoUrl ? (
                  <a
                    href={rec.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "8px 20px",
                      margin: "12px 0",
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
                  <div style={{ fontStyle: "italic", color: "#888" }}>
                    Video nije dostupan za ovaj recept.
                  </div>
                )}
              </>
            )}
            <div style={{ marginTop: 6, display: "flex", gap: 8 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(rec);
                }}
                style={{ background: "#3954bf" }}
                type="button"
              >
                Izmeni
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(rec.id);
                }}
                style={{ background: "#E63946" }}
                type="button"
              >
                Obriši
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}