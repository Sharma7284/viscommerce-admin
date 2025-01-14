import React from "react";

const GridLayout = ({ children, cols, margin }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gap: "20px",
        margin: margin,
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
