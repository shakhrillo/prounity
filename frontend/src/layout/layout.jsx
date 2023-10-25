/* eslint-disable react/prop-types */
import Sidebar from "../views/dashboard/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar /> <div className="w-100">{children}</div>
    </div>
  );
};

export default Layout;
