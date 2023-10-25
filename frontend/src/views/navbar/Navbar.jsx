import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return <div>
        <nav className="navbar px-5 py-2 navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="d-flex ml-auto gap-2">
                <Link to={'/register'}><button className="btn btn-primary">Register</button></Link>
                <Link to={'/login'}><button className="btn btn-success">Login</button></Link>
            </div>
        </nav>

        <div className="mt-5">
            <Outlet />
        </div>
    </div>
        ;
};

export default Navbar;
