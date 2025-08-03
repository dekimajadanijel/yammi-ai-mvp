import React, { useState } from "react";

const initialSettings = {
  language: "sr",
  notifications: true,
  darkMode: false,
  email: "korisnik@example.com",
};

export default function Settings() {
  const [settings, setSettings] = useState(initialSettings);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Podešavanja su sačuvana!");
    setTimeout(() => setMessage(""), 1800);
  };

  return (
    <div className="settings-page">
      <h2>Podešavanja</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Jezik aplikacije:
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="sr">Srpski</option>
            <option value="en">English</option>
          </select>
        </label>

        <label>
          Email za obaveštenja:
          <input
            name="email"
            type="email"
            value={settings.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="switch-label">
          <input
            name="notifications"
            type="checkbox"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Primaj obaveštenja
        </label>

        <label className="switch-label">
          <input
            name="darkMode"
            type="checkbox"
            checked={settings.darkMode}
            onChange={handleChange}
          />
          Tamni režim (Dark mode)
        </label>

        <button className="save-settings-btn" type="submit">
          Sačuvaj podešavanja
        </button>
        {message && <div className="settings-msg">{message}</div>}
      </form>
    </div>
  );
}