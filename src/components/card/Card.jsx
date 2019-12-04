import React from "react";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="moster"
        src={`https://robohash.org/${Math.random()}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
