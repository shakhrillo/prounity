import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/Base-url";

const DeletedShop = () => {
  const [shop_data, setshop_data] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `${BaseURL}/v1/shop_news/drugs_list_views/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      setshop_data(jsonData);
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
        <h1>Deleted Shop</h1>
      </div>
      <div className="card p-3">
        <table className="table table-bordered justify-content-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Content</th>
            </tr>
          </thead>
          <tbody>
            {shop_data.map((shop, index) => (
              <tr key={shop?.id}>
                <th class="align-middle text-center" scope="row">
                  {index + 1}
                </th>
                <td>{shop?.company}</td>
                <td align="center">
                  <img width={100} src={`${BaseURL}${shop.img}`} alt="img" />
                </td>
                <td>{shop?.name}</td>
                <td align="center">{shop?.price}</td>
                <td align="center">{shop?.quantity}</td>
                <td>
                  <p className="text-wrapp">{shop?.content}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeletedShop;
