import React from "react";

export default function YammiButton() {
  return (
    <button
      className="yammi-button"
      style={{ marginBottom: "24px" }}
      onClick={() => alert("Yammi AI funkcija je u izradi!")}
    >
      Yammi AI
    </button>
  );
}