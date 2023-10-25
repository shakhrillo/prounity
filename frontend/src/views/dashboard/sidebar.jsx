import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [active_id, setactive_id] = useState(
    localStorage.getItem("nav_active_id") || 1
  );
  const sidebar_menu = [
    {
      id: 1,
      name: "User List",
      path: "/user-list",
    },
    {
      id: 2,
      name: "Pages List",
      path: "/pages-list",
    },
    {
      id: 3,
      name: "Info",
      path: "/Info",
    },
  ];

  const navActiveId = (id) => {
    localStorage.setItem("nav_active_id", id);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: 280, height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {sidebar_menu.map((nav) => (
          <li key={nav.id} className="nav-item">
            <Link
              onClick={() => navActiveId(nav.id)}
              to={nav.path}
              className={`nav-link my-1  ${
                nav.id == active_id ? "active" : "link-dark border"
              } `}
              aria-current="page"
            >
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
