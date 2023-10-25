import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { token } from "../pages-list/add-page";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    console.log("getdata");
    try {
      const res = await axios.get("http://192.168.1.174:8000/users", {
        headers: {
          "x-access-tokens": token,
        },
      });
      console.log(res.data.users);
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
                  <th>User Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user?.msg?.public_id}>
                    <td>{user?.msg?.username}</td>
                    <td>{user?.msg?.first_name}</td>
                    <td>{user?.msg?.last_name}</td>
                    <td>
                      <Link
                        to={`/user-list/view-user/${user?.msg?.public_id}/`}
                        className="view"
                        title="View"
                      >
                        <i className="material-icons"></i>
                      </Link>

                      <Link
                        to={`/user-list/edit-user/${user?.msg?.public_id}/`}
                        className="edit"
                        title="Edit"
                      >
                        <i className="material-icons"></i>
                      </Link>
                      <Link
                        to={`/user-list/delete-user/${user?.msg?.public_id}/`}
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
