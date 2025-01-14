import React from "react";
import "./Sidebar.scss";
import APP_LOGO from "./Assets/APP_LOGO.webp";
import CustomMenus from "../../UiComponents/CustomMenus/CustomMenus";
import { MenuData, LogoutData } from "./Siderbar";

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar">
      <div className="sidebar-logo-holder">
        <img
          className="sidebar-logo-image"
          src={APP_LOGO}
          alt={APP_LOGO}
          height={48}
          loading="lazy"
        />
      </div>
      <div className="sidebar-menus">
        <div className="menu-top">
          <CustomMenus data={MenuData}></CustomMenus>
        </div>
        <div className="menu-bottom">
          <CustomMenus data={LogoutData}></CustomMenus>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
