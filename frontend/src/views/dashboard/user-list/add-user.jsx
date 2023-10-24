import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const AddUser = () => {
  return (
    <Layout>
      <div className="d-flex h-100  justify-content-center align-items-center">
        <form className="w-50 border p-3">
          <h2 className="text-center">Add User</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Gmail
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <Link to={"/"} className="btn btn-secondary ">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddUser;
