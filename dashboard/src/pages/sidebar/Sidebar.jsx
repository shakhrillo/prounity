import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, Outlet } from "react-router-dom";

const navbarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/",
  },
  {
    id: 3,
    name: "Doctors",
    path: "/doctors",
  },
  {
    id: 4,
    name: "Clients",
    path: "/clients",
  },
  {
    id: 5,
    name: "Blogs",
    path: "/blogs",
  },
  {
    id: 6,
    name: "Patients",
    path: "/patients",
  },
  {
    id: 7,
    name: "Category",
    path: "/category",
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("activeItem")) || 1
  );

  const handleItemClick = (id) => {
    localStorage.setItem("activeItem", id);
    setActiveItem(id);
  };

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light m-2 rounded"
        style={{ height: "calc(100vh - 16px)", width: 280 }}
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
          {navbarData.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${
                  activeItem === item.id ? "active" : "text-dark"
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out.
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
