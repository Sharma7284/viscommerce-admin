import React from "react";
import "./CustomDialog.scss";

const CustomDialog = ({ content }) => {
  return (
    <div className="dialog">
      <div className="dialog-content">{content}</div>
    </div>
  );
};

export default CustomDialog;
