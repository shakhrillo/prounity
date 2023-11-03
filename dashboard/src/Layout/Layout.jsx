import React from "react";
import Sidebar from "../pages/sidebar/Sidebar";
import Navbar from "../pages/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-100 d-flex h-100">
      <Sidebar />
      <div className="w-100 p-2">
        {children}
      </div>
    </div>
  );
};

export default Layout;
