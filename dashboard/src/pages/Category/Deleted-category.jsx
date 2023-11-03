import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/Base-url";

const DeletedCategory = () => {
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
    <div className="p-4 bg-light me-2 w-100">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Deleted Category</h1>
      </div>
      <div className="card p-3">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <th scope="row">{index + 1}</th>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeletedCategory;
