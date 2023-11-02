import React, { useEffect, useState } from "react";
import AddCategory from "./Add-category";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import DeleteItem from "../DeleteItem/DeleteItem";
import { BaseURL } from "../../utils/Base-url";

const Category = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `${BaseURL}/v1/api/doctor-categories-list/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setCategories(jsonData);
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
          <h1>Category</h1>
          <button
            className="btn btn-outline-dark"
            onClick={() => setAddModal(!addModal)}
          >
            + Add Category
          </button>
        </div>
        <div className="card p-3">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
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
                        to={`/category/${category?.id}`}
                      >
                        Edit
                      </Link>
                    </button>
                    <DeleteItem
                      get_data={getData}
                      url={`v1/api/doctor-categories-detail/${category?.id}/`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {addModal && <AddCategory get_data={getData} toggle={setAddModal} />}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
