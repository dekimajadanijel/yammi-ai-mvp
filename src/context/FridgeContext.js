import React, { useState, useEffect } from "react";

const UNITS = ["kom", "kg", "g", "l", "ml"];

export default function Fridge() {
  // Povuci iz localStorage ili postavi na prazno
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("fridge_items") || "[]")
  );

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    unit: "kom",
  });

  // Pamti promene
  useEffect(() => {
    localStorage.setItem("fridge_items", JSON.stringify(items));
  }, [items]);

  // Dodavanje artikla
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.quantity) return;
    setItems([
      ...items,
      { ...form, id: Date.now() }
    ]);
    setForm({ name: "", quantity: "", unit: "kom" });
  };

  // Brisanje artikla
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="fridge-page">
      <h2>Frižider</h2>
      <form className="fridge-form" onSubmit={handleSubmit}>
        <input
          placeholder="Naziv artikla"
          value={form.name}
          name="name"
          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
          required
        />
        <input
          placeholder="Količina"
          value={form.quantity}
          name="quantity"
          type="number"
          min="0"
          onChange={(e) => setForm(f => ({ ...f, quantity: e.target.value }))}
          required
        />
        <select
          value={form.unit}
          name="unit"
          onChange={(e) => setForm(f => ({ ...f, unit: e.target.value }))}
        >
          {UNITS.map(u => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
        <button className="fridge-add-btn" type="submit">
          Dodaj
        </button>
      </form>

      <div className="fridge-items-grid">
        {items.length === 0 && (
          <p style={{ color: "#999", gridColumn: "span 3", textAlign: "center" }}>Frižider je prazan.</p>
        )}
        {items.map((item) => (
          <div className="fridge-item-card" key={item.id}>
            <div className="fridge-item-title">{item.name}</div>
            <div className="fridge-item-qty">
              {item.quantity} <span className="fridge-unit">{item.unit}</span>
            </div>
            <button
              className="fridge-delete-btn"
              onClick={() => deleteItem(item.id)}
              type="button"
            >
              Obriši
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}