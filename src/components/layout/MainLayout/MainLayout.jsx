import React from "react";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="layout-sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="layout">
        <div className="layout-header">
          <Header></Header>
        </div>
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
