import React from "react";
import "./card.style.scss";

const Card = ({ img, heading, info }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{heading}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Card;
