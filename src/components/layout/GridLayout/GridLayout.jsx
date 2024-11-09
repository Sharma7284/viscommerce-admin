import React from "react";

const GridLayout = ({ children, cols }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
