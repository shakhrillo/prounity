import React from "react";
import Sidebar from "../pages/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-100 d-flex h-100">
      <div className="w-100 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
