import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const ViewUser = () => {
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="card p-2" style={{ width: "25rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center">User Profile</h3>
            <div className="my-4 d-flex justify-content-center align-items-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="User Profile"
                width={80}
                className="img-fluid rounded-circle "
              />
            </div>
            <p className="card-text">
              <strong>First Name:</strong> John
            </p>
            <p className="card-text">
              <strong>Last Name:</strong> Doe
            </p>
            <p className="card-text">
              <strong>Email:</strong> JohnDoe@gmail.com
            </p>
            <p className="card-text">
              <strong>Username:</strong> JohnDoe@gmail.com
            </p>
            <div className="d-flex justify-content-end gap-2">
              <Link to={"/"} className="btn btn-danger">
                Cencel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewUser;
