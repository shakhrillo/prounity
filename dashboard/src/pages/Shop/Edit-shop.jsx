import React, { useState } from "react";
import { BaseURL } from "../../utils/Base-url";

const EditShop = ({ toggle, data, get_data }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(data?.name);
  const [companyName, setCompanyName] = useState(data?.company);
  const [price, setPrice] = useState(data?.price);
  const [quantity, setQuantity] = useState(data?.quantity);
  const [content, setContent] = useState(data?.content);
  const [show, setShow] = useState(false);
  const handleAddShop = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("company", companyName);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("content", content);
    if (image) {
      formData.append("img", image);
    }
    try {
      await fetch(`${BaseURL}/v1/shop_news/drugs_crud_views/${data?.id}/`, {
        method: "PUT",
        body: formData,
      });
      get_data();
      setShow((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="btn btn-warning"
      >
        Edit
      </button>
      {show && (
        <div className="h-100 text-start modal-box">
          <div className="row justify-content-sm-center align-items-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title text-center fw-bold mb-4">
                    Edit Shop
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
                      onChange={(e) => setImage(e.target.files[0])}
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
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
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
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
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
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
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddShop}
                      className="btn mt-4 float-right btn-success"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setShow((prev) => !prev)}
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
      )}
    </>
  );
};

export default EditShop;
