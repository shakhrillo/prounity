import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const UserList = () => {
  const table_data = [
    {
      id: 1,
      name: "John Doe",
      gmail: "JohnDoe@gmail.com",
      phone: "11233",
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
                  <h2>User List</h2>
                </div>
                <div className="col-sm-4 d-flex justify-content-end my-2">
                  <Link
                    to={"/user-list/add-user/"}
                    type="button"
                    className="btn btn-primary add-new"
                  >
                    <i className="fa fa-plus" /> Add New User
                  </Link>
                </div>
              </div>
            </div>
            <table className="table  table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Gmail</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {table_data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.gmail}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Link
                        to={`/user-list/view-user/${item.id}/`}
                        className="view"
                        title="View"
                      >
                        <i className="material-icons"></i>
                      </Link>

                      <Link
                        to={`/user-list/edit-user/${item.id}/`}
                        className="edit"
                        title="Edit"
                      >
                        <i className="material-icons"></i>
                      </Link>
                      <Link
                        to={`/user-list/delete-user/${item.id}/`}
                        className="delete"
                        title="Delete"
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

export default UserList;
