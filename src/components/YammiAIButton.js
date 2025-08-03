import React from "react";

export default function YammiButton() {
  return (
    <button
      className="yammi-button"
      onClick={() => alert("Yammi AI funkcija!")}
      style={{ marginBottom: 24 }}
    >
      Yammi AI
    </button>
  );
}