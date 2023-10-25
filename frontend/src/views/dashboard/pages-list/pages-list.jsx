import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { token } from "./add-page";

const PagesList = () => {
  const [pages, setPages] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://192.168.1.174:8000/file-upload", {
        headers: {
          "x-access-tokens": token,
        },
      });

      setPages(res.data.users);
      console.log(res.data.users);
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
                {pages.map((item) => (
                  <tr key={item?.msg?.id}>
                    <td>{item?.msg?.title}</td>
                    <td>{item.msg?.description}</td>
                    <td>
                      <Link
                        to={`/pages-list/view-page/${item.msg.id}/`}
                        className="view"
                        title="View"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </Link>

                      <Link
                        to={`/pages-list/edit-page/${item.msg.id}/`}
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </Link>
                      <Link
                        to={`/pages-list/delete-page/${item.msg.id}/`}
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
