import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const DeletePage = () => {
  const handleDelete = async () => {
    console.log("Deleted");
    // try {
    //   const res = await axios.delete("", {
    //     headers: {
    //     },
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Layout>
      <div className="delete-item h-100 d-flex justify-content-center align-items-center">
        <div className="card border-danger" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Delete Page</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
              <Link to={"/pages-list/"} className="btn btn-secondary  ">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeletePage;
