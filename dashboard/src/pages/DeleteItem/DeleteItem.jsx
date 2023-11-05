import React, { useState } from "react";
import { BaseURL } from "../../utils/Base-url";

const DeleteItem = ({ url, get_data }) => {
  console.log(url);
  const [show, setShow] = useState(false);
  const handleDelete = async () => {
    try {
      await fetch(`${BaseURL}/${url}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      get_data();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="btn btn-danger m-2"
      >
        d
      </button>
      {show && (
        <div className=" text-start h-100 modal-box">
          <div className="row justify-content-sm-center align-items-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title text-center fw-bold mb-4">
                    Delete Item
                  </h1>
                  <p className="card-text ">Lorem ipsum dolor sit amet.</p>
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="btn mt-4 float-right btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShow((prev) => !prev)}
                    type="button"
                    className="btn mt-4 float-right btn-secondary mx-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteItem;
