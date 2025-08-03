import React from "react";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      {/* Dodaj dodatne informacije i stilove po potrebi */}
    </div>
  );
};

export default ChallengeCard;