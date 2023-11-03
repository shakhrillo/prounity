import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const navs = [
  {
    id: 3,
    name: "Doctors",
    isDropdownOpen: false,
    button: "Add doctor",
    dropdownItems: [
      { name: "List", path: "/doctors" },
      { name: "Deleted", path: "/deleted-doctors" },
    ],
  },
  {
    id: 5,
    name: "Blogs",
    isDropdownOpen: false,
    button: "Add Blogs",
    dropdownItems: [
      { name: "List", path: "/blogs" },
    ],
  },
  {
    id: 6,
    name: "Patients",
    path: "/patients",
    button: false,
    dropdownItems: [
      { name: "List", path: "/doctors" },
      { name: "Deleted", path: "/" },
    ],
  },
  {
    id: 7,
    name: "Category",
    path: "/category",
    button: "Add category",
    dropdownItems: [
      { name: "List", path: "/doctors" },
      { name: "Deleted", path: "/" },
    ],
  },
  {
    id: 8,
    name: "Shop",
    path: "/shop",
    button: "Add Shop",
    dropdownItems: [
      { name: "List", path: "/doctors" },
      { name: "Deleted", path: "/" },
    ],
  },
];

const Sidebar = () => {
  const [sideNavs, setSideNavs] = useState(navs);

  const toggleDropdown = (id) => {
    const updatedData = sideNavs.map((item) => {
      if (item.id === id) {
        return { ...item, isDropdownOpen: !item.isDropdownOpen };
      }
      return item;
    });
    setSideNavs(updatedData);
  };

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light m-2 rounded-3"
        style={{ height: "calc(100vh - 16px)", width: 280 }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />
        <div className="nav nav-pills flex-column mb-auto">
          {sideNavs.map((item) => (
            <div
              role="button"
              key={item.id}
              className={`py-2 px-3 rounded-3 cursor-pointer ${item.isDropdownOpen ? "border  bg-white" : ""
                }`}
            >
              <h5 onClick={() => toggleDropdown(item.id)}>{item.name}</h5>
              {item.dropdownItems.length > 0 && item.isDropdownOpen && (
                <ul className="dropdown list-group ">
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <li key={index} className="list-group-item border-0">
                      <Link
                        to={dropdownItem?.path}
                        className="text-decoration-none text-primary"
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                  {item.button && (
                    <button className=" border-0 btn btn-success">
                      {item.button}
                    </button>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
