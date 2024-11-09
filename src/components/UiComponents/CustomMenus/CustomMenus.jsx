import React from "react";
import CustomMenuItem from "./CustomMenuItem/CustomMenuItem";

const CustomMenus = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <CustomMenuItem key={index} menuItem={item}></CustomMenuItem>
        ))}
    </>
  );
};

export default CustomMenus;
