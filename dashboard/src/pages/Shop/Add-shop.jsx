import React, { useRef, useState } from "react";
import { BaseURL } from "../../utils/Base-url";

const AddShop = ({ toggle, get_data }) => {
  const imageInputRef = useRef();
  const nameInputRef = useRef();
  const companyNameInputRef = useRef();
  const priceInputRef = useRef();
  const quantityInputRef = useRef();
  const contentInputRef = useRef();

  const handleAddShop = async () => {
    const formData = new FormData();
    formData.append("img", imageInputRef.current.files[0]);
    formData.append("name", nameInputRef.current.value);
    formData.append("company", companyNameInputRef.current.value);
    formData.append("price", priceInputRef.current.value);
    formData.append("quantity", quantityInputRef.current.value);
    formData.append("content", contentInputRef.current.value);
    try {
      await fetch(`${BaseURL}/v1/shop_news/drugs_list_views/`, {
        method: "POST",
        body: formData,
      });
      get_data();
      toggle(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-100 modal-box">
      <div className="row justify-content-sm-center align-items-center h-100">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h1 className="fs-4 card-title text-center fw-bold mb-4">
                Add Shop
              </h1>
              <form
                method="POST"
                className="needs-validation"
                autoComplete="off"
              >
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control my-2"
                  ref={imageInputRef}
                />

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      ref={nameInputRef}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="company_name" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      id="company_name"
                      ref={companyNameInputRef}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Price"
                      id="price"
                      ref={priceInputRef}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity"
                      id="quantity"
                      ref={quantityInputRef}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    placeholder="Text..."
                    rows="3"
                    ref={contentInputRef}
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleAddShop}
                  className="btn mt-4 float-right btn-success"
                >
                  Add shop
                </button>
                <button
                  type="button"
                  onClick={() => toggle(false)}
                  className="btn mt-4 mx-2 float-right btn-secondary"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShop;
