import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { BaseURL } from "../../utils/Base-url";

const Category = () => {
  const [addModal, setAddModal] = useState(false);
  const [category, setCategory] = useState({});
  const [sellect_data, setSellect_data] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    try {
      const users = await fetch(
        `${BaseURL}/v1/api/doctor-categories-detail/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const sellectData = await fetch(
        `${BaseURL}/v1/api/user_group_doctor_views/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = await users.json();
      setCategory(user);
      setSellect_data(await sellectData.json());
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(category);
  const handleOptionSelect = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setUser(selectedValues);
  };
  const handlePost = async () => {
    try {
      await fetch(
        `http://192.168.1.163:8000/v1/api/doctor-categories-detail/${id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ user }),
        }
      );
      setAddModal(false);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-light me-2 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Edit Category {category.name}</h1>
          <button
            className="btn btn-outline-dark"
            onClick={() => setAddModal(true)}
          >
            + Add Doctor
          </button>
        </div>
        <div className="card p-3">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
              </tr>
            </thead>
            <tbody>
              {category?.user?.map((item, index) => (
                <tr key={item?.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.first_name}</td>
                  <td>{item?.first_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {addModal && (
            <div>
              <div className="h-100 modal-box">
                <div className="row justify-content-sm-center align-items-center h-100">
                  <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg">
                      <div className="card-body p-4">
                        <h1 className="fs-4 card-title text-center fw-bold mb-4">
                          Add users
                        </h1>
                        <form
                          method="POST"
                          className="needs-validation"
                          autoComplete="off"
                        >
                          <select
                            multiple
                            className="form-select"
                            size="5"
                            aria-label="size 3 select example"
                            onChange={handleOptionSelect}
                          >
                            {sellect_data.map((item) => (
                              <option value={item?.id}>
                                {item?.first_name} {item?.last_name}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={handlePost}
                            type="button"
                            className="btn mt-4 float-right btn-success"
                          >
                            Save changes
                          </button>
                          <button
                            onClick={() => setAddModal(false)}
                            type="button"
                            className="btn mt-4 float-right btn-secondary mx-2"
                          >
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
