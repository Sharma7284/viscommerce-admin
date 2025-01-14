import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ label, onClick, isDisabled = false, variant }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`btn ${variant}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
