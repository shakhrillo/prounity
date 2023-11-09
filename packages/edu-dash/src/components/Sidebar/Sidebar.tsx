import { Outlet, Link } from "react-router-dom";
import "./Sidebar.css";
import { PuAccordion, PuText } from "react-library";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <PuText>
            <h2>Sidebar</h2>
          </PuText>
          <hr />
          <div className="navs">
            <PuAccordion className="collapse_nav">
              <span slot="header">Users</span>
              <div slot="content">
                <Link className="nav_link" to={"/user_teachers_views"}>
                  Teachers
                </Link>
                <Link className="nav_link" to={"/user_student_views"}>
                  Students
                </Link>
              </div>
            </PuAccordion>
            <PuAccordion className="collapse_nav">
              <span slot="header">Courses</span>
              <div slot="content">
                <Link className="nav_link" to={"/all-courses"}>
                  All Courses
                </Link>
                <Link className="nav_link" to={"/new-courses"}>
                  New Courses
                </Link>
              </div>
            </PuAccordion>
            <Link to={"/category"} className="nav_link">
              <div className="uncollapse_nav">
                <h4>Category</h4>
              </div>
            </Link>
            <Link to={"/"} className="nav_link">
              <div className="uncollapse_nav">
                <h4>Support</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
