import React from "react";
import "./CustomDropdown.scss";

const CustomDropdown = ({
  selectOptionData,
  defaultValue = `Select an option`,
}) => {
  return (
    <select id="custom-select-dropdown" className="custom-select-dropdown">
      {
        <option disabled className="option default" value="">
          {defaultValue}
        </option>
      }
      {selectOptionData?.map((item, index) => (
        <option className="option" key={index} value={item?.value}>
          {item?.label}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;
