import axios from "axios";
import DeleteItem from "../../components/delete-item";
import ProductAdd from "../../components/products-actions/product-add";
import ProductEdit from "../../components/products-actions/product-edit";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NjYwNzE4LCJpYXQiOjE2OTgwNTU5MTgsImp0aSI6ImVmNTk3Mjg1MWQxYTQ4NDU5MzhhOTk5NzU5NzhjZWQ4IiwidXNlcl9pZCI6M30.N5Or7cM1JtFyJ99xDGkLSOLMgnXbHAwB3lQCMNu-Ug4";

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.1.181:8000/api/product_list/"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (new_data) => {
    try {
      await axios.post(
        "http://192.168.1.181:8000/api/product_list/",
        new_data,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const editProduct = async (edited_data, item_id) => {
    console.log(edited_data);
    try {
      const res = await axios.put(
        `http://192.168.1.181:8000/api/product_detail/${item_id}/`,
        edited_data,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      getData();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: 280, height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="container">
        <div className="mt-5">
          <div className="table-wrapper">
            <div className="table-title ">
              <div className="row ">
                <div className="col-sm-6">
                  <h2>Products</h2>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  <ProductAdd addProduct={addProduct} />
                </div>
              </div>
            </div>
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th style={{ justifyContent: "end" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.product_name}</td>
                    <td>{item?.product_price}</td>
                    <td>
                      <ProductEdit id={item?.id} EditProduct={editProduct} />
                      <DeleteItem getData={getData} id={item?.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
