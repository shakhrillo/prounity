import React, { useEffect, useState } from "react";
import AddCategory from "./Add-category";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Category = () => {
  const [addModal, setAddModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.163:8000/v1/api/doctor-categories-list/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      setCategories(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="p-4 bg-light me-2 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Doctors</h1>
          <button className="btn btn-outline-dark">+ Add Doctor</button>
        </div>
        <div className="card p-3">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">USER</th>
                <th className="text-end" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td align="right">
                    <button className="btn btn-warning mx-2">
                      <Link
                        className="text-decoration-none text-white"
                        to={`edit-category-${category?.id}`}
                      >
                        Edit
                      </Link>
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {addModal && <AddCategory />}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
