import React, { useState } from "react";

export default function Budget() {
  const [budget, setBudget] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ name: "", amount: "" });

  const handleBudgetChange = (e) => setBudget(e.target.value);

  const handleExpenseChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (expense.name && expense.amount) {
      setExpenses([...expenses, { ...expense, amount: Number(expense.amount) }]);
      setExpense({ name: "", amount: "" });
    }
  };

  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  const remaining = budget - totalExpenses;

  return (
    <div className="budget-page">
      <h2>Budžet kuhinje</h2>

      <label>
        Ukupni budžet (RSD):
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Unesi budžet"
        />
      </label>

      <form onSubmit={addExpense} style={{ marginTop: 20 }}>
        <input
          name="name"
          value={expense.name}
          onChange={handleExpenseChange}
          placeholder="Naziv troška"
        />
        <input
          name="amount"
          type="number"
          value={expense.amount}
          onChange={handleExpenseChange}
          placeholder="Iznos (RSD)"
        />
        <button type="submit">Dodaj trošak</button>
      </form>

      <div style={{ marginTop: 30 }}>
        <h3>Troškovi:</h3>
        <ul>
          {expenses.map((exp, idx) => (
            <li key={idx}>
              {exp.name} — {exp.amount} RSD
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 30, fontWeight: "bold" }}>
        Ukupno potrošeno: {totalExpenses} RSD<br />
        Preostali budžet: {remaining} RSD
      </div>
    </div>
  );
}