import React from "react";
import "./CustomSearchBox.scss";

const CustomSearchBox = ({ disabled }) => {
  return (
    <div className="custom-search-box">
      <input type="text" placeholder="Search..." disabled={disabled}></input>
    </div>
  );
};

export default CustomSearchBox;
