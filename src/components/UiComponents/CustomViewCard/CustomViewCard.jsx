import React from "react";
import "./CustomViewCard.scss";

const CustomViewCard = ({ data }) => {
  return (
    <div
      className="custom-view-card"
      style={{ backgroundColor: `${data.color}` }}
    >
      <div className="card-icon">{data?.icon}</div>
      <div>
        <h1 className="card-number">{data?.number}</h1>
        <h4 className="card-title">{data?.title}</h4>
      </div>
    </div>
  );
};

export default CustomViewCard;
