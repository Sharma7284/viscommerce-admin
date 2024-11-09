import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CustomMenuItem.scss";

const CustomMenuItem = ({ menuItem }) => {
  const location = useLocation();

  const currentPathname = location.pathname;

  return (
    <div
      className={`custom-menu-item  ${
        currentPathname === `/${menuItem.navigate}` ? "is-active" : ""
      }`}
    >
      {menuItem?.fn ? (
        <Link className={`menu-item-link`} onClick={menuItem?.fn}>
          {menuItem?.startIcon}
          <span>{menuItem.label}</span>
        </Link>
      ) : (
        <Link className={`menu-item-link`} to={"/" + menuItem?.navigate}>
          {menuItem?.startIcon}
          <span>{menuItem.label}</span>
        </Link>
      )}
    </div>
  );
};

export default CustomMenuItem;
