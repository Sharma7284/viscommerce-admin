import React, { useEffect, useState } from "react";
import "./CustomTabs.scss";

const CustomTabs = ({ orientaion, tabsData, handleTabButton }) => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    handleTabButton(currentTab);
  }, [currentTab]);

  return (
    <div className={`custom-tabs`}>
      {tabsData.map((item, index) => (
        <button
          key={index}
          disabled={item?.isDisable}
          className={`tabBtn ${index === currentTab ? "is-active" : ""}`}
          onClick={() => setCurrentTab(index)}
        >
          <span>{item?.startIcon}</span>
          <span>{item?.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CustomTabs;
