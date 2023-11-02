import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import DeleteItem from "../DeleteItem/DeleteItem";
import { BaseURL } from "../../utils/Base-url";
import AddShop from "./Add-shop";
import EditShop from "./Edit-shop";

const Shop = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
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
    <Layout>
      <div className="p-4 bg-light me-2 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Shop</h1>
          <button
            className="btn btn-outline-dark"
            onClick={() => setAddModal(!addModal)}
          >
            + Add Shop
          </button>
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
                <th className="text-end" scope="col">
                  Actions
                </th>
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
                    <img width={100} src={`${BaseURL}${shop.img}`} alt="" />
                  </td>
                  <td>{shop?.name}</td>
                  <td align="center">{shop?.price}</td>
                  <td align="center">{shop?.quantity}</td>
                  <td>
                    <p className="text-wrapp">{shop?.content}</p>
                  </td>
                  <td align="right">
                    <EditShop data={shop} get_data={getData} />

                    <DeleteItem
                      get_data={getData}
                      url={`v1/shop_news/drugs_crud_views/${shop?.id}/`}
                      toggle={setDeleteModal}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {addModal && <AddShop get_data={getData} toggle={setAddModal} />}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
