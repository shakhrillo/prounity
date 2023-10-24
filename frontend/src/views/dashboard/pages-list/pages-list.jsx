import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const PagesList = () => {
  const table_data = [
    {
      id: 1,
      name: "John Doe",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
  ];
  return (
    <Layout>
      <div className="d-flex">
        <div className="container-lg">
          <div className="table-wrapper mt-5">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>Pages List</h2>
                </div>
                <div className="col-sm-4 d-flex justify-content-end my-2">
                  <Link
                    to={"/pages-list/add-page/"}
                    type="button"
                    className="btn btn-primary add-new"
                  >
                    Add New page
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {table_data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>

                    <td>
                      <Link
                        to={`/pages-list/view-page/${item.id}/`}
                        className="view"
                        title="View"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </Link>

                      <Link
                        to={`/pages-list/edit-page/${item.id}/`}
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </Link>
                      <Link
                        to={`/pages-list/delete-page/${item.id}/`}
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PagesList;
