import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const AddPage = () => {
  return (
    <Layout>
      <div className="d-flex h-100  justify-content-center align-items-center">
        <form className="w-50 border p-3">
          <h2 className="text-center">Add Page</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="page-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="page-title"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="pages-description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="pages-description"
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <Link to={"/pages-list/"} className="btn btn-secondary">
              Cencel
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddPage;
