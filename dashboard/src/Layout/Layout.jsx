import React from "react";
const Layout = ({ children }) => {
  return (
    <div className="w-100 d-flex h-100">
      <div className="w-100">{children}</div>
    </div>
  );
};

export default Layout;
