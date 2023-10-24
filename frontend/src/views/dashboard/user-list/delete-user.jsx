import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const DeleteUser = () => {
  return (
    <Layout>
      <div className="delete-item h-100 d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Delete User</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-danger">Delete</button>
              <Link to={"/"} className="btn btn-secondary">
                Cencel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteUser;
